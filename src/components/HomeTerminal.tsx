import { useEffect, useRef, useState } from "react";

type Step =
  | { kind: "cmd"; text: string }
  | { kind: "out"; text: string }
  | { kind: "ok"; text: string }
  | { kind: "hint"; text: string };

const SCRIPT: Step[] = [
  { kind: "cmd", text: "sudo apt update && sudo apt install vlc" },
  { kind: "out", text: "Lendo listas de pacotes... Pronto" },
  { kind: "ok", text: "vlc instalado — leve e roda em qualquer PC ✓" },
  { kind: "cmd", text: "free -h   # quanta RAM o LXQt gasta?" },
  { kind: "out", text: "              total    usado    livre" },
  { kind: "out", text: "Mem:          3,7Gi    438Mi    2,4Gi" },
  { kind: "hint", text: "→ 438 MiB: o Lubuntu todo cabe onde um navegador não caberia" },
  { kind: "cmd", text: "lsb_release -ds" },
  { kind: "out", text: "Ubuntu 26.04 LTS  ·  base do Lubuntu (LXQt)" },
];

const COLORS: Record<Step["kind"], string> = {
  cmd: "text-slate-100",
  out: "text-slate-400",
  ok: "text-emerald-400",
  hint: "text-lubuntu-sky-light",
};

function Prompt() {
  return (
    <span className="text-lubuntu-blue-light">
      voce@lubuntu<span className="text-slate-500">:</span>
      <span className="text-lubuntu-sky">~</span>
      <span className="text-slate-500">$</span>{" "}
    </span>
  );
}

export default function HomeTerminal() {
  const [rendered, setRendered] = useState<Step[]>([]);
  const [typing, setTyping] = useState<string>(""); // linha de comando em digitação (null = sem linha ativa)
  const [showCursor, setShowCursor] = useState(true);
  const timers = useRef<number[]>([]);

  useEffect(() => {
    let cancelled = false;
    const wait = (ms: number, fn: () => void) => {
      const id = window.setTimeout(() => !cancelled && fn(), ms);
      timers.current.push(id);
    };

    const step = (i: number) => {
      if (cancelled) return;
      if (i >= SCRIPT.length) {
        wait(2600, () => {
          setRendered([]);
          setTyping("");
          setShowCursor(true);
          step(0);
        });
        return;
      }
      const s = SCRIPT[i];
      if (s.kind === "cmd") {
        setShowCursor(true);
        const typeChar = (k: number) => {
          if (cancelled) return;
          if (k <= s.text.length) {
            setTyping(s.text.slice(0, k));
            wait(30, () => typeChar(k + 1));
          } else {
            wait(380, () => {
              setRendered((prev) => [...prev, s]);
              setTyping("");
              step(i + 1);
            });
          }
        };
        typeChar(0);
      } else {
        setShowCursor(false);
        wait(240, () => {
          setRendered((prev) => [...prev, s]);
          step(i + 1);
        });
      }
    };

    wait(500, () => step(0));
    return () => {
      cancelled = true;
      timers.current.forEach(clearTimeout);
      timers.current = [];
    };
  }, []);

  return (
    <div className="rounded-xl overflow-hidden border border-white/10 bg-[#0a1526]/95 shadow-2xl shadow-lubuntu-blue/20 backdrop-blur">
      <div className="flex items-center gap-2 px-4 py-2.5 bg-white/5 border-b border-white/10">
        <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        <span className="ml-2 text-xs font-mono text-slate-400">
          qterminal — voce@lubuntu
        </span>
      </div>
      <pre className="p-4 sm:p-5 text-[13px] leading-relaxed font-mono overflow-x-auto min-h-[252px] whitespace-pre-wrap">
        {rendered.map((s, i) => (
          <div key={i} className={COLORS[s.kind]}>
            {s.kind === "cmd" ? <Prompt /> : null}
            {s.text}
          </div>
        ))}
        <div className="text-slate-100">
          <Prompt />
          {typing}
          {showCursor && <span className="blink text-lubuntu-sky-light">▋</span>}
        </div>
      </pre>
    </div>
  );
}
