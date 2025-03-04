import { deleteAccount } from "@/lib/actions";
import Button from "./Button";

function DeleteAccount() {
  return (
    <form action={deleteAccount}>
      <Button className="px-2">Delete Account</Button>
    </form>
  );
}

export default DeleteAccount;
