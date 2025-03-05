import Image from "next/image";
import notFoundImage from "../../public/not-found.png";

function NotFound() {
  return (
    <div className="mx-auto w-full justify-center flex items-center min-h-screen">
      <div className="flex  flex-col gap-2 p-4">
        <Image
          src={"/not-found.png"}
          alt="icon"
          className="object-fill"
          width={350}
          quality={100}
          height={350}
        />
        <h1 className="text-center text-3xl text-gray-400 leading-10">
          Page Not Found
        </h1>
      </div>
    </div>
  );
}

export default NotFound;
