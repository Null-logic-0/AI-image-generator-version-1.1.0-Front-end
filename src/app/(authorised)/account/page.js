import ChangePassword from "@/components/ChangePassword";
import UpdateProfile from "@/components/UpdateProfile";
import { getUser } from "@/lib/data-services";

async function AccountPage() {
  const { user } = await getUser();
  return (
    <>
      <div className="w-full mx-auto justify-center min-h-screen flex max-md:flex-col gap-8 items-center pb-8  px-4 max-sm:gap-4">
        <UpdateProfile user={user} />
        <ChangePassword />
      </div>
    </>
  );
}

export default AccountPage;
