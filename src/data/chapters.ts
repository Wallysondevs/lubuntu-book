// Aggregator — content lives in sections/<sectionId>.ts (one file per trail)
  import type { Chapter, Section } from './types';
  import { chapters as s0 } from './sections/boas-vindas';
import { chapters as s1 } from './sections/instalacao';
import { chapters as s2 } from './sections/lxqt-tour';
import { chapters as s3 } from './sections/personalizacao';
import { chapters as s4 } from './sections/terminal';
import { chapters as s5 } from './sections/pacotes';
import { chapters as s6 } from './sections/apps';
import { chapters as s7 } from './sections/hardware-leve';
import { chapters as s8 } from './sections/rede';
import { chapters as s9 } from './sections/manutencao';
import { chapters as s10 } from './sections/solucao-problemas';
import { chapters as s11 } from './sections/projetos';
import { chapters as s12 } from './sections/avancado';

  export type { Chapter, Section, Difficulty, AlertType, CodeSample, AlertSpec } from './types';

  const rawSections: Section[] = [
  {
    "id": "boas-vindas",
    "icon": "BookOpen",
    "label": "Boas-vindas e Filosofia",
    "chapterSlugs": [
      "bem-vindo",
      "o-que-e-lubuntu",
      "lubuntu-vs-ubuntu",
      "lxqt-vs-lxde",
      "hardware-recomendado",
      "filosofia-leveza",
      "comunidade-ajuda"
    ]
  },
  {
    "id": "instalacao",
    "icon": "Download",
    "label": "Instalação Passo a Passo",
    "chapterSlugs": [
      "baixar-iso",
      "criar-pendrive",
      "requisitos-minimos",
      "testar-live",
      "instalacao-completa",
      "particionamento",
      "dual-boot-windows",
      "primeira-inicializacao",
      "pos-instalacao"
    ]
  },
  {
    "id": "lxqt-tour",
    "icon": "Layout",
    "label": "LXQt por Dentro",
    "chapterSlugs": [
      "visao-geral-lxqt",
      "painel-lxqt",
      "menu-aplicacoes",
      "pcmanfm-qt",
      "openbox-wm",
      "qterminal",
      "lxqt-config",
      "area-notificacao"
    ]
  },
  {
    "id": "personalizacao",
    "icon": "Palette",
    "label": "Personalização Visual",
    "chapterSlugs": [
      "temas-lxqt",
      "icones-lubuntu",
      "fontes-sistema",
      "papel-parede",
      "atalhos-teclado",
      "autostart-apps",
      "multi-area-trabalho",
      "conky-monitor"
    ]
  },
  {
    "id": "terminal",
    "icon": "Terminal",
    "label": "Terminal e Linha de Comando",
    "chapterSlugs": [
      "abrir-terminal",
      "navegacao-pastas",
      "manipular-arquivos",
      "ver-arquivos",
      "processos-basicos",
      "pipes-redirecionamento",
      "sudo-seguranca",
      "atalhos-bash"
    ]
  },
  {
    "id": "pacotes",
    "icon": "Package",
    "label": "Software e Pacotes",
    "chapterSlugs": [
      "discover-software",
      "apt-basico",
      "atualizar-sistema",
      "instalar-remover",
      "adicionar-ppa",
      "snap-pacotes",
      "flatpak-pacotes",
      "instalar-deb"
    ]
  },
  {
    "id": "apps",
    "icon": "AppWindow",
    "label": "Aplicativos do Dia a Dia",
    "chapterSlugs": [
      "navegadores-leves",
      "libreoffice",
      "cliente-email",
      "tocador-musica",
      "video-vlc",
      "editor-imagem",
      "mensageiros",
      "alternativas-leves",
      "jogos-leves"
    ]
  },
  {
    "id": "hardware-leve",
    "icon": "Cpu",
    "label": "Hardware Leve e Performance",
    "chapterSlugs": [
      "zram-swap",
      "gerenciar-energia",
      "drivers-graficos",
      "wifi-bluetooth-driver",
      "otimizar-boot",
      "monitorar-recursos",
      "multi-monitor",
      "reduzir-uso-ram"
    ]
  },
  {
    "id": "rede",
    "icon": "Wifi",
    "label": "Rede e Conectividade",
    "chapterSlugs": [
      "conectar-wifi",
      "conectar-ethernet",
      "vpn-openvpn",
      "bluetooth-pareamento",
      "compartilhar-samba",
      "ssh-acesso-remoto",
      "firewall-ufw",
      "dns-troubleshoot"
    ]
  },
  {
    "id": "manutencao",
    "icon": "Wrench",
    "label": "Manutenção e Backup",
    "chapterSlugs": [
      "atualizar-lts",
      "limpeza-disco",
      "timeshift-backup",
      "restaurar-snapshot",
      "logs-sistema",
      "agendar-tarefas-cron"
    ]
  },
  {
    "id": "solucao-problemas",
    "icon": "AlertCircle",
    "label": "Solução de Problemas",
    "chapterSlugs": [
      "diagnosticar-problemas",
      "modo-recovery",
      "reinstalar-grub",
      "recuperar-senha-root",
      "onde-pedir-ajuda",
      "faq-erros-comuns"
    ]
  },
  {
    "id": "projetos",
    "icon": "Rocket",
    "label": "Projetos e Casos Práticos",
    "chapterSlugs": [
      "reviver-pc-antigo",
      "kiosk-quiosque",
      "midia-center-htpc",
      "servidor-domestico",
      "usb-persistente",
      "sala-de-aula"
    ]
  },
  {
    "id": "avancado",
    "icon": "Settings",
    "label": "Avançado e Glossário",
    "chapterSlugs": [
      "lxqt-sob-capo",
      "scripts-shell-uteis",
      "acessibilidade",
      "particoes-avancadas",
      "glossario",
      "recursos-extras"
    ]
  }
];

  // Ordem pedagógica do curso (iniciante → avançado):
  // instala → conhece o desktop → domina o terminal → instala software → usa apps →
  // personaliza → conecta na rede → otimiza hardware → mantém → resolve problemas → projetos → avançado
  const ORDER = [
    "boas-vindas",
    "instalacao",
    "lxqt-tour",
    "terminal",
    "pacotes",
    "apps",
    "personalizacao",
    "rede",
    "hardware-leve",
    "manutencao",
    "solucao-problemas",
    "projetos",
    "avancado",
  ];

  export const sections: Section[] = ORDER
    .map((id) => rawSections.find((s) => s.id === id))
    .filter((s): s is Section => Boolean(s));

  const pool: Chapter[] = [...s0, ...s1, ...s2, ...s3, ...s4, ...s5, ...s6, ...s7, ...s8, ...s9, ...s10, ...s11, ...s12];

  export const chapterMap: Record<string, Chapter> = Object.fromEntries(
    pool.map((c) => [c.slug, c])
  );

  // capítulos em ordem de curso (segue a ordem das seções e a dos capítulos dentro de cada uma)
  export const chapters: Chapter[] = sections.flatMap((s) =>
    s.chapterSlugs
      .map((slug) => chapterMap[slug])
      .filter((c): c is Chapter => Boolean(c))
  );

  export function chapterIndex(slug: string): number {
    return chapters.findIndex((c) => c.slug === slug);
  }
  