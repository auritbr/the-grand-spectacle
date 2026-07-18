import { Circle, Feather, Zap, Smile, Scale, Music, BookOpen, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  acrobat: Circle, silks: Feather, juggle: Zap, clown: Smile,
  balance: Scale, dance: Music, book: BookOpen, community: Users,
};

export function AreaCard({ title, desc, icon }: { title: string; desc: string; icon: string }) {
  const Icon = ICONS[icon] ?? Circle;
  return (
    <div className="group relative rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
      <div className="mb-4 grid h-12 w-12 place-items-center rounded-full border border-[color:var(--gold)]/60 text-[color:var(--wine)] transition-colors group-hover:bg-[color:var(--wine)] group-hover:text-[color:var(--cream)]">
        <Icon className="h-5 w-5" aria-hidden />
      </div>
      <h3 className="font-display text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-[color:var(--muted-foreground)]">{desc}</p>
      <svg viewBox="0 0 200 20" className="mt-4 h-3 w-full text-[color:var(--gold)]/50" aria-hidden>
        <path d="M0 10 Q 100 -10 200 10" stroke="currentColor" strokeWidth="1" fill="none" />
      </svg>
    </div>
  );
}