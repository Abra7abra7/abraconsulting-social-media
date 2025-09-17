"use client";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { Dribbble, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";
import { cn } from "@/lib/utils";
import { authClient, useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useCustomer } from "autumn-js/react";

const menuItems = [
  { name: "Služby", href: "#link" },
  { name: "Portfolio", href: "#link" },
  { name: "Cenník", href: "/pricing" },
  { name: "O nás", href: "#link" },
];

export const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const { data: session, isPending, refetch } = useSession();
  const router = useRouter();
  const { customer } = useCustomer();

  const handleSignOut = async () => {
    const token = typeof window !== "undefined" ? localStorage.getItem("bearer_token") : "";
    const { error } = await authClient.signOut({
      fetchOptions: {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    });
    if (error?.code) {
      toast.error(error.code);
    } else {
      localStorage.removeItem("bearer_token");
      refetch();
      router.push("/");
    }
  };

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header>
      <nav
        data-state={menuState && "active"}
        className="fixed z-40 w-full px-2"
      >
        <div
          className={cn(
            "mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12",
            isScrolled &&
              "bg-background/50 max-w-4xl rounded-full border backdrop-blur-lg lg:px-5"
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full justify-between lg:w-auto">
              <Link
                href="/"
                aria-label="home"
                className="flex items-center text-black font-medium gap-2 space-x-2"
              >
                <Dribbble />
                AbraConsulting
              </Link>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState == true ? "Close Menu" : "Open Menu"}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>
            </div>

            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-8 text-sm">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="text-black font-medium hover:text-accent-foreground block duration-150"
                    >
                      <span className="text-black font-medium">
                        {item.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="text-muted-foreground hover:text-accent-foreground block duration-150"
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                {/* Plan badge for logged-in users */}
                {!isPending && session?.user ? (
                  <Link href="/pricing" className={cn("sm:mr-2")}>
                    <span className="inline-flex items-center gap-1 px-2 h-6 text-xs rounded-full bg-secondary text-foreground border">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {customer?.products?.[0]?.name || "Free"}
                    </span>
                  </Link>
                ) : null}
                {/* Auth-aware actions */}
                {isPending ? null : session?.user ? (
                  <>
                    <Button
                      variant="outline"
                      size="sm"
                      className={cn(isScrolled && "lg:hidden")}
                      asChild
                    >
                      <Link href="/account">
                        <span>Môj účet</span>
                      </Link>
                    </Button>
                    <Button
                      size="sm"
                      onClick={handleSignOut}
                      className={cn(isScrolled && "lg:hidden")}
                    >
                      Odhlásiť sa
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      className={cn(
                        isScrolled ? "lg:inline-flex rounded-3xl px-5" : "hidden"
                      )}
                    >
                      <Link href="/dashboard">
                        <span>Prejsť do aplikácie</span>
                      </Link>
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className={cn(isScrolled && "lg:hidden")}
                    >
                      <Link href="/login">
                        <span>Prihlásiť</span>
                      </Link>
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      className={cn(isScrolled && "lg:hidden")}
                    >
                      <Link href="/register">
                        <span>Registrácia</span>
                      </Link>
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      className={cn(
                        isScrolled ? "lg:inline-flex rounded-3xl px-5" : "hidden"
                      )}
                    >
                      <Link href="/register">
                        <span>Začať teraz</span>
                      </Link>
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};