"use client";
import Button from "./Button.js";
import Container from "./Container.js";
import Input from "./Input.js";
import DeleteAccount from "./DeleteAccount.js";
import ImagePicker from "./ImagePicker.js";
import { updateAccountData } from "@/lib/actions.js";
import Modal from "./Modal.js";
import { useUIContext } from "@/app/store/ui-context.js";
import FormSubmit from "./FormSubmit.js";

function UpdateProfile({ user }) {
  const { handleToggleModal } = useUIContext();
  const userDefaultImage = user?.photo?.startsWith("http" || "https")
    ? user.photo
    : `/${user?.photo || "default.jpg"}`;
  return (
    <>
      <Container className="max-w-[500px] py-8">
        <form className="flex flex-col gap-6" action={updateAccountData}>
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
            <Button
              onClick={handleToggleModal}
              className="max-w-[150px] bg-transparent border-2 border-[#25232C] text-[#E50000] hover:bg-red-200"
            >
              Delete Account
            </Button>
            <FormSubmit className="max-w-[100px]">save</FormSubmit>
          </div>
        </form>
      </Container>
      <Modal>
        <h3 className="text-center text-gray-400 font-semibold text-xl ">
          Do you want to Delete account?
        </h3>
        <div className="flex justify-end gap-2 items-center">
          <Button
            onClick={handleToggleModal}
            className="max-w-[100px] bg-transparent hover:bg-transparent text-gray-400 border-gray-600 border-2"
          >
            Cancel
          </Button>
          <DeleteAccount />
        </div>
      </Modal>
    </>
  );
}

export default UpdateProfile;
