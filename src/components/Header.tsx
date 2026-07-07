import { Link } from "wouter";
import { Menu, Github } from "lucide-react";
import LubuntuLogo from "@/components/LubuntuLogo";

export default function Header({ onMenu }: { onMenu: () => void }) {
  return (
    <header className="sticky top-0 z-30 bg-white/90 dark:bg-slate-900/90 backdrop-blur border-b border-slate-200 dark:border-slate-800 shadow-sm">
      <div className="flex items-center gap-3 px-4 h-14">
        <button
          onClick={onMenu}
          className="lg:hidden p-2 -ml-2 text-slate-700 dark:text-slate-200"
          aria-label="Menu"
        >
          <Menu size={22} />
        </button>
        <Link href="/" className="flex items-center gap-2 font-bold text-lg group">
          <LubuntuLogo size={30} className="transition-transform group-hover:scale-110" />
          <span className="text-lubuntu-blue dark:text-lubuntu-blue-light">
            Lubuntu <span className="hidden sm:inline">— Curso do Zero ao Domínio</span>
          </span>
        </Link>
        <div className="ml-auto">
          <a
            href="https://github.com/Wallysondevs/lubuntu-book"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-300 hover:text-lubuntu-blue dark:hover:text-lubuntu-blue-light transition-colors"
          >
            <Github size={18} />
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </div>
      </div>
    </header>
  );
}
