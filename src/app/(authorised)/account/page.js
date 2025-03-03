import ChangePassword from "@/components/ChangePassword";
import UpdateProfile from "@/components/UpdateProfile";
import { getUser } from "@/lib/data-services";

async function AccountPage() {
  const { user } = await getUser();
  return (
    <div className="w-full mx-auto justify-center min-h-screen flex flex-wrap gap-8 items-center">
      <UpdateProfile user={user} />
      <ChangePassword />
    </div>
  );
}

export default AccountPage;
