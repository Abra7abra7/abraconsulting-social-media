import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { LoginForm } from "@/components/auth/LoginForm";
import { Suspense } from "react";

export default function LoginPage() {
  return (
    <div className="min-h-[70vh] w-full flex items-center justify-center py-16 px-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Prihlásiť sa</CardTitle>
          <CardDescription>
            Nemáte účet? <Link href="/register" className="underline">Vytvorte si ho</Link>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Suspense fallback={<div className="text-sm text-muted-foreground">Načítavam…</div>}>
            <LoginForm />
          </Suspense>
        </CardContent>
      </Card>
    </div>
  );
}