import Logout from "./AuthForm/Logout.js";
import NavMenuButton from "./NavMenuButton.js";

function ActionHeader() {
  return (
    <div className="flex justify-between  w-full p-4">
      <NavMenuButton />
      <Logout />
    </div>
  );
}

export default ActionHeader;
