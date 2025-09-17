import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { RegisterForm } from "@/components/auth/RegisterForm";

export default function RegisterPage() {
  return (
    <div className="min-h-[70vh] w-full flex items-center justify-center py-16 px-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Vytvoriť účet</CardTitle>
          <CardDescription>
            Už máte účet? <Link href="/login" className="underline">Prihláste sa</Link>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RegisterForm />
        </CardContent>
      </Card>
    </div>
  );
}