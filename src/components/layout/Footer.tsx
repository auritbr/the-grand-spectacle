import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube, MapPin, Mail, Phone } from "lucide-react";
import { SITE, PROJECTS } from "@/lib/site-data";
import { ArcDivider } from "@/components/decor/CurtainBackdrop";

export function Footer() {
  return (
    <footer className="relative mt-24 bg-[color:var(--navy)] text-[color:var(--cream)]">
      <ArcDivider className="absolute -top-6 left-0 right-0 h-8 w-full" />
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-5">
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
          <p className="mt-6 text-xs uppercase tracking-widest text-[color:var(--gold)]">Ponto de Cultura reconhecido</p>
          <div className="mt-6 flex gap-3 text-[color:var(--cream)]/75">
            <a href={SITE.social.instagram} aria-label="Instagram" className="rounded-full border border-white/20 p-2 hover:text-[color:var(--gold)]"><Instagram className="h-4 w-4" /></a>
            <a href={SITE.social.facebook} aria-label="Facebook" className="rounded-full border border-white/20 p-2 hover:text-[color:var(--gold)]"><Facebook className="h-4 w-4" /></a>
            <a href={SITE.social.youtube} aria-label="YouTube" className="rounded-full border border-white/20 p-2 hover:text-[color:var(--gold)]"><Youtube className="h-4 w-4" /></a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-[color:var(--gold)]">Institucional</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/quem-somos" className="hover:text-[color:var(--gold)]">Quem Somos</Link></li>
            <li><Link to="/quem-somos/equipe" className="hover:text-[color:var(--gold)]">Equipe</Link></li>
            <li><Link to="/quem-somos/transparencia" className="hover:text-[color:var(--gold)]">Transparência</Link></li>
            <li><Link to="/noticias" className="hover:text-[color:var(--gold)]">Notícias</Link></li>
            <li><Link to="/galeria" className="hover:text-[color:var(--gold)]">Galeria</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-[color:var(--gold)]">Projetos</h3>
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
          <h3 className="text-sm font-semibold uppercase tracking-wider text-[color:var(--gold)]">Contato</h3>
          <ul className="mt-4 space-y-3 text-sm text-[color:var(--cream)]/85">
            <li className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--gold)]" /> {SITE.address}</li>
            <li className="flex gap-2"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--gold)]" /> {SITE.phone}</li>
            <li className="flex gap-2"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--gold)]" /> {SITE.email}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
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