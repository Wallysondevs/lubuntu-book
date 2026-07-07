import { Fragment, type ReactNode } from "react";

/**
 * Renderizador "markdown-lite" para o conteúdo dos capítulos.
 *
 * A intro e os textos são escritos como strings simples com uma sintaxe leve.
 * Antes isso era jogado cru num <p>, então quebras de parágrafo sumiam e o
 * **negrito** / `código` apareciam com os símbolos literais na tela.
 *
 * Sintaxe suportada:
 *   - parágrafos separados por linha em branco (\n\n)
 *   - `## Título`   -> subtítulo (h2)
 *   - `### Título`  -> subtítulo menor (h3)
 *   - linhas `- item` consecutivas -> lista com marcadores
 *   - inline: **negrito**  e  `código`
 */

// --- inline: **negrito** e `código` ---------------------------------------
export function inline(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  // separa mantendo os delimitadores: `code` tem prioridade sobre **bold**
  const re = /(`[^`]+`|\*\*[^*]+\*\*)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let key = 0;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) nodes.push(text.slice(last, m.index));
    const tok = m[0];
    if (tok.startsWith("`")) {
      nodes.push(<code key={key++}>{tok.slice(1, -1)}</code>);
    } else {
      nodes.push(<strong key={key++}>{tok.slice(2, -2)}</strong>);
    }
    last = m.index + tok.length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

/** Versão inline pura (para pontos, alertas, subtítulos). */
export function RichInline({ text }: { text: string }) {
  return <>{inline(text)}</>;
}

// --- blocos: parágrafos, headings e listas --------------------------------
export function RichText({ text }: { text: string }) {
  const lines = text.replace(/\r\n/g, "\n").split("\n");
  const blocks: ReactNode[] = [];
  let para: string[] = [];
  let list: string[] = [];
  let key = 0;

  const flushPara = () => {
    if (para.length) {
      const joined = para.join(" ").trim();
      if (joined) blocks.push(<p key={key++}>{inline(joined)}</p>);
      para = [];
    }
  };
  const flushList = () => {
    if (list.length) {
      const items = [...list];
      blocks.push(
        <ul key={key++}>
          {items.map((it, i) => (
            <li key={i}>{inline(it)}</li>
          ))}
        </ul>,
      );
      list = [];
    }
  };

  for (const raw of lines) {
    const line = raw.trim();
    if (line === "") {
      flushList();
      flushPara();
      continue;
    }
    if (line.startsWith("### ")) {
      flushList();
      flushPara();
      blocks.push(<h3 key={key++}>{inline(line.slice(4))}</h3>);
    } else if (line.startsWith("## ")) {
      flushList();
      flushPara();
      blocks.push(<h2 key={key++}>{inline(line.slice(3))}</h2>);
    } else if (line.startsWith("- ")) {
      flushPara();
      list.push(line.slice(2));
    } else {
      flushList();
      para.push(line);
    }
  }
  flushList();
  flushPara();

  return <Fragment>{blocks}</Fragment>;
}
