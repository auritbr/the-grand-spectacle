import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site-data";
import { toast } from "sonner";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Arco & Palco" },
      { name: "description", content: "Fale conosco: parcerias, imprensa, apoios e informações." },
      { property: "og:title", content: "Contato — Arco & Palco" },
      { property: "og:description", content: "Fale conosco: parcerias, imprensa, apoios e informações." },
      { property: "og:url", content: "/contato" },
    ],
    links: [{ rel: "canonical", href: "/contato" }],
  }),
  component: Contato,
});

const schema = z.object({
  name: z.string().trim().min(2, "Informe seu nome").max(100),
  email: z.string().trim().email("E-mail inválido").max(255),
  subject: z.string().trim().min(2, "Informe o assunto").max(150),
  category: z.string().min(1, "Selecione a categoria"),
  message: z.string().trim().min(10, "Mensagem muito curta").max(2000),
  consent: z.literal(true, { errorMap: () => ({ message: "É necessário consentir" }) }),
});

function Contato() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      subject: String(fd.get("subject") ?? ""),
      category: String(fd.get("category") ?? ""),
      message: String(fd.get("message") ?? ""),
      consent: fd.get("consent") === "on",
    };
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const iss of parsed.error.issues) errs[String(iss.path[0])] = iss.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    (e.currentTarget as HTMLFormElement).reset();
    toast.success("Mensagem enviada! Retornaremos em breve.");
  };

  return (
    <>
      <PageHero
        crumbs={[{ label: "Início", to: "/" }, { label: "Contato" }]}
        eyebrow="Fale conosco"
        title="Vamos conversar"
        intro="Parcerias, imprensa, apoios ou dúvidas — estamos à disposição."
      />
      <section className="container-page grid gap-10 py-16 md:grid-cols-[1fr_360px]">
        <form onSubmit={onSubmit} noValidate className="space-y-4 rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] p-6 shadow-sm">
          <Field id="name" label="Nome" error={errors.name} />
          <Field id="email" label="E-mail" type="email" error={errors.email} />
          <Field id="subject" label="Assunto" error={errors.subject} />
          <div>
            <label htmlFor="category" className="mb-1 block text-sm font-medium">Categoria</label>
            <select id="category" name="category" className="h-11 w-full rounded-md border border-[color:var(--border)] bg-[color:var(--background)] px-3">
              <option value="">Selecione...</option>
              <option>Informações gerais</option>
              <option>Parceria / Apoio</option>
              <option>Imprensa</option>
              <option>Apresentação / Circulação</option>
              <option>Voluntariado</option>
            </select>
            {errors.category && <p className="mt-1 text-xs text-[color:var(--destructive)]">{errors.category}</p>}
          </div>
          <div>
            <label htmlFor="message" className="mb-1 block text-sm font-medium">Mensagem</label>
            <textarea id="message" name="message" rows={6} className="w-full rounded-md border border-[color:var(--border)] bg-[color:var(--background)] p-3" />
            {errors.message && <p className="mt-1 text-xs text-[color:var(--destructive)]">{errors.message}</p>}
          </div>
          <label className="flex items-start gap-2 text-sm">
            <input type="checkbox" name="consent" className="mt-1" />
            <span>Concordo em ser contatado(a) e li a <a href="/politica-de-privacidade" className="underline">Política de Privacidade</a>.</span>
          </label>
          {errors.consent && <p className="text-xs text-[color:var(--destructive)]">{errors.consent}</p>}
          <Button disabled={loading} type="submit" className="w-full bg-[color:var(--wine)] text-[color:var(--cream)] hover:bg-[color:var(--wine-deep)]">
            {loading ? "Enviando..." : "Enviar mensagem"}
          </Button>
        </form>

        <aside className="space-y-6">
          <InfoBox icon={MapPin} title="Endereço">{SITE.address}</InfoBox>
          <InfoBox icon={Mail} title="E-mail"><a href={`mailto:${SITE.email}`} className="hover:text-[color:var(--wine)]">{SITE.email}</a></InfoBox>
          <InfoBox icon={Phone} title="Telefone">{SITE.phone}</InfoBox>
          <InfoBox icon={Clock} title="Horário">{SITE.hours}</InfoBox>
          <div className="overflow-hidden rounded-2xl border border-[color:var(--border)] aspect-[4/3]">
            <iframe title="Mapa da sede" src="https://www.openstreetmap.org/export/embed.html?bbox=-46.66,-23.56,-46.62,-23.53&layer=mapnik" className="h-full w-full" />
          </div>
        </aside>
      </section>
    </>
  );
}

function Field({ id, label, type = "text", error }: { id: string; label: string; type?: string; error?: string }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-sm font-medium">{label}</label>
      <input id={id} name={id} type={type} className="h-11 w-full rounded-md border border-[color:var(--border)] bg-[color:var(--background)] px-3" />
      {error && <p className="mt-1 text-xs text-[color:var(--destructive)]">{error}</p>}
    </div>
  );
}

function InfoBox({ icon: Icon, title, children }: { icon: React.ComponentType<{ className?: string }>; title: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] p-4">
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[color:var(--beige)] text-[color:var(--wine)]">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <p className="text-xs uppercase tracking-widest text-[color:var(--gold)]">{title}</p>
        <p className="text-sm">{children}</p>
      </div>
    </div>
  );
}