import Image from "next/image";
import Link from "next/link";
import { PremiumVideoGate } from "@/components/premium-video-gate";

export const metadata = {
  title: "Dashboard | Prémiové videá",
};

const videos = [
  {
    id: 1,
    title: "Ako budovať značku online",
    thumb: "/window.svg",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "12:34",
  },
  {
    id: 2,
    title: "Strategický marketing pre SMB",
    thumb: "/globe.svg",
    url: "https://www.youtube.com/embed/9bZkp7q19f0",
    duration: "08:47",
  },
  {
    id: 3,
    title: "Efektívny funnel: krok za krokom",
    thumb: "/next.svg",
    url: "https://www.youtube.com/embed/3JZ_D3ELwOQ",
    duration: "15:21",
  },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen w-full bg-background">
      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-12">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight">Moje prémiové videá</h1>
            <p className="text-muted-foreground mt-1">Vitajte späť! Nižšie nájdete svoj obsah.</p>
          </div>
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-foreground underline underline-offset-4"
          >
            Späť na domov
          </Link>
        </div>

        <PremiumVideoGate>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {videos.map((v) => (
              <div key={v.id} className="group relative overflow-hidden rounded-xl border bg-card p-4">
                <div className="relative mb-3 aspect-video w-full overflow-hidden rounded-lg border">
                  <Image src={v.thumb} alt={v.title} fill className="object-contain p-6 bg-muted" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium leading-tight">{v.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1">Dĺžka: {v.duration}</p>
                  </div>
                  <a
                    href={v.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex h-9 items-center rounded-md bg-foreground px-3 text-sm font-medium text-background transition hover:opacity-90"
                  >
                    Prehrať
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Optional embedded preview */}
          <div className="mt-12">
            <h2 className="text-xl font-semibold">Rýchla ukážka</h2>
            <div className="mt-4 grid gap-6 md:grid-cols-2">
              {videos.slice(0, 2).map((v) => (
                <div key={v.id} className="overflow-hidden rounded-xl border">
                  <div className="aspect-video w-full">
                    <iframe
                      className="h-full w-full"
                      src={v.url}
                      title={v.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium">{v.title}</h3>
                    <p className="text-xs text-muted-foreground">Prémiový obsah – dostupný len po prihlásení</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </PremiumVideoGate>
      </section>
    </main>
  );
}