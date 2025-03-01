import Image from "next/image";
import Logo from "../../../public/logo.png";

function AuthHeader({ title }) {
  return (
    <div className="flex items-center justify-center">
      <Image src={Logo} alt="logo" width={50} height={50} />
      <h1 className="text-2xl font-bold text-white">{title}</h1>
    </div>
  );
}

export default AuthHeader;
