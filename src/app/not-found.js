import Image from "next/image";
import notFoundImage from "../../public/not-found.png";

function NotFound() {
  return (
    <div className="mx-auto w-full justify-center flex items-center min-h-screen">
      <div className="flex  flex-col gap-8">
        <Image src={notFoundImage} alt="icon" className="object-fill" />
        <h1 className="text-center text-2xl text-gray-400 leading-10">
          404 ERORR ⚠️
          <br />
          Page Not Found
        </h1>
      </div>
    </div>
  );
}

export default NotFound;
