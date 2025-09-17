import { Dribbble } from "lucide-react";
import React from "react";

interface Footer7Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  sections?: Array<{
    title: string;
    links: Array<{ name: string; href: string }>;
  }>;
  description?: string;
  socialLinks?: Array<{
    icon: React.ReactElement;
    href: string;
    label: string;
  }>;
  copyright?: string;
  legalLinks?: Array<{
    name: string;
    href: string;
  }>;
}

const defaultSections = [
  {
    title: "Služby",
    links: [
      { name: "Virálny content", href: "#" },
      { name: "Cenník", href: "#" },
      { name: "Social Media", href: "#" },
      { name: "Kampane", href: "#" },
    ],
  },
  {
    title: "Spoločnosť",
    links: [
      { name: "O nás", href: "#" },
      { name: "Tím", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Kariéra", href: "#" },
    ],
  },
  {
    title: "Platformy",
    links: [
      { name: "Twitter/X", href: "#" },
      { name: "Instagram", href: "#" },
      { name: "TikTok", href: "#" },
      { name: "YouTube", href: "#" },
    ],
  },
];

const defaultLegalLinks = [
  { name: "Obchodné podmienky", href: "#" },
  { name: "Ochrana súkromia", href: "#" },
];

const FooterSection = ({
  logo = {
    url: "https://abraconsulting.xyz",
    src: "https://example.com/path/to/abraconsulting-logo.svg",
    alt: "Abra Consulting logo",
    title: "Abra Consulting",
  },
  sections = defaultSections,
  description = "Abra Consulting vytvára virálny obsah pre sociálne siete a pomáha značkám dosiahnuť maximálny dosah.",
  copyright = "© 2025 Abra Consulting. Všetky práva vyhradené.",
  legalLinks = defaultLegalLinks,
}: Footer7Props) => {
  return (
    <section className="py-32 w-full bg-white/50 backdrop-blur-3xl rounded-t-3xl border border-black/10 shadow-2xl">
      <div className="container  max-w-7xl mx-auto">
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
          <div className="flex w-full flex-col justify-between gap-6 lg:items-start">
            {/* Logo */}
            <div className="flex items-center gap-2 lg:justify-start">
              <Dribbble />
              <h2 className="text-xl font-semibold">{logo.title}</h2>
            </div>
            <p className="text-muted-foreground max-w-[70%] text-sm">
              {description}
            </p>
          </div>
          <div className="grid w-full gap-6 md:grid-cols-3 lg:gap-20">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold">{section.title}</h3>
                <ul className="text-muted-foreground space-y-3 text-sm">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="hover:text-primary font-medium"
                    >
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="text-muted-foreground mt-8 flex flex-col justify-between gap-4 border-t py-8 text-xs font-medium md:flex-row md:items-center md:text-left">
          <p className="order-2 lg:order-1">{copyright}</p>
          <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row">
            {legalLinks.map((link, idx) => (
              <li key={idx} className="hover:text-primary">
                <a href={link.href}> {link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export { FooterSection };