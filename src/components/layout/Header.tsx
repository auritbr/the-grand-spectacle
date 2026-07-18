import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PROJECTS } from "@/lib/site-data";

const NAV = [
  { label: "Início", to: "/" },
  {
    label: "Quem Somos",
    to: "/quem-somos",
    children: [
      { label: "Nossa História", to: "/quem-somos" },
      { label: "Equipe", to: "/quem-somos/equipe" },
      { label: "Transparência", to: "/quem-somos/transparencia" },
    ],
  },
  {
    label: "Projetos",
    to: "/projetos",
    children: [
      { label: "Todos os projetos", to: "/projetos" },
      ...PROJECTS.filter((p) => p.highlight).map((p) => ({
        label: p.name,
        to: `/projetos/${p.slug}` as const,
      })),
    ],
  },
  { label: "Notícias", to: "/noticias" },
  { label: "Galeria", to: "/galeria" },
  { label: "Contato", to: "/contato" },
] as const;

export function Header({ transparent = false }: { transparent?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    if (!transparent) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [transparent]);

  const solid = !transparent || scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        solid
          ? "bg-[color:var(--cream)]/95 backdrop-blur border-b border-[color:var(--border)] text-[color:var(--foreground)]"
          : "bg-transparent text-[color:var(--cream)]"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-[color:var(--wine)] focus:px-3 focus:py-2 focus:text-[color:var(--cream)]"
      >
        Pular para o conteúdo
      </a>
      <div className="container-page flex h-16 items-center justify-between gap-4 md:h-20">
        <Link to="/" className="flex items-center gap-2" aria-label="Página inicial">
          <LogoMark />
          <span className="hidden font-display text-lg font-bold sm:inline">
            Arco <span className="text-[color:var(--gold)]">&</span> Palco
          </span>
        </Link>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV.map((item) => (
              <li key={item.label} className="relative group">
                {"children" in item && item.children ? (
                  <>
                    <Link
                      to={item.to}
                      className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-black/5 dark:hover:bg-white/10"
                      activeProps={{ className: "text-[color:var(--wine)]" }}
                    >
                      {item.label} <ChevronDown className="h-3.5 w-3.5 opacity-70 transition-transform group-hover:rotate-180" aria-hidden />
                    </Link>
                    <ul className="pointer-events-none invisible absolute left-0 top-full mt-1 min-w-[220px] rounded-xl border border-[color:var(--border)] bg-[color:var(--cream)] p-2 text-[color:var(--foreground)] opacity-0 shadow-lg transition-all duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:opacity-100">
                      {item.children.map((c) => (
                        <li key={c.to}>
                          <Link
                            to={c.to}
                            className="block rounded-md px-3 py-2 text-sm hover:bg-[color:var(--beige)]"
                            activeProps={{ className: "text-[color:var(--wine)]" }}
                          >
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link
                    to={item.to}
                    className="inline-block rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-black/5 dark:hover:bg-white/10"
                    activeProps={{ className: "text-[color:var(--wine)]" }}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <Button asChild className="bg-[color:var(--wine)] text-[color:var(--cream)] hover:bg-[color:var(--wine-deep)]">
            <Link to="/contato">Entre em contato</Link>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X aria-hidden /> : <Menu aria-hidden />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-[color:var(--cream)] text-[color:var(--foreground)] border-t border-[color:var(--border)]">
          <ul className="container-page py-3">
            {NAV.map((item) => (
              <li key={item.label} className="border-b border-[color:var(--border)] last:border-b-0">
                {"children" in item && item.children ? (
                  <>
                    <button
                      className="flex w-full items-center justify-between py-3 text-left text-base font-medium"
                      aria-expanded={expanded === item.label}
                      onClick={() => setExpanded((e) => (e === item.label ? null : item.label))}
                    >
                      {item.label}
                      <ChevronDown className={`h-4 w-4 transition-transform ${expanded === item.label ? "rotate-180" : ""}`} aria-hidden />
                    </button>
                    {expanded === item.label && (
                      <ul className="pb-3">
                        {item.children.map((c) => (
                          <li key={c.to}>
                            <Link
                              to={c.to}
                              onClick={() => setOpen(false)}
                              className="block rounded-md py-2 pl-4 text-sm text-[color:var(--foreground)]/80"
                            >
                              {c.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-base font-medium"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
            <li className="pt-3">
              <Button asChild className="w-full bg-[color:var(--wine)] text-[color:var(--cream)] hover:bg-[color:var(--wine-deep)]">
                <Link to="/contato" onClick={() => setOpen(false)}>Entre em contato</Link>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

function LogoMark() {
  return (
    <svg viewBox="0 0 40 40" className="h-9 w-9" aria-hidden>
      <circle cx="20" cy="20" r="18" fill="oklch(0.42 0.16 20)" />
      <path d="M6 24 Q 20 6 34 24" stroke="oklch(0.78 0.13 82)" strokeWidth="1.6" fill="none" />
      <path d="M6 28 Q 20 14 34 28" stroke="oklch(0.78 0.13 82)" strokeWidth="1" fill="none" opacity="0.7" />
      <circle cx="20" cy="26" r="2" fill="oklch(0.78 0.13 82)" />
    </svg>
  );
}