// Registro enxuto de ícones — importa SÓ os que o curso usa, em vez de
// "import * as Icons from 'lucide-react'" (que empacota ~1500 ícones e
// inchava o bundle para ~1,6 MB). Aqui ficam os ícones das seções.
import {
  BookOpen,
  Download,
  Layout,
  Palette,
  Terminal,
  Package,
  AppWindow,
  Cpu,
  Wifi,
  Wrench,
  AlertCircle,
  Rocket,
  Settings,
  type LucideIcon,
} from "lucide-react";

export const sectionIcons: Record<string, LucideIcon> = {
  BookOpen,
  Download,
  Layout,
  Palette,
  Terminal,
  Package,
  AppWindow,
  Cpu,
  Wifi,
  Wrench,
  AlertCircle,
  Rocket,
  Settings,
};

export function getSectionIcon(name: string): LucideIcon {
  return sectionIcons[name] ?? BookOpen;
}
