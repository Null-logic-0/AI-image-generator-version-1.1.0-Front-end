import Button from "../Button.js";
import Container from "../Container.js";
import Input from "../Input.js";
import InputContainer from "../InputContainer.js";
import AuthCTA from "./AuthCTA.js";
import AuthHeader from "./AuthHeader.js";

function SignupForm() {
  return (
    <Container className="px-4 py-12 max-w-[600px]">
      <div className="flex flex-col gap-6">
        <AuthHeader title="Create an account." />
        <form className="flex flex-col gap-8">
          <InputContainer>
            Name *
            <Input type="text" name="name" />
          </InputContainer>
          <InputContainer>
            Email *
            <Input type="email" name="email" />
          </InputContainer>
          <div className="flex justify-center gap-4 items-center w-full">
            <InputContainer>
              Password *
              <Input type="password" name="password" />
            </InputContainer>
            <InputContainer>
              Confirm Password *
              <Input type="password" name="passwordConfirm" />
            </InputContainer>
          </div>
          <Button>Signup</Button>
        </form>
        <AuthCTA
          title="Already have an account?"
          cta="Login into your account"
          href="/login"
        />
      </div>
    </Container>
  );
}

export default SignupForm;
