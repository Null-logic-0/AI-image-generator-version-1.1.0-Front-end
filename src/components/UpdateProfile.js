import Image from "next/image.js";
import Button from "./Button.js";
import Container from "./Container.js";
import Input from "./Input.js";
import defaultImage from "../../public/default.jpg";
import DeleteAccount from "./DeleteAccount.js";

function UpdateProfile() {
  return (
    <Container className="max-w-[600px] py-8">
      <Image
        src={defaultImage}
        alt={`User-image`}
        width={120}
        height={120}
        className="rounded-sm"
      />
      <form className="flex flex-col gap-8">
        <Input type="text" name="name" id="name" defaultValue="User name" />
        <Input
          type="email"
          name="email"
          id="email"
          disabled
          className="cursor-not-allowed text-gray-400"
          defaultValue="user@example.com"
        />
        <div className="flex items-center gap-4 justify-end w-full">
          <Button className="max-w-[150px] bg-transparent border-2 border-[#25232C] text-[#E50000]">
            Delete Account
          </Button>
          <Button className="max-w-[100px]">save</Button>
        </div>
      </form>
    </Container>
  );
}

export default UpdateProfile;
