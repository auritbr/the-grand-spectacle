import { StagePlaceholder } from "@/components/decor/CurtainBackdrop";
import type { TeamMember } from "@/lib/site-data";

export function MemberCard({ m, onOpen }: { m: TeamMember; onOpen: () => void }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] text-left shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
    >
      <StagePlaceholder label={m.name} className="rounded-none" ratio="aspect-[3/4]" />
      <div className="flex flex-1 flex-col gap-1 p-4">
        <p className="text-xs uppercase tracking-widest text-[color:var(--gold)]">{m.category}</p>
        <h3 className="font-display text-lg font-semibold">{m.name}</h3>
        <p className="text-sm text-[color:var(--muted-foreground)]">{m.role}</p>
        <p className="mt-2 text-sm text-[color:var(--foreground)]/80 line-clamp-3">{m.bio}</p>
        <span className="mt-auto pt-2 text-xs font-semibold text-[color:var(--wine)]">Ver trajetória →</span>
      </div>
    </button>
  );
}