"use client";
import { useActionState } from "react";
import Spinner from "../Spinner.js";
import Video from "./Video.js";
import GenerateVideoForm from "./GenerateVideoForm.js";
import { sendVideoRequest } from "@/lib/actions.js";

function GenerateVideo() {
  async function submitAction(_, formData) {
    const prompt = formData.get("prompt")?.trim();
    if (!prompt) return { result: "error", message: "Prompt is required" };

    const options = {
      resolution: formData.get("resolution"),
    };

    try {
      const { success, videoUrl, message } = await sendVideoRequest(
        prompt,
        options
      );
      if (!success) throw new Error(message || "Video generation failed.");

      return {
        result: "success",
        videoUrl,
        prompt,
      };
    } catch (error) {
      console.error("Error in submitAction:", error.message);
      return { result: "error", message: error.message };
    }
  }
  const [formState, action, isPending] = useActionState(submitAction, {
    result: null,
  });

  return (
    <div className="flex flex-col items-center gap-14 ">
      {isPending && <Spinner />}
      <div className="mt-[10px] px-4">
        {!formState.result && !isPending && (
          <p className="text-gray-400 p-8 text-center text-xl">
            Press &quot;Generate&quot; to generate a video based on your prompt.
          </p>
        )}
        {formState.result === "success" && <Video src={formState.videoUrl} />}
        {formState.result === "error" && (
          <p className="text-red-200 text-center">{formState.message}</p>
        )}
      </div>
      <div className="flex-col flex gap-4 items-center w-full  max-w-[1000px] pb-4  px-4">
        <GenerateVideoForm action={action} disable={isPending} />
        <span className="text-gray-400 text-center text-sm">
          It can make mistakes. Check important info.
        </span>
      </div>
    </div>
  );
}

export default GenerateVideo;
