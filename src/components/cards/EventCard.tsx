import { Calendar, Clock, MapPin } from "lucide-react";

export function EventCard({ ev }: { ev: { date: string; time: string; title: string; category: string; location: string } }) {
  const d = new Date(ev.date);
  const day = d.toLocaleDateString("pt-BR", { day: "2-digit" });
  const month = d.toLocaleDateString("pt-BR", { month: "short" }).replace(".", "");
  return (
    <article className="flex overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] shadow-sm transition-all hover:shadow-md">
      <div className="grid w-24 shrink-0 place-items-center bg-[color:var(--wine)] text-center text-[color:var(--cream)]">
        <div>
          <p className="text-3xl font-bold leading-none">{day}</p>
          <p className="mt-1 text-xs uppercase tracking-widest text-[color:var(--gold)]">{month}</p>
        </div>
      </div>
      <div className="flex-1 p-4">
        <p className="text-xs font-medium uppercase tracking-widest text-[color:var(--gold)]">{ev.category}</p>
        <h3 className="mt-1 font-display text-base font-semibold">{ev.title}</h3>
        <p className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[color:var(--muted-foreground)]">
          <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" aria-hidden /> {ev.time}</span>
          <span className="inline-flex items-center gap-1"><MapPin className="h-3 w-3" aria-hidden /> {ev.location}</span>
          <span className="inline-flex items-center gap-1"><Calendar className="h-3 w-3" aria-hidden /> {d.toLocaleDateString("pt-BR")}</span>
        </p>
      </div>
    </article>
  );
}