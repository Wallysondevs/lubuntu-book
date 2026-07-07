import { Link } from "wouter";
import { sections, chapters, chapterMap } from "@/data/chapters";
import { useProgress, sectionStats, nextUnread } from "@/lib/course";
import { getSectionIcon } from "@/lib/icons";
import HomeTerminal from "@/components/HomeTerminal";
import LubuntuLogo from "@/components/LubuntuLogo";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Download,
  Feather,
  Cpu,
  Layers,
  Terminal as TerminalIcon,
  Sparkles,
  Check,
  PlayCircle,
} from "lucide-react";

const totalCodes = chapters.reduce((n, c) => n + c.codes.length, 0);

export default function Home() {
  const { done, count, total } = useProgress();
  const pct = total ? Math.round((count / total) * 100) : 0;
  const resume = nextUnread(done);
  const started = count > 0;

  const stats = [
    { icon: Layers, value: sections.length, label: "trilhas" },
    { icon: BookOpen, value: chapters.length, label: "capítulos" },
    { icon: TerminalIcon, value: `${totalCodes}+`, label: "blocos de comando" },
    { icon: Cpu, value: "~438 MiB", label: "de RAM em uso" },
  ];

  return (
    <div>
      {/* ===================== HERO ===================== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-lubuntu-navy via-[#0a2038] to-[#081f38] text-white">
        <div className="absolute inset-0 -z-0">
          <div className="aurora absolute -top-24 -left-24 w-[32rem] h-[32rem] rounded-full bg-lubuntu-blue/30 blur-3xl" />
          <div className="orb absolute top-10 right-0 w-[26rem] h-[26rem] rounded-full bg-lubuntu-sky/20 blur-3xl" />
          <div className="orb absolute bottom-0 left-1/3 w-[24rem] h-[24rem] rounded-full bg-lubuntu-blue-light/20 blur-3xl" />
          <div className="grid-bg absolute inset-0 opacity-40" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 lg:py-20 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-medium backdrop-blur mb-5"
            >
              <Sparkles size={13} className="text-lubuntu-sky-light" />
              Lubuntu 26.04 LTS · LXQt · Resolute Raccoon
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight"
            >
              <span className="text-gradient-lu">Lubuntu</span>
              <br />
              do zero ao domínio
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="mt-5 text-lg text-slate-300 max-w-xl"
            >
              Um curso completo em português, <strong className="text-white">{chapters.length} capítulos</strong>{" "}
              práticos — do primeiro <code className="text-lubuntu-sky-light">ls ~</code> até personalizar o LXQt,
              otimizar hardware antigo e montar projetos reais. Comando, saída de verdade, erro comum e a correção.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link
                href="/c/bem-vindo"
                className="inline-flex items-center gap-2 bg-lubuntu-blue hover:bg-lubuntu-blue-light text-white px-6 py-3 rounded-lg font-semibold shadow-lg shadow-lubuntu-blue/30 transition-colors"
              >
                <BookOpen size={18} /> Começar o curso
              </Link>
              <Link
                href="/c/baixar-iso"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-3 rounded-lg font-semibold backdrop-blur transition-colors"
              >
                <Download size={18} /> Instalar Lubuntu
              </Link>
              {started && resume && (
                <Link
                  href={`/c/${resume}`}
                  className="inline-flex items-center gap-2 text-lubuntu-sky-light hover:text-white px-3 py-3 font-semibold transition-colors"
                >
                  <PlayCircle size={18} /> Continuar ({pct}%)
                </Link>
              )}
            </motion.div>

            {started && (
              <div className="mt-6 max-w-md">
                <div className="flex justify-between text-xs text-slate-400 mb-1">
                  <span>Seu progresso</span>
                  <span>
                    {count}/{total}
                  </span>
                </div>
                <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-lubuntu-blue-light to-lubuntu-sky-light transition-all duration-500"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute -top-10 -right-4 hidden lg:block float-y">
              <LubuntuLogo size={72} glow />
            </div>
            <HomeTerminal />
          </motion.div>
        </div>

        {/* faixa de stats */}
        <div className="relative border-t border-white/10 bg-black/20 backdrop-blur">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={i}
                  className="fade-up flex items-center gap-3"
                  style={{ animationDelay: `${0.3 + i * 0.08}s` }}
                >
                  <div className="p-2 rounded-lg bg-white/10 text-lubuntu-sky-light">
                    <Icon size={20} />
                  </div>
                  <div>
                    <div className="text-xl font-bold leading-none">{s.value}</div>
                    <div className="text-xs text-slate-400 mt-1">{s.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================== TRILHAS / MÓDULOS ===================== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              {sections.length} trilhas do curso
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mt-1">
              Siga em ordem ou pule direto pro que te interessa. Seu progresso fica salvo.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sections.map((s, i) => {
            const Icon = getSectionIcon(s.icon);
            const first = s.chapterSlugs[0];
            const firstCh = first ? chapterMap[first] : null;
            const st = sectionStats(s.id, done);
            const secPct = st.total ? Math.round((st.done / st.total) * 100) : 0;
            const complete = st.total > 0 && st.done === st.total;
            return (
              <Link
                key={s.id}
                href={firstCh ? `/c/${first}` : "/"}
                className="fade-up group block h-full bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl p-5 hover:border-lubuntu-blue hover:shadow-xl hover:shadow-lubuntu-blue/10 transition-all"
                style={{ animationDelay: `${i * 0.04}s` }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`p-2 rounded-lg ${
                      complete
                        ? "bg-emerald-500/15 text-emerald-500"
                        : "bg-lubuntu-blue/10 text-lubuntu-blue dark:text-lubuntu-blue-light"
                    }`}
                  >
                    {complete ? <Check size={22} /> : <Icon size={22} />}
                  </div>
                  <span className="ml-auto text-xs uppercase tracking-wide text-slate-400">
                    {st.done}/{st.total}
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white group-hover:text-lubuntu-blue dark:group-hover:text-lubuntu-blue-light mb-1">
                  {s.label}
                </h3>
                {firstCh && (
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">
                    Começa com: <span className="text-slate-700 dark:text-slate-200">{firstCh.title}</span>
                  </p>
                )}
                <div className="h-1 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-lubuntu-blue to-lubuntu-sky transition-all duration-500"
                    style={{ width: `${secPct}%` }}
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ===================== NOVIDADES 26.04 ===================== */}
      <section className="bg-slate-100/70 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">
            O que há de novo no Lubuntu 26.04 LTS
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-2xl">
            O curso está atualizado para a base <strong>Ubuntu 26.04 “Resolute Raccoon”</strong> (abril de 2026),
            mantendo a leveza de sempre.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: Layers,
                t: "LXQt 2.2 sobre Qt6",
                d: "A área de trabalho migrou para o Qt6 — mais moderna e integrada, com o mesmo consumo enxuto de memória.",
              },
              {
                icon: Cpu,
                t: "Kernel Linux 7.0",
                d: "Melhor suporte a hardware novo e antigo, com energia e drivers mais estáveis em notebooks.",
              },
              {
                icon: Feather,
                t: "Leveza de sempre",
                d: "Boot rápido e ~438 MiB de RAM em repouso: revive PCs que o Windows abandonou.",
              },
            ].map((f, i) => {
              const Icon = f.icon;
              return (
                <div
                  key={i}
                  className="fade-up rounded-xl bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 p-5"
                  style={{ animationDelay: `${i * 0.06}s` }}
                >
                  <div className="p-2 w-fit rounded-lg bg-lubuntu-blue/10 text-lubuntu-blue dark:text-lubuntu-blue-light mb-3">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-1">{f.t}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{f.d}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================== CTA FINAL ===================== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 text-center">
        <div className="flex justify-center mb-5">
          <LubuntuLogo size={56} />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3">
          Pronto para começar?
        </h2>
        <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto mb-7">
          Nenhum comando perigoso no primeiro capítulo — só você, o terminal e a certeza de que vai conseguir.
        </p>
        <Link
          href="/c/bem-vindo"
          className="inline-flex items-center gap-2 bg-lubuntu-blue hover:bg-lubuntu-blue-dark text-white px-7 py-3.5 rounded-lg font-semibold shadow-lg shadow-lubuntu-blue/30 transition-colors"
        >
          Abrir o capítulo 1 <ArrowRight size={18} />
        </Link>
      </section>

      <footer className="border-t border-slate-200 dark:border-slate-800 text-center text-sm text-slate-500 dark:text-slate-400 py-8 px-4">
        <p>
          Feito com 💙 por{" "}
          <a
            className="text-lubuntu-blue dark:text-lubuntu-blue-light font-semibold"
            href="https://github.com/Wallysondevs"
            target="_blank"
            rel="noreferrer"
          >
            @Wallysondevs
          </a>
          {" · "}Código aberto no{" "}
          <a
            className="text-lubuntu-blue dark:text-lubuntu-blue-light font-semibold"
            href="https://github.com/Wallysondevs/lubuntu-book"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </p>
      </footer>
    </div>
  );
}
