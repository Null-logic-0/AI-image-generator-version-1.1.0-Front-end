import Button from "./Button.js";
import Container from "./Container.js";
import Input from "./Input.js";
import InputContainer from "./InputContainer.js";
import Label from "./Label.js";

function ChangePassword() {
  return (
    <Container className="max-w-[600px] py-8">
      <h3 className="text-2xl text-white font-bold mb-7">Change Password</h3>
      <form className="flex flex-col gap-8">
        <InputContainer>
          <Label htmlFor="passwordCurrent">Current Password *</Label>
          <Input type="password" name="passwordCurrent" id="passwordCurrent" />
        </InputContainer>
        <div className="flex items-end gap-4">
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
        <div className="flex justify-end w-full">
          <Button className="max-w-[200px]">Change password</Button>
        </div>
      </form>
    </Container>
  );
}

export default ChangePassword;
