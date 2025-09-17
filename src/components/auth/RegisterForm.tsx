"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export const RegisterForm: React.FC = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirm) {
      toast.error("Heslá sa nezhodujú");
      return;
    }
    setLoading(true);
    try {
      const { error } = await authClient.signUp.email({
        email,
        name,
        password,
      });

      if (error?.code) {
        const map: Record<string, string> = {
          USER_ALREADY_EXISTS: "Používateľ s týmto emailom už existuje",
        };
        toast.error(map[error.code] || "Registrácia zlyhala");
        return;
      }

      toast.success("Účet vytvorený! Skontrolujte email a prihláste sa.");
      router.push("/login?registered=true");
    } catch {
      toast.error("Registrácia zlyhala");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Meno</Label>
        <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Heslo</Label>
        <Input id="password" type="password" autoComplete="off" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="confirm">Potvrdenie hesla</Label>
        <Input id="confirm" type="password" autoComplete="off" value={confirm} onChange={(e) => setConfirm(e.target.value)} required />
      </div>
      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? "Registrujem..." : "Vytvoriť účet"}
      </Button>
    </form>
  );
};

export default RegisterForm;