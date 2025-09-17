"use client";
import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

export const LoginForm: React.FC = () => {
  const router = useRouter();
  const search = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  React.useEffect(() => {
    if (search?.get("registered") === "true") {
      toast.success("Účet bol vytvorený. Prihláste sa.");
    }
  }, [search]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { error } = await authClient.signIn.email({
        email,
        password,
        rememberMe,
        callbackURL: "/dashboard",
      });
      if (error?.code) {
        toast.error("Neplatný email alebo heslo.");
        return;
      }
      toast.success("Prihlásenie úspešné");
      router.push("/dashboard");
    } catch (err) {
      toast.error("Prihlásenie zlyhalo");
    } finally {
      setLoading(false);
    }
  };

  const onGoogle = async () => {
    if (googleLoading) return;
    setGoogleLoading(true);
    try {
      const redirect = search?.get("redirect") || "/dashboard";
      const { error } = await authClient.signIn.social({
        provider: "google",
        callbackURL: redirect,
      });
      if (error?.code) {
        toast.error("Google prihlásenie zlyhalo: " + error.code);
        return;
      }
      // Redirect is handled by the provider
    } catch (e: any) {
      toast.error("Google prihlásenie zlyhalo");
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Heslo</Label>
        <Input id="password" type="password" autoComplete="off" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" checked={rememberMe} onCheckedChange={(v) => setRememberMe(!!v)} />
        <Label htmlFor="remember" className="text-sm text-muted-foreground">Zapamätať prihlásenie</Label>
      </div>
      <Button type="submit" className="w-full" disabled={loading || googleLoading}>
        {loading ? "Prihlasujem..." : "Prihlásiť sa"}
      </Button>

      {/* Divider */}
      <div className="relative my-4">
        <div className="absolute inset-0 flex items-center"><span className="w-full border-t" /></div>
        <div className="relative flex justify-center text-xs"><span className="bg-background px-2 text-muted-foreground">alebo</span></div>
      </div>

      <Button type="button" variant="outline" className="w-full" onClick={onGoogle} disabled={googleLoading || loading}>
        {googleLoading ? "Prebieha Google prihlásenie..." : "Pokračovať s Google"}
      </Button>
    </form>
  );
};

export default LoginForm;