import Button from "./Button.js";
import Container from "./Container.js";
import Input from "./Input.js";
import DeleteAccount from "./DeleteAccount.js";
import ImagePicker from "./ImagePicker.js";
import { updateAccountData } from "@/lib/actions.js";

function UpdateProfile({ user }) {
  const userDefaultImage = user?.photo?.startsWith("http" || "https")
    ? user.photo
    : `/${user?.photo || "default.jpg"}`;
  return (
    <Container className="max-w-[600px] py-8">
      <form className="flex flex-col gap-8" action={updateAccountData}>
        <ImagePicker name="photo" defaultImage={userDefaultImage} />
        <Input
          type="text"
          name="name"
          defaultValue={user?.name || "user name"}
        />
        <Input
          type="email"
          disabled
          className="cursor-not-allowed text-gray-400"
          defaultValue={user?.email || "user@example.com"}
        />
        <div className="flex items-center gap-4 justify-end w-full">
          <Button className="max-w-[150px] bg-transparent border-2 border-[#25232C] text-[#E50000] hover:bg-red-200">
            Delete Account
          </Button>
          <Button className="max-w-[100px]">save</Button>
        </div>
      </form>
    </Container>
  );
}

export default UpdateProfile;
