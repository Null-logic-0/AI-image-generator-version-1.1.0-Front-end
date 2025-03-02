"use client";

import Button from "../Button.js";
import Container from "../Container.js";
import FormSubmit from "../FormSubmit.js";
import Input from "../Input.js";
import InputContainer from "../InputContainer.js";
import Label from "../Label.js";
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
    <Container className="px-4 py-12 max-w-[600px]">
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
          <div className="flex justify-center gap-4 items-center w-full">
            <InputContainer>
              <Label htmlFor="password">Password *</Label>
              <Input type="password" name="password" id="password" />
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
          {formState.success === false && (
            <p className="text-red-500 text-sm">{formState.message}</p>
          )}
          <FormSubmit>Signup</FormSubmit>
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
