import { Play } from "lucide-react";

import { Button } from "@/components/ui/button";
import Image from "next/image";

const CTASection = () => {
  return (
    <section className="py-32">
      <div className="container relative ">
        <div className="relative mx-auto flex max-w-7xl flex-col justify-between gap-6 overflow-hidden rounded-xl shadow-lg border backdrop-blur-md bg-muted/40 md:flex-row">
          <div className="max-w-xl self-center p-6 md:p-12">
            <h2 className="text-balance text-3xl font-medium md:text-4xl lg:text-5xl">
              Vytvárame virálne príspevky na soc. sieťach
            </h2>
            <p className="mt-4 text-muted-foreground md:text-base">
              Odblokujte plný potenciál vašej značky s Abra Consulting. 
              Tvoríme obsah pre Twitter, Instagram, TikTok, YouTube a ďalšie 
              platformy profesionálne.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button>Začať spoluprácu</Button>
              <Button variant="outline">
                Pozrieť našu prácu
                <Play className="ml-2" />
              </Button>
            </div>
          </div>
          <div className="relative ml-6 max-h-96 md:mt-8 md:ml-0">
            <img
              src="/mask.png"
              alt="placeholder"
              className="absolute -bottom-12 left-4 h-48 -translate-x-1/2 -rotate-[120deg]"
            />
            <video
              src="https://assets.jitter.video/product-import-hero-hd-20.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="z-10 aspect-video h-full w-full rounded-tl-xl border-t border-l object-cover pt-3.5 pl-3.5 backdrop-blur-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { CTASection };