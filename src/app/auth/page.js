import AuthScreen from "@/components/auth/auth-screen";
import { Suspense } from "react";

export default function AuthPage() {
  return (
    <Suspense>
      <AuthScreen />;
    </Suspense>
  );
}
