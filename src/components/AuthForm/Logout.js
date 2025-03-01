import { RiLogoutBoxRLine } from "react-icons/ri";

function Logout() {
  return (
    <form>
      <button className=" cursor-pointer">
        <RiLogoutBoxRLine className="text-2xl" />
      </button>
    </form>
  );
}

export default Logout;
