import { FileText, Download, Eye } from "lucide-react";
import type { Doc } from "@/lib/site-data";

export function DocumentCard({ d }: { d: Doc }) {
  return (
    <article className="flex items-center gap-4 rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] p-4 shadow-sm">
      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-[color:var(--beige)] text-[color:var(--wine)]">
        <FileText className="h-5 w-5" aria-hidden />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-xs uppercase tracking-widest text-[color:var(--gold)]">{d.category} · {d.year}</p>
        <h3 className="truncate font-semibold">{d.title}</h3>
        <p className="text-xs text-[color:var(--muted-foreground)]">{d.type} · {d.size}</p>
      </div>
      <div className="flex shrink-0 gap-2">
        <a href="#" onClick={(e) => e.preventDefault()} className="inline-flex items-center gap-1 rounded-lg border border-[color:var(--border)] px-3 py-2 text-xs font-medium hover:bg-[color:var(--beige)]">
          <Eye className="h-3.5 w-3.5" /> Visualizar
        </a>
        <a href="#" onClick={(e) => e.preventDefault()} className="inline-flex items-center gap-1 rounded-lg bg-[color:var(--wine)] px-3 py-2 text-xs font-medium text-[color:var(--cream)] hover:bg-[color:var(--wine-deep)]">
          <Download className="h-3.5 w-3.5" /> Baixar
        </a>
      </div>
    </article>
  );
}