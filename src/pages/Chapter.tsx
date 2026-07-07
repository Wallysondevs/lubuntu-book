import { useRoute, Link, useLocation } from "wouter";
import { chapterMap, chapters, chapterIndex, sections } from "@/data/chapters";
import { useProgress } from "@/lib/course";
import { RichText, RichInline } from "@/lib/rich";
import PageContainer from "@/components/PageContainer";
import CodeBlock from "@/components/CodeBlock";
import AlertBox from "@/components/AlertBox";
import NotFound from "./NotFound";
import { ArrowLeft, ArrowRight, Check, Circle } from "lucide-react";
import { useEffect } from "react";

export default function ChapterPage() {
  const [, params] = useRoute("/c/:slug");
  const [, navigate] = useLocation();
  const slug = params?.slug ?? "";
  const ch = chapterMap[slug];
  const { isDone, toggle, markDone } = useProgress();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [slug]);

  if (!ch) return <NotFound />;

  const idx = chapterIndex(slug);
  const prev = idx > 0 ? chapters[idx - 1] : null;
  const next = idx < chapters.length - 1 ? chapters[idx + 1] : null;
  const sec = sections.find((s) => s.id === ch.section);
  const done = isDone(slug);

  return (
    <PageContainer title={ch.title} subtitle={ch.subtitle} difficulty={ch.difficulty}>
      {sec && (
        <p className="text-xs uppercase tracking-wide text-slate-500 mb-4">
          {sec.label} · Capítulo {idx + 1} de {chapters.length}
        </p>
      )}

      <RichText text={ch.intro} />

      {ch.codes.map((c, i) => (
        <CodeBlock key={i} code={c.code} language={c.lang} />
      ))}

      {ch.points.length > 0 && (
        <>
          <h2>Pontos-chave</h2>
          <ul>
            {ch.points.map((p, i) => (
              <li key={i}><RichInline text={p} /></li>
            ))}
          </ul>
        </>
      )}

      {ch.alerts.map((a, i) => (
        <AlertBox key={i} type={a.type}>
          <RichInline text={a.content} />
        </AlertBox>
      ))}

      {/* Barra de conclusão do curso */}
      <div className="mt-10 flex flex-col sm:flex-row items-center gap-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 p-4">
        <button
          onClick={() => toggle(slug)}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-colors ${
            done
              ? "bg-emerald-500 text-white hover:bg-emerald-600"
              : "bg-lubuntu-blue text-white hover:bg-lubuntu-blue-dark"
          }`}
        >
          {done ? <Check size={16} /> : <Circle size={16} />}
          {done ? "Concluído" : "Marcar como concluído"}
        </button>
        <p className="text-sm text-slate-500 dark:text-slate-400 text-center sm:text-left">
          {done
            ? "Boa! Este capítulo já está no seu progresso."
            : "Marque quando terminar — seu progresso fica salvo neste navegador."}
        </p>
        {next && (
          <button
            onClick={() => {
              markDone(slug);
              navigate(`/c/${next.slug}`);
            }}
            className="sm:ml-auto inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold border border-lubuntu-blue/40 text-lubuntu-blue dark:text-lubuntu-blue-light hover:bg-lubuntu-blue/10 transition-colors"
          >
            Concluir e avançar <ArrowRight size={15} />
          </button>
        )}
      </div>

      <nav className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4">
        {prev ? (
          <Link
            href={`/c/${prev.slug}`}
            className="flex-1 group p-3 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-lubuntu-blue transition-colors"
          >
            <div className="flex items-center gap-1 text-xs text-slate-500">
              <ArrowLeft size={12} /> Anterior
            </div>
            <div className="text-sm font-semibold text-lubuntu-blue dark:text-lubuntu-blue-light truncate">
              {prev.title}
            </div>
          </Link>
        ) : (
          <div className="flex-1" />
        )}
        {next ? (
          <Link
            href={`/c/${next.slug}`}
            className="flex-1 group p-3 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-lubuntu-blue transition-colors text-right"
          >
            <div className="flex items-center justify-end gap-1 text-xs text-slate-500">
              Próximo <ArrowRight size={12} />
            </div>
            <div className="text-sm font-semibold text-lubuntu-blue dark:text-lubuntu-blue-light truncate">
              {next.title}
            </div>
          </Link>
        ) : (
          <div className="flex-1" />
        )}
      </nav>
    </PageContainer>
  );
}
