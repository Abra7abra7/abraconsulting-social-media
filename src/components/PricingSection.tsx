import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default function Pricing() {
  return (
    <div className=" relative py-16 w-full md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-medium md:text-4xl lg:text-6xl">
            AbracConsulting pricing that scales with your growth
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-3xl  text-lg">
            Pick the AbracConsulting plan that fits your team and start creating
            viral social media content across all platforms today.
          </p>
        </div>
        <div className="@container relative mt-12 md:mt-20">
          <Card className="@4xl:max-w-full bg-gradient-to-tr from-violet-200/40 via-white/50  to-white/90 backdrop-blur-3xl relative mx-auto max-w-sm">
            <div className="@4xl:grid-cols-3 grid">
              <div>
                <CardHeader className="p-8">
                  <CardTitle className="font-medium">Starter</CardTitle>
                  <span className="mb-0.5 mt-2 block text-2xl font-semibold">
                    $0 / mo
                  </span>
                  <CardDescription className="text-sm">
                    Perfect for small businesses starting viral content creation
                  </CardDescription>
                </CardHeader>
                <div className="border-y px-8 py-4">
                  <Button asChild className="w-full" variant="outline">
                    <Link href="#">Get Started Free</Link>
                  </Button>
                </div>

                <ul role="list" className="space-y-3 p-8">
                  {[
                    "Basic viral content strategy",
                    "5 posts per platform/month",
                    "Email & chat support only",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check
                        className="text-primary size-3"
                        strokeWidth={3.5}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="ring-foreground/10 bg-background/80 backdrop-blur-[50px] rounded-(--radius) @3xl:mx-0 @3xl:-my-9 -mx-1 border-transparent  shadow ring-1">
                <div className="@3xl:py-3 @3xl:px-0 relative px-1">
                  <CardHeader className="p-8">
                    <CardTitle className="font-medium">Viral</CardTitle>
                    <span className="mb-0.5 mt-2 block text-2xl font-semibold">
                      $19 / mo
                    </span>
                    <CardDescription className="text-sm">
                      For growing brands ready to go viral with proven strategies
                    </CardDescription>
                  </CardHeader>
                  <div className="@3xl:mx-0 -mx-1 border-y px-8 py-4">
                    <Button asChild className="w-full">
                      <Link href="#">Start 7-day Free Trial</Link>
                    </Button>
                  </div>

                  <ul role="list" className="space-y-3 p-8">
                    {[
                      "Everything in Starter",
                      "Twitter viral thread creation",
                      "Instagram Reels optimization",
                      "TikTok trending content",
                      "YouTube Shorts strategy",
                      "Advanced hashtag research",
                      "Content calendar planning",
                      "Performance analytics",
                      "Monthly strategy updates",
                      "Cross-platform optimization",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Check
                          className="text-primary size-3"
                          strokeWidth={3.5}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <CardHeader className="p-8">
                  <CardTitle className="font-medium">Agency</CardTitle>
                  <span className="mb-0.5 mt-2 block text-2xl font-semibold">
                    $49 / mo
                  </span>
                  <CardDescription className="text-sm">
                    Best for agencies & enterprises dominating social media
                  </CardDescription>
                </CardHeader>
                <div className="border-y px-8 py-4">
                  <Button asChild className="w-full" variant="outline">
                    <Link href="#">Contact Sales</Link>
                  </Button>
                </div>

                <ul role="list" className="space-y-3 p-8">
                  {[
                    "Everything in Viral",
                    "Unlimited viral content",
                    "Dedicated viral strategist",
                    "Priority trend analysis",
                    "Advanced viral metrics",
                    "Unlimited platform reports",
                    "Premium social integrations",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check
                        className="text-primary size-3"
                        strokeWidth={3.5}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}