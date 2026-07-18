import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { StagePlaceholder } from "@/components/decor/CurtainBackdrop";

export type LightboxImage = { alt: string; caption?: string; src?: string };

export function Lightbox({
  images,
  index,
  onClose,
  onIndex,
}: {
  images: LightboxImage[];
  index: number | null;
  onClose: () => void;
  onIndex: (i: number) => void;
}) {
  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onIndex((index + 1) % images.length);
      if (e.key === "ArrowLeft") onIndex((index - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, images.length, onClose, onIndex]);

  if (index === null) return null;
  const cur = images[index];

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/85 p-4" role="dialog" aria-modal aria-label="Visualização de imagem">
      <button
        aria-label="Fechar"
        onClick={onClose}
        className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
      >
        <X className="h-5 w-5" />
      </button>
      <button
        aria-label="Anterior"
        onClick={() => onIndex((index - 1 + images.length) % images.length)}
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        aria-label="Próxima"
        onClick={() => onIndex((index + 1) % images.length)}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="flex max-h-full max-w-4xl flex-col items-center gap-3">
        {cur.src ? (
          <img src={cur.src} alt={cur.alt} className="max-h-[75vh] w-auto rounded-xl object-contain" />
        ) : (
          <StagePlaceholder label={cur.alt} className="h-[60vh] w-[80vw] max-w-3xl" ratio="" />
        )}
        <div className="text-center text-sm text-white/85">
          {cur.caption && <p>{cur.caption}</p>}
          <p className="text-white/60">{index + 1} / {images.length}</p>
        </div>
      </div>
    </div>
  );
}