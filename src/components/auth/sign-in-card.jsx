import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { signInAccount } from "@/lib/appwrite/login-user";
import { useState } from "react";

import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SignInCard = ({ setState }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [formState, setFormState] = useState(false);

  const loginUser = async () => {
    setFormState(true);

    const user = { email, password };
    await signInAccount(user);

    setEmail("");
    setPassword("");
    setFormState(false);
  };

  return (
    <Card className="w-full h-full p-8">
      <CardHeader className="px-0 pt-0">
        <CardTitle>Sign in to continue</CardTitle>
        <CardDescription>
          Use your email or another service to continue
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-5 px-0 pb-0">
        <form className="space-y-2.5">
          <Input
            disabled={formState}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
            required
          />
          <Input
            disabled={formState}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
            required
          />
          <Button
            className="w-full"
            onClick={loginUser}
            size="lg"
            disabled={formState}
          >
            Continue
          </Button>
        </form>

        <Separator />

        <div className="flex flex-col justify-between gap-y-2.5">
          <Button
            disabled={true}
            variant="outline"
            className="w-full relative"
            size={"lg"}
            onClick={() => {}}
          >
            <FcGoogle className="size-5 absolute top-2.5 left-2.5" />
            Continue with Google
          </Button>
          <Button
            disabled={true}
            variant="outline"
            className="w-full relative"
            size={"lg"}
            onClick={() => {}}
          >
            <FaGithub className="size-5 absolute top-2.5 left-2.5" />
            Continue with Github
          </Button>
        </div>
        <p className="text-sm text-muted-foreground font-medium">
          {"Don't have an account?"}
          <span
            onClick={() => setState("signUp")}
            className="text-sky-500 hover:underline cursor-pointer"
          >
            Sign Up
          </span>
        </p>
      </CardContent>
    </Card>
  );
};

export default SignInCard;
