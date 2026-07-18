import { useEffect, useRef, useState } from "react";
import { Cookie, Accessibility, X, MessageCircle, Hand, Plus, Minus, Contrast, Droplet, Underline, AlignJustify, BookOpen, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site-data";

type A11yFlags = {
  fontStep: number;
  highContrast: boolean;
  grayscale: boolean;
  highlightLinks: boolean;
  spaced: boolean;
  reading: boolean;
};
const A11Y_KEY = "arco-a11y";
const COOKIES_KEY = "arco-cookies";

function applyA11y(f: A11yFlags) {
  const html = document.documentElement;
  html.classList.toggle("a11y-high-contrast", f.highContrast);
  html.classList.toggle("a11y-grayscale", f.grayscale);
  html.classList.toggle("a11y-highlight-links", f.highlightLinks);
  html.classList.toggle("a11y-spaced", f.spaced);
  html.classList.toggle("a11y-reading", f.reading);
  html.style.fontSize = `${100 + f.fontStep * 10}%`;
}

const DEFAULT_A11Y: A11yFlags = {
  fontStep: 0, highContrast: false, grayscale: false,
  highlightLinks: false, spaced: false, reading: false,
};

export function FloatingControls() {
  const [a11yOpen, setA11yOpen] = useState(false);
  const [cookiesOpen, setCookiesOpen] = useState(false);
  const [banner, setBanner] = useState(false);
  const [flags, setFlags] = useState<A11yFlags>(DEFAULT_A11Y);
  const [vLibrasOn, setVLibrasOn] = useState(false);
  const [prefs, setPrefs] = useState({ necessary: true, analytics: false, marketing: false });
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(A11Y_KEY);
      if (raw) {
        const f = { ...DEFAULT_A11Y, ...JSON.parse(raw) } as A11yFlags;
        setFlags(f); applyA11y(f);
      }
      const c = localStorage.getItem(COOKIES_KEY);
      if (!c) setBanner(true);
      else setPrefs({ ...prefs, ...JSON.parse(c) });
    } catch {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateFlags = (patch: Partial<A11yFlags>) => {
    const next = { ...flags, ...patch };
    setFlags(next); applyA11y(next);
    localStorage.setItem(A11Y_KEY, JSON.stringify(next));
  };
  const resetA11y = () => { setFlags(DEFAULT_A11Y); applyA11y(DEFAULT_A11Y); localStorage.removeItem(A11Y_KEY); };

  const savePrefs = (p: typeof prefs) => {
    setPrefs(p);
    localStorage.setItem(COOKIES_KEY, JSON.stringify(p));
    setBanner(false);
    setCookiesOpen(false);
  };

  const toggleVLibras = () => {
    setVLibrasOn((v) => !v);
    // Load VLibras script on demand
    if (!vLibrasOn && !(window as unknown as { VLibras?: unknown }).VLibras) {
      const s = document.createElement("script");
      s.src = "https://vlibras.gov.br/app/vlibras-plugin.js";
      s.async = true;
      s.onload = () => {
        try {
          // @ts-expect-error VLibras global
          new window.VLibras.Widget("https://vlibras.gov.br/app");
        } catch {}
      };
      document.body.appendChild(s);
      const div = document.createElement("div");
      div.setAttribute("vw", "");
      div.className = "enabled";
      div.innerHTML = '<div vw-access-button class="active"></div><div vw-plugin-wrapper><div class="vw-plugin-top-wrapper"></div></div>';
      document.body.appendChild(div);
    }
  };

  return (
    <>
      {/* Left column: cookies + accessibility */}
      <div className="fixed bottom-4 left-4 z-40 flex flex-col gap-2">
        <button
          type="button"
          aria-label="Preferências de cookies"
          title="Preferências de cookies"
          onClick={() => setCookiesOpen(true)}
          className="grid h-11 w-11 place-items-center rounded-full bg-[color:var(--navy)] text-[color:var(--cream)] shadow-md hover:bg-[color:var(--wine)]"
        >
          <Cookie className="h-5 w-5" aria-hidden />
        </button>
        <button
          type="button"
          aria-label="Painel de acessibilidade"
          aria-expanded={a11yOpen}
          title="Acessibilidade"
          onClick={() => setA11yOpen((v) => !v)}
          className="grid h-11 w-11 place-items-center rounded-full bg-[color:var(--wine)] text-[color:var(--cream)] shadow-md hover:bg-[color:var(--wine-deep)]"
        >
          <Accessibility className="h-5 w-5" aria-hidden />
        </button>
      </div>

      {/* Right column: whatsapp + vlibras */}
      <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-2">
        <a
          href={`https://wa.me/${SITE.whatsapp}`}
          target="_blank"
          rel="noreferrer"
          aria-label="Fale conosco pelo WhatsApp"
          title="WhatsApp"
          className="grid h-11 w-11 place-items-center rounded-full bg-[#25D366] text-white shadow-md hover:brightness-110"
        >
          <MessageCircle className="h-5 w-5" aria-hidden />
        </a>
        <button
          type="button"
          onClick={toggleVLibras}
          aria-label="Ativar VLibras (tradução em Libras)"
          title="VLibras"
          className={`grid h-11 w-11 place-items-center rounded-full text-white shadow-md hover:brightness-110 ${vLibrasOn ? "bg-[color:var(--gold)] text-[color:var(--navy)]" : "bg-[color:var(--navy)]"}`}
        >
          <Hand className="h-5 w-5" aria-hidden />
        </button>
      </div>

      {/* Accessibility panel */}
      {a11yOpen && (
        <div
          ref={panelRef}
          role="dialog"
          aria-label="Painel de acessibilidade"
          className="fixed bottom-20 left-4 z-50 w-[300px] rounded-2xl border border-[color:var(--border)] bg-[color:var(--cream)] p-4 text-[color:var(--foreground)] shadow-xl"
        >
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-sm font-semibold">Acessibilidade</h2>
            <button aria-label="Fechar painel" onClick={() => setA11yOpen(false)} className="rounded p-1 hover:bg-[color:var(--beige)]">
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <A11yBtn label="Aumentar fonte" icon={Plus} onClick={() => updateFlags({ fontStep: Math.min(3, flags.fontStep + 1) })} />
            <A11yBtn label="Diminuir fonte" icon={Minus} onClick={() => updateFlags({ fontStep: Math.max(-1, flags.fontStep - 1) })} />
            <A11yBtn label="Alto contraste" icon={Contrast} active={flags.highContrast} onClick={() => updateFlags({ highContrast: !flags.highContrast })} />
            <A11yBtn label="Escala de cinza" icon={Droplet} active={flags.grayscale} onClick={() => updateFlags({ grayscale: !flags.grayscale })} />
            <A11yBtn label="Destacar links" icon={Underline} active={flags.highlightLinks} onClick={() => updateFlags({ highlightLinks: !flags.highlightLinks })} />
            <A11yBtn label="Espaçamento" icon={AlignJustify} active={flags.spaced} onClick={() => updateFlags({ spaced: !flags.spaced })} />
            <A11yBtn label="Modo leitura" icon={BookOpen} active={flags.reading} onClick={() => updateFlags({ reading: !flags.reading })} />
            <A11yBtn label="Redefinir" icon={RotateCcw} onClick={resetA11y} />
          </div>
        </div>
      )}

      {/* Cookies preferences modal */}
      {cookiesOpen && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/50 p-4" role="dialog" aria-label="Preferências de cookies">
          <div className="w-full max-w-lg rounded-2xl bg-[color:var(--cream)] p-6 text-[color:var(--foreground)] shadow-xl">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Preferências de cookies</h2>
              <button aria-label="Fechar" onClick={() => setCookiesOpen(false)}><X className="h-5 w-5" /></button>
            </div>
            <p className="mt-2 text-sm text-[color:var(--muted-foreground)]">
              Escolha quais categorias de cookies deseja permitir.
            </p>
            <div className="mt-4 space-y-3 text-sm">
              <label className="flex items-start gap-3 rounded-lg border border-[color:var(--border)] p-3">
                <input type="checkbox" checked disabled className="mt-1" />
                <span><strong>Necessários</strong><br /><span className="text-[color:var(--muted-foreground)]">Essenciais ao funcionamento do site.</span></span>
              </label>
              <label className="flex items-start gap-3 rounded-lg border border-[color:var(--border)] p-3">
                <input type="checkbox" checked={prefs.analytics} onChange={(e) => setPrefs({ ...prefs, analytics: e.target.checked })} className="mt-1" />
                <span><strong>Analíticos</strong><br /><span className="text-[color:var(--muted-foreground)]">Ajudam a entender o uso do site.</span></span>
              </label>
              <label className="flex items-start gap-3 rounded-lg border border-[color:var(--border)] p-3">
                <input type="checkbox" checked={prefs.marketing} onChange={(e) => setPrefs({ ...prefs, marketing: e.target.checked })} className="mt-1" />
                <span><strong>Marketing</strong><br /><span className="text-[color:var(--muted-foreground)]">Personalização de conteúdo e campanhas.</span></span>
              </label>
            </div>
            <div className="mt-5 flex flex-wrap justify-end gap-2">
              <Button variant="outline" onClick={() => savePrefs({ necessary: true, analytics: false, marketing: false })}>Recusar opcionais</Button>
              <Button onClick={() => savePrefs(prefs)} className="bg-[color:var(--navy)] text-[color:var(--cream)] hover:bg-[color:var(--wine)]">Salvar preferências</Button>
              <Button onClick={() => savePrefs({ necessary: true, analytics: true, marketing: true })} className="bg-[color:var(--wine)] text-[color:var(--cream)] hover:bg-[color:var(--wine-deep)]">Aceitar todos</Button>
            </div>
          </div>
        </div>
      )}

      {/* Cookies banner */}
      {banner && (
        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[color:var(--border)] bg-[color:var(--cream)]/95 backdrop-blur">
          <div className="container-page flex flex-col items-start gap-3 py-4 md:flex-row md:items-center md:justify-between">
            <p className="max-w-2xl text-sm text-[color:var(--foreground)]">
              Utilizamos cookies para melhorar sua experiência. Leia nossa{" "}
              <a href="/politica-de-privacidade" className="underline">Política de Privacidade</a>.
            </p>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm" onClick={() => setCookiesOpen(true)}>Personalizar</Button>
              <Button size="sm" variant="outline" onClick={() => savePrefs({ necessary: true, analytics: false, marketing: false })}>Recusar opcionais</Button>
              <Button size="sm" onClick={() => savePrefs({ necessary: true, analytics: true, marketing: true })} className="bg-[color:var(--wine)] text-[color:var(--cream)] hover:bg-[color:var(--wine-deep)]">Aceitar todos</Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function A11yBtn({
  label, icon: Icon, active, onClick,
}: { label: string; icon: React.ComponentType<{ className?: string }>; active?: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex flex-col items-center gap-1 rounded-lg border p-2 text-center transition-colors ${
        active ? "border-[color:var(--wine)] bg-[color:var(--wine)] text-[color:var(--cream)]" : "border-[color:var(--border)] hover:bg-[color:var(--beige)]"
      }`}
    >
      <Icon className="h-4 w-4" aria-hidden />
      <span>{label}</span>
    </button>
  );
}