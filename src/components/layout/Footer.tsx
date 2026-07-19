import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube, MapPin, Mail, Phone } from "lucide-react";
import { SITE, PROJECTS } from "@/lib/site-data";
import { ArcDivider } from "@/components/decor/CurtainBackdrop";
import { BuntingRow, PicadeiroArc, StarSpark, JugglingArc, RingHoop, SilkRibbon } from "@/components/decor/CircusMotifs";

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-[color:var(--navy)] text-[color:var(--cream)]">
      {/* Divisor superior — arco de picadeiro + bandeirolas */}
      <div aria-hidden className="absolute inset-x-0 -top-6 h-16">
        <ArcDivider className="absolute inset-x-0 top-0 h-8 w-full" />
        <BuntingRow className="absolute inset-x-0 top-6 h-10 w-full text-[color:var(--gold)]" />
      </div>

      {/* Grafismos de fundo */}
      <PicadeiroArc aria-hidden className="pointer-events-none absolute inset-x-0 bottom-14 h-20 w-full text-[color:var(--gold)]/15" />
      <SilkRibbon aria-hidden className="pointer-events-none absolute -left-6 top-16 h-[70%] w-24 text-[color:var(--wine)]/25" />
      <SilkRibbon aria-hidden className="pointer-events-none absolute -right-6 top-16 h-[70%] w-24 text-[color:var(--wine)]/25" />
      <JugglingArc aria-hidden className="pointer-events-none absolute right-16 top-24 h-16 w-48 text-[color:var(--gold)]/25" />
      <RingHoop aria-hidden className="pointer-events-none absolute left-24 bottom-24 h-24 w-24 text-[color:var(--gold)]/20" />
      <StarSpark aria-hidden className="pointer-events-none absolute left-1/3 top-20 h-4 w-4 text-[color:var(--gold)]/70" />
      <StarSpark aria-hidden className="pointer-events-none absolute right-1/4 top-40 h-3 w-3 text-[color:var(--gold)]/60" />
      <StarSpark aria-hidden className="pointer-events-none absolute left-10 bottom-32 h-3 w-3 text-[color:var(--gold)]/50" />

      <div className="container-page relative grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 40 40" className="h-9 w-9" aria-hidden>
              <circle cx="20" cy="20" r="18" fill="oklch(0.78 0.13 82)" />
              <path d="M6 24 Q 20 6 34 24" stroke="oklch(0.24 0.06 265)" strokeWidth="1.6" fill="none" />
            </svg>
            <span className="font-display text-xl font-bold">Arco &amp; Palco</span>
          </div>
          <p className="mt-4 max-w-md text-sm text-[color:var(--cream)]/75">
            {SITE.description}
          </p>
          <p className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[color:var(--gold)]">
            <StarSpark className="h-3 w-3" /> Ponto de Cultura reconhecido
          </p>
          <div className="mt-6 flex gap-3 text-[color:var(--cream)]/75">
            <a href={SITE.social.instagram} aria-label="Instagram" className="rounded-full border border-white/20 p-2 hover:text-[color:var(--gold)]"><Instagram className="h-4 w-4" /></a>
            <a href={SITE.social.facebook} aria-label="Facebook" className="rounded-full border border-white/20 p-2 hover:text-[color:var(--gold)]"><Facebook className="h-4 w-4" /></a>
            <a href={SITE.social.youtube} aria-label="YouTube" className="rounded-full border border-white/20 p-2 hover:text-[color:var(--gold)]"><Youtube className="h-4 w-4" /></a>
          </div>
        </div>

        <div>
          <h3 className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[color:var(--gold)]">
            <RingHoop className="h-4 w-4" /> Institucional
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/quem-somos" className="hover:text-[color:var(--gold)]">Quem Somos</Link></li>
            <li><Link to="/quem-somos/equipe" className="hover:text-[color:var(--gold)]">Equipe</Link></li>
            <li><Link to="/quem-somos/transparencia" className="hover:text-[color:var(--gold)]">Transparência</Link></li>
            <li><Link to="/noticias" className="hover:text-[color:var(--gold)]">Notícias</Link></li>
            <li><Link to="/galeria" className="hover:text-[color:var(--gold)]">Galeria</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[color:var(--gold)]">
            <JugglingArc className="h-4 w-8" /> Projetos
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/projetos" className="hover:text-[color:var(--gold)]">Todos os projetos</Link></li>
            {PROJECTS.filter((p) => p.highlight).map((p) => (
              <li key={p.slug}>
                <Link to={`/projetos/${p.slug}` as never} className="hover:text-[color:var(--gold)]">{p.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[color:var(--gold)]">
            <StarSpark className="h-3.5 w-3.5" /> Contato
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-[color:var(--cream)]/85">
            <li className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--gold)]" /> {SITE.address}</li>
            <li className="flex gap-2"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--gold)]" /> {SITE.phone}</li>
            <li className="flex gap-2"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--gold)]" /> {SITE.email}</li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container-page flex flex-col justify-between gap-3 py-6 text-xs text-[color:var(--cream)]/60 md:flex-row">
          <p>© {new Date().getFullYear()} {SITE.name}. Todos os direitos reservados.</p>
          <ul className="flex flex-wrap gap-4">
            <li><Link to="/politica-de-privacidade" className="hover:text-[color:var(--gold)]">Política de Privacidade</Link></li>
            <li><Link to="/politica-de-cookies" className="hover:text-[color:var(--gold)]">Política de Cookies</Link></li>
            <li><Link to="/termos-de-uso" className="hover:text-[color:var(--gold)]">Termos de Uso</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}