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

import { useUserContext } from "@/context/AuthContext";
import { useSignInAccount } from "@/lib/react-query/queries";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { toast } from "sonner";

const SignInCard = ({ setState }) => {
  // Check if user is authenticated and update the context
  const { checkAuthUser } = useUserContext();
  const { mutateAsync: signInAccount } = useSignInAccount();

  // Router to update path
  const router = useRouter();

  // Form states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [formState, setFormState] = useState(false);

  // Login user
  const loginUser = async () => {
    setFormState(true); // Set loading true
    const user = { email, password };

    try {
      // Login user function and create it's session
      const session = await signInAccount(user);

      if (!session) {
        toast.error("Login failed. Please try again, Code: SIGNIN_1");
        return;
      }

      // ! IMPORTANT: Check if user is authenticated, and update context
      const isLoggedIn = await checkAuthUser();

      console.log(isLoggedIn);

      // If user is authenticated then return to next page and send a success message
      if (isLoggedIn) {
        setEmail("");
        setPassword("");

        toast(`Welcome, ${email}. Login successful.`);

        router.push("/");
      }
    } catch (error) {
      // If there is any unknowm error, log it to the console
      console.log(error);
      toast.error(error.message);
    } finally {
      // Set loading false
      setFormState(false);
    }
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
          {"Don't have an account? "}
          <span
            onClick={() => setState("signup")}
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
