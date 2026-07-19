import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Paginação numérica com estado ativo/desabilitado, elipses e navegação por teclado.
 * Controle externo — o pai passa `page` atual e reage a onChange(page).
 */
export function Pagination({
  page,
  totalPages,
  onChange,
}: {
  page: number;
  totalPages: number;
  onChange: (p: number) => void;
}) {
  if (totalPages <= 1) return null;

  const pages = buildPageList(page, totalPages);

  return (
    <nav aria-label="Paginação" className="mt-12 flex flex-wrap items-center justify-center gap-2">
      <button
        type="button"
        onClick={() => onChange(page - 1)}
        disabled={page <= 1}
        className="inline-flex h-10 items-center gap-1 rounded-full border border-[color:var(--border)] px-4 text-sm font-medium transition-colors hover:bg-[color:var(--beige)] disabled:cursor-not-allowed disabled:opacity-40"
      >
        <ChevronLeft className="h-4 w-4" aria-hidden /> Anterior
      </button>

      <ul className="flex flex-wrap items-center gap-1">
        {pages.map((p, i) =>
          p === "…" ? (
            <li key={`gap-${i}`} className="px-2 text-sm text-[color:var(--muted-foreground)]">…</li>
          ) : (
            <li key={p}>
              <button
                type="button"
                onClick={() => onChange(p)}
                aria-current={p === page ? "page" : undefined}
                className={`grid h-10 w-10 place-items-center rounded-full text-sm font-medium transition-colors ${
                  p === page
                    ? "bg-[color:var(--wine)] text-[color:var(--cream)]"
                    : "border border-[color:var(--border)] hover:bg-[color:var(--beige)]"
                }`}
              >
                {p}
              </button>
            </li>
          ),
        )}
      </ul>

      <button
        type="button"
        onClick={() => onChange(page + 1)}
        disabled={page >= totalPages}
        className="inline-flex h-10 items-center gap-1 rounded-full border border-[color:var(--border)] px-4 text-sm font-medium transition-colors hover:bg-[color:var(--beige)] disabled:cursor-not-allowed disabled:opacity-40"
      >
        Próxima <ChevronRight className="h-4 w-4" aria-hidden />
      </button>
    </nav>
  );
}

function buildPageList(page: number, total: number): (number | "…")[] {
  const out: (number | "…")[] = [];
  const push = (v: number | "…") => {
    if (typeof v === "number" && (v < 1 || v > total)) return;
    if (out[out.length - 1] === v) return;
    out.push(v);
  };

  push(1);
  if (page - 2 > 2) push("…");
  for (let p = page - 1; p <= page + 1; p++) push(p);
  if (page + 2 < total - 1) push("…");
  push(total);
  return out;
}