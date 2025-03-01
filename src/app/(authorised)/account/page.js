import ChangePassword from "@/components/ChangePassword";
import DeleteAccount from "@/components/DeleteAccount";
import UpdateProfile from "@/components/UpdateProfile";

function AccountPage() {
  return (
    <div className="w-full mx-auto justify-center min-h-screen flex flex-wrap gap-8 items-center">
      <UpdateProfile />
      <ChangePassword />
    </div>
  );
}

export default AccountPage;
