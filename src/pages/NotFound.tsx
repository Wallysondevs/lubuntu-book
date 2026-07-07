import { Link } from "wouter";
import { Home as HomeIcon } from "lucide-react";
import LubuntuLogo from "@/components/LubuntuLogo";

export default function NotFound() {
  return (
    <div className="max-w-xl mx-auto px-4 py-20 text-center">
      <div className="flex justify-center mb-4 opacity-80">
        <LubuntuLogo size={72} />
      </div>
      <h1 className="text-4xl font-bold text-lubuntu-blue dark:text-lubuntu-blue-light mb-2">404</h1>
      <p className="text-slate-600 dark:text-slate-300 mb-8">
        Esta página não existe — deve ter ficado leve demais e voado embora. Vamos voltar ao terminal.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-lubuntu-blue hover:bg-lubuntu-blue-dark text-white px-5 py-2.5 rounded-lg font-semibold transition-colors"
      >
        <HomeIcon size={18} /> Voltar ao início
      </Link>
    </div>
  );
}
