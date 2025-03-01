import { RiLogoutBoxRLine } from "react-icons/ri";

function Logout() {
  return (
    <form className="flex justify-end w-full">
      <button className="p-4 flex items-center justify-center cursor-pointer">
        <RiLogoutBoxRLine className="text-3xl" />
      </button>
    </form>
  );
}

export default Logout;
