"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import { ChevronRight, Star, Zap } from "lucide-react";
import { useRef } from "react";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Martin Kováč",
    role: "CEO & Founder",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
    content:
      "AbraConsulting nám vytvorila virálne príspevky, ktoré zvýšili naše sledovanie na Instagrame o 300%. Profesionálny prístup!",
  },
  {
    name: "Jana Novákova",
    role: "Marketing Director",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
    content:
      "Ich stratégia pre TikTok bola presne to, čo sme potrebovali. Naše videá teraz dosahujú milióny zobrazení.",
  },
  {
    name: "Peter Horváth",
    role: "Brand Manager",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
    content:
      "Twitter kampaň od AbraConsulting generovala enormný engagement. Náš reach sa zvýšil o 500% za jeden mesiac.",
  },
  {
    name: "Lucia Szabová",
    role: "Content Creator",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",
    content:
      "YouTube stratégia bola perfektná. Naše videá sa dostali do trendov a získali tisíce nových odberateľov.",
  },
  {
    name: "Tomáš Baláž",
    role: "E-commerce Owner",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp",
    content:
      "Virálny obsah vytvorený AbraConsulting nám priniesol 250% nárast predajov. Rozhodne odporúčam ich služby!",
  },
  {
    name: "Mária Dudová",
    role: "Startup Founder",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-6.webp",
    content:
      "Ich kreatívny prístup k sociálnym médiám je výnimočný. Každý príspevok bol presne zacielený na náš target.",
  },
];

const TestimonialSection = () => {
  const plugin = useRef(
    AutoScroll({
      startDelay: 500,
      speed: 0.7,
    })
  );

  return (
    <section className="py-32 w-full mx-auto overflow-hidden">
      <div className="w-full mx-auto flex flex-col items-center gap-4">
        <div className="flex items-center justify-center gap-1 text-sm font-semibold">
          <Zap className="h-6 w-auto fill-primary" />
          Hodnotenie 5 hviezd od 1000+ spokojných klientov
        </div>

        <h2 className="text-balance text-center text-3xl font-medium md:text-4xl lg:text-6xl">
          Stretnite sa s našimi úspešnými klientmi
        </h2>
        <p className="text-muted-foreground text-center mx-auto mt-4 max-w-2xl text-lg">
          Pripojte sa k celosvetovej sieti tvorcov, značiek a marketerov, ktorí 
          rastú s AbraConsulting.
        </p>
      </div>
      <div className="lg:w-full mx-auto ">
        <div className="mt-16 space-y-4">
          <Carousel
            opts={{
              loop: true,
            }}
            plugins={[plugin.current]}
            onMouseLeave={() => plugin.current.play()}
            className="relative before:absolute before:top-0 before:bottom-0 before:left-0 before:z-10 before:w-36 before:bg-linear-to-r before:from-background before:to-transparent after:absolute after:top-0 after:right-0 after:bottom-0 after:z-10 after:w-36 after:bg-linear-to-l after:from-orange-200 after:to-transparent"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="basis-auto">
                  <Card className="max-w-96 p-6 select-none">
                    <div className="flex justify-between">
                      <div className="mb-4 flex gap-4">
                        <Avatar className="size-14 rounded-full ring-1 ring-input">
                          <AvatarImage
                            src={testimonial.avatar}
                            alt={testimonial.name}
                          />
                        </Avatar>
                        <div>
                          <p className="font-medium">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-1">
                        <Star className="size-5 fill-amber-500 text-amber-500" />
                        <Star className="size-5 fill-amber-500 text-amber-500" />
                        <Star className="size-5 fill-amber-500 text-amber-500" />
                        <Star className="size-5 fill-amber-500 text-amber-500" />
                        <Star className="size-5 fill-amber-500 text-amber-500" />
                      </div>
                    </div>
                    <q className="leading-7 text-muted-foreground">
                      {testimonial.content}
                    </q>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export { TestimonialSection };