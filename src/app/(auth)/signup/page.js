import SignupForm from "@/components/AuthForm/SignupForm.js";

export const metadata = {
  title: "SynthArt | Create account",
};

function SignupPage() {
  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <SignupForm />
    </div>
  );
}

export default SignupPage;
