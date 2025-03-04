import NavMenu from "@/components/NavMenu.js";
import { UiContextProvider } from "../store/ui-context.js";
import Profile from "@/components/Profile.js";
import ActionHeader from "@/components/ActionHeader.js";

function layout({ children }) {
  return (
    <UiContextProvider>
      <div>
        <ActionHeader />
        <div className="flex">
          <NavMenu>
            <Profile />
          </NavMenu>
          {children}
        </div>
      </div>
    </UiContextProvider>
  );
}

export default layout;
