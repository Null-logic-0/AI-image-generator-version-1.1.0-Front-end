import LoginForm from "@/components/AuthForm/LoginForm";

export const metadata = {
  title: "SynthArt | Login into your account",
};

function LoginPage() {
  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <LoginForm />
    </div>
  );
}

export default LoginPage;
