"use client";
import { useActionState } from "react";
import Container from "../Container.js";
import FormSubmit from "../FormSubmit.js";
import Input from "../Input.js";
import InputContainer from "../InputContainer.js";
import Label from "../Label.js";
import AuthCTA from "./AuthCTA.js";
import AuthHeader from "./AuthHeader.js";
import { login } from "@/lib/actions.js";
import ValidationError from "../ValidationError.js";

function LoginForm() {
  const [formState, formAction] = useActionState(login, {
    success: true,
    message: "",
  });
  return (
    <>
      <Container className="px-2 py-4 max-w-[400px]">
        <div className="flex flex-col gap-6">
          <AuthHeader title="Welcome to SynthArt" />
          <form className="flex flex-col gap-8" action={formAction}>
            <InputContainer>
              <Label htmlFor="email">Email *</Label>
              <Input type="email" name="email" id="email" />
            </InputContainer>
            <InputContainer>
              <Label htmlFor="password">Password *</Label>
              <Input type="password" name="password" id="password" />
            </InputContainer>

            <FormSubmit>Login</FormSubmit>
          </form>
          <AuthCTA
            title="Do you have an account?"
            cta="Create account"
            href="/signup"
          />
        </div>
      </Container>
      <ValidationError error={formState.message} />
    </>
  );
}

export default LoginForm;
