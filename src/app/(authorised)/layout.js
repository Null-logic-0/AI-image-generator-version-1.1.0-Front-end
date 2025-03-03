import Logout from "@/components/AuthForm/Logout.js";
import NavMenu from "@/components/NavMenu.js";
import NavMenuButton from "@/components/NavMenuButton";
import { ToggleSideBarProvider } from "../store/SideBar-context.js";
import Profile from "@/components/Profile.js";
import ActionHeader from "@/components/ActionHeader.js";

function layout({ children }) {
  return (
    <ToggleSideBarProvider>
      <div className="flex flex-col">
        <ActionHeader />
        <div className="flex">
          <NavMenu>
            <Profile />
          </NavMenu>
          {children}
        </div>
      </div>
    </ToggleSideBarProvider>
  );
}

export default layout;
