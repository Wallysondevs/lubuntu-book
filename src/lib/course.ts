import { useCallback, useEffect, useState } from "react";
import { chapters, sections } from "@/data/chapters";

const KEY = "lubuntu-curso-progresso";
const EVT = "lubuntu-progress";

function read(): Record<string, true> {
  try {
    return JSON.parse(localStorage.getItem(KEY) || "{}");
  } catch {
    return {};
  }
}

function write(data: Record<string, true>) {
  localStorage.setItem(KEY, JSON.stringify(data));
  // notifica outros componentes na MESMA aba (o evento 'storage' só dispara entre abas)
  window.dispatchEvent(new Event(EVT));
}

/** Hook reativo do progresso do curso. */
export function useProgress() {
  const [done, setDone] = useState<Record<string, true>>(() =>
    typeof window === "undefined" ? {} : read(),
  );

  useEffect(() => {
    const sync = () => setDone(read());
    window.addEventListener(EVT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(EVT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const isDone = useCallback((slug: string) => !!done[slug], [done]);

  const toggle = useCallback((slug: string) => {
    const cur = read();
    if (cur[slug]) delete cur[slug];
    else cur[slug] = true;
    write(cur);
  }, []);

  const markDone = useCallback((slug: string) => {
    const cur = read();
    cur[slug] = true;
    write(cur);
  }, []);

  const reset = useCallback(() => write({}), []);

  const total = chapters.length;
  const count = Object.keys(done).filter((s) => !!done[s]).length;

  return { done, isDone, toggle, markDone, reset, count, total };
}

/** Progresso concluído/total de uma seção. */
export function sectionStats(
  sectionId: string,
  done: Record<string, true>,
): { done: number; total: number } {
  const sec = sections.find((s) => s.id === sectionId);
  if (!sec) return { done: 0, total: 0 };
  const total = sec.chapterSlugs.length;
  const doneCount = sec.chapterSlugs.filter((slug) => done[slug]).length;
  return { done: doneCount, total };
}

/** Primeiro capítulo ainda não concluído (para o "continuar de onde parei"). */
export function nextUnread(done: Record<string, true>): string | null {
  const c = chapters.find((ch) => !done[ch.slug]);
  return c ? c.slug : null;
}
