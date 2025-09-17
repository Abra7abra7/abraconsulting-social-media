"use client";

import {
  ArrowRight,
  Calendar,
  Route,
  Text,
  Waypoints,
  Workflow,
  TrendingUp,
  Video,
  Hash,
  Users,
  BarChart3,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TAB_LIST = [
  {
    icon: TrendingUp,
    title: "Viral Content",
    image: "https://assets.jitter.video/product-import-hero-hd-20.mp4",
  },
  {
    icon: Hash,
    title: "Twitter Strategy",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
  },
  {
    icon: Video,
    title: "TikTok & YouTube",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg",
  },
  {
    icon: Users,
    title: "Instagram Growth",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-5.svg",
  },
];

import { useForm } from "react-hook-form";

const HeroForm = () => {
  const form = useForm<{ email: string }>({
    defaultValues: { email: "" },
  });

  return (
    <div>
      <Form {...form}>
        <form
          className="w-full"
          onSubmit={form.handleSubmit((data) => {
            /* handle submit */
          })}
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="w-full">
                    <div className="relative flex w-full flex-col gap-2 lg:block">
                      <Input
                        {...field}
                        type="email"
                        id="emailInput"
                        placeholder="Your business email address?"
                        className="bg-background rounded-2xl shadow-xl h-fit py-4 pl-5 pr-5 lg:pr-[13.75rem]"
                      />
                      <div className="right-2.5 top-1/2 lg:absolute lg:-translate-y-1/2">
                        <Button
                          type="submit"
                          className="w-full rounded-xl lg:w-fit"
                        >
                          Get Started
                          <ArrowRight />
                        </Button>
                      </div>
                    </div>
                    <FormMessage className="py-1" />
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className=" bg-[url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/dot-pattern-2.svg')]  bg-[length:3.125rem_3.125rem] bg-repeat py-20">
      <div className="container">
        <div className="flex w-full flex-col gap-14">
          <div className="flex w-full max-w-[80rem] flex-col items-center gap-6">
            <Badge
              asChild
              variant="outline"
              className="bg-background px-3! shadow gap-2.5 rounded-full py-1.5 text-sm font-medium leading-[1.2]"
            >
              <a href="#" className="font-medium">
                Abra Consulting Agency
                <ArrowRight className="size-base" />
              </a>
            </Badge>
            <h1 className="text-center text-[2.5rem]   tracking-tight font-medium leading-[.97] sm:text-[3.5rem] md:text-[4rem]">
              Create Viral Social Media Content
            </h1>
            <div className="flex w-full max-w-[36rem] flex-col items-center justify-center gap-6 pt-2">
              <p className="text-foreground tracking-wide text-center text-[1.25rem] font-medium leading-snug">
                We specialize in creating viral content that dominates Twitter, 
                Instagram, TikTok, and YouTube. Scale your social presence today.
              </p>
              <div className="w-full mt-8 max-w-[30rem]">
                <HeroForm />
              </div>
            </div>
          </div>
          <div>
            <Tabs
              defaultValue={TAB_LIST[0].title}
              className="bg-background shadow-xl border mt-8 border-muted-foreground/20 w-full max-w-[85rem]  rounded-4xl p-2.5"
            >
              <TabsList className="bg-muted  h-fit w-full max-w-fit items-start justify-start  overflow-auto rounded-2xl  md:mx-auto md:items-center md:justify-center">
                {TAB_LIST.map((trigger, i) => (
                  <TabsTrigger
                    className="fshrink-0 bg-background px-5 py-2.5"
                    key={`tab-trigger-${i}`}
                    value={trigger.title}
                  >
                    <trigger.icon />
                    {trigger.title}
                  </TabsTrigger>
                ))}
              </TabsList>
              {TAB_LIST.map((content, i) => (
                <TabsContent key={`tab-content-${i}`} value={content.title}>
                  <div className="aspect-[1.696202532] w-full overflow-hidden rounded-3xl">
                    <video
                      src={content.image}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      className="block size-full object-cover object-center"
                    />
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export { HeroSection };