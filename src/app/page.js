import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <section className="h-screen flex items-center justify-center bg-black">
      <Card>
        <CardHeader>
          <CardTitle>Testing features - alpha demo v1.1</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col justify-between gap-y-2.5">
          <Button asChild>
            <Link href="/auth">Login / Register</Link>
          </Button>
          <Button className="opacity-50 pointer-events-none !cursor-no-drop">
            Chats
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}
