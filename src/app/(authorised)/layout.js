import Logout from "@/components/AuthForm/Logout.js";
import NavMenu from "@/components/NavMenu.js";

function layout({ children }) {
  return (
    <div className="flex flex-col h-screen">
      <Logout />
      <div className="flex flex-1">
        <NavMenu />
        <main className="flex-1">
          <div className="flex justify-center items-center">{children}</div>
        </main>
      </div>
    </div>
  );
}

export default layout;
