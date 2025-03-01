import Logout from "@/components/AuthForm/Logout.js";
import NavMenu from "@/components/NavMenu.js";

function layout({ children }) {
  return (
    <div className="flex">
      <NavMenu />
      {children}
    </div>
  );
}

export default layout;
