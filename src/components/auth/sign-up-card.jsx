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

import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { createUserAccount } from "@/lib/appwrite/create-user";
import { useRouter } from "next/navigation";
import { signInAccount } from "@/lib/appwrite/login-user";
import { useUserContext } from "@/context/AuthContext";

const SignUpCard = ({ setState }) => {
  // Check if user is authenticated and update the context
  const { checkAuthUser } = useUserContext();

  // Router to update path
  const router = useRouter();

  // Form states
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [formState, setFormState] = useState(false);

  // Register user
  const registerUser = async () => {
    setFormState(true);
    const user = { name, username, email, password };

    try {
      const newUser = await createUserAccount(user);

      if (!newUser) {
        toast("Sign up failed. Please try again.");

        return;
      }

      const session = await signInAccount({
        email: user.email,
        password: user.password,
      });

      if (!session) {
        toast("Something went wrong. Please login your new account");
        return;
      }
      const isLoggedIn = await checkAuthUser();

      if (isLoggedIn) {
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");

        router.push("/");
      } else {
        toast("Login failed. Please try again.");

        return;
      }
    } catch (error) {
      console.log({ error });
    } finally {
      setFormState(false);
    }
  };

  return (
    <Card className="w-full h-full p-8">
      <CardHeader className="px-0 pt-0">
        <CardTitle>Sign up to continue</CardTitle>
        <CardDescription>
          Use your email or another service to continue
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-5 px-0 pb-0">
        <form className="space-y-2.5">
          <Input
            disabled={formState}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            type="text"
            required
          />
          <Input
            disabled={formState}
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Username"
            type="text"
            required
          />
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
          <Input
            disabled={formState}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm password"
            type="password"
            required
          />
          <Button
            onClick={() => registerUser()}
            className="w-full"
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
          Already have an account?{" "}
          <span
            onClick={() => setState("signIn")}
            className="text-sky-500 hover:underline cursor-pointer"
          >
            Sign In
          </span>
        </p>
      </CardContent>
    </Card>
  );
};

export default SignUpCard;
