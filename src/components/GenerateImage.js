"use client";
import { sendImageRequest } from "@/lib/data-services.js";
import GeneratedImage from "./GeneratedImage.js";
import GenerateImageForm from "./GenerateImageForm.js";
import { useActionState } from "react";
import Spinner from "./Spinner.js";

function GenerateImage() {
  async function submitAction(_, formData) {
    const prompt = formData.get("prompt");
    const options = {
      quality: formData.get("quality"),
      aspect_ratio: formData.get("aspectRatio"),
      format: formData.get("format"),
    };

    try {
      const base64Image = await sendImageRequest(prompt, options);
      const blob = await fetch(base64Image).then((res) => res.blob());
      const imageUrl = URL.createObjectURL(blob);

      return { result: "success", imageUrl, prompt };
    } catch (error) {
      return { result: "error", message: error.message };
    }
  }

  const [formState, action, isPending] = useActionState(submitAction, {
    result: null,
  });

  return (
    <div className="flex flex-col items-center gap-5 ">
      {isPending && <Spinner />}
      <div className="mt-[10rem]">
        {!formState.result && !isPending && (
          <p className="text-gray-400 p-8 text-center text-xl">
            Press &quot;Generate&quot; to generate an image based on your
            prompt.
          </p>
        )}
        {formState.result === "success" && (
          <GeneratedImage
            image={formState.imageUrl}
            alt={formState.prompt || "Generated Image"}
          />
        )}
        {formState.result === "error" && (
          <p className="text-red-200 text-center">{formState.message}</p>
        )}
      </div>
      <div className="flex-col flex gap-4 items-center w-full  max-w-[1000px]  fixed bottom-5 px-4">
        <GenerateImageForm action={action} disable={isPending} />
        <span className="text-gray-400 text-center text-sm">
          It can make mistakes. Check important info.
        </span>
      </div>
    </div>
  );
}

export default GenerateImage;
