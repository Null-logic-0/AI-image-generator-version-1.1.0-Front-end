import Button from "../Button.js";
import Container from "../Container.js";
import Input from "../Input.js";
import InputContainer from "../InputContainer.js";
import AuthCTA from "./AuthCTA.js";
import AuthHeader from "./AuthHeader.js";

function LoginForm() {
  return (
    <Container className="px-4 py-12 max-w-[500px]">
      <div className="flex flex-col gap-6">
        <AuthHeader title="Welcome to SynthArt" />
        <form className="flex flex-col gap-8">
          <InputContainer>
            Email *
            <Input type="email" name="email" />
          </InputContainer>
          <InputContainer>
            Password *
            <Input type="password" name="password" />
          </InputContainer>
          <Button>Login</Button>
        </form>
        <AuthCTA
          title="Do you have an account?"
          cta="Create account"
          href="/signup"
        />
      </div>
    </Container>
  );
}

export default LoginForm;
