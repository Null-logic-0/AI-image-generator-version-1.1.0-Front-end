import { twMerge } from "tailwind-merge";

function Video({ src, className }) {
  return (
    <video
      controls
      className={twMerge(
        "max-w-[800px] max-h-[800px] w-full h-full rounded-xl",
        className
      )}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

export default Video;
