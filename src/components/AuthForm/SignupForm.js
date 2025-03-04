"use client";
import Container from "../Container.js";
import FormSubmit from "../FormSubmit.js";
import Input from "../Input.js";
import InputContainer from "../InputContainer.js";
import Label from "../Label.js";
import ValidationError from "../ValidationError.js";
import AuthCTA from "./AuthCTA.js";
import AuthHeader from "./AuthHeader.js";
import { signup } from "@/lib/actions.js";
import { useActionState } from "react";

function SignupForm() {
  const [formState, formAction] = useActionState(signup, {
    success: true,
    message: "",
  });
  return (
    <>
      <Container className="px-2 py-4 max-w-[400px]">
        <div className="flex flex-col gap-6">
          <AuthHeader title="Create an account." />
          <form className="flex flex-col gap-8" action={formAction}>
            <InputContainer>
              <Label htmlFor="name">Name *</Label>
              <Input type="text" name="name" id="name" />
            </InputContainer>
            <InputContainer>
              <Label htmlFor="email">Email *</Label>
              <Input type="email" name="email" id="email" />
            </InputContainer>
            <div className="flex justify-center gap-4 items-center max-sm:flex-col">
              <InputContainer>
                <Label htmlFor="password">Password *</Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  className="w-ull"
                />
              </InputContainer>
              <InputContainer>
                <Label htmlFor="passwordConfirm">Confirm Password *</Label>
                <Input
                  type="password"
                  name="passwordConfirm"
                  id="passwordConfirm"
                />
              </InputContainer>
            </div>

            <FormSubmit>Signup</FormSubmit>
          </form>
          <AuthCTA
            title="Already have an account?"
            cta="Login into your account"
            href="/login"
          />
        </div>
      </Container>
      <ValidationError error={formState.message} />
    </>
  );
}

export default SignupForm;
