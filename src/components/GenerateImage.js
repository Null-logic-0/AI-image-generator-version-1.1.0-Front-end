import GeneratedImage from "./GeneratedImage.js";
import GenerateImageForm from "./GenerateImageForm.js";

function GenerateImage() {
  return (
    <div className="flex justify-center flex-col gap-5 w-full items-center">
      <div className="mt-[10rem]">
        <GeneratedImage />
      </div>
      <div className="fixed bottom-5 flex-col flex gap-4 items-center w-full max-w-[1000px]">
        <GenerateImageForm />
        <span className="text-gray-400">
          It can make mistakes. Check important info.
        </span>
      </div>
    </div>
  );
}

export default GenerateImage;
