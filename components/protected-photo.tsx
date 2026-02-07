import { useState } from "react";
import MyButton from "./my-button";
import { ImageZoom } from "./ui/shadcn-io/image-zoom";

interface Props {
  src: string;
  alt: string;
  password: string;
}

export default function ProtectedPhoto({ src, alt, password: correctPassword }: Props) {
  const [password, setPassword] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsUnlocked(true);
      setPassword("");
    } else {
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="relative w-full overflow-hidden">
        <ImageZoom>
            <img
          src={src}
          alt={alt}
          className="w-full h-auto transition-all duration-500"
          style={{ filter: isUnlocked ? "blur(0px)" : "blur(10px)" }}
        />
        </ImageZoom>

        {/* Overlay form in the center */}
        {!isUnlocked && (
          <form
            onSubmit={handleSubmit}
            className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4"
          >
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password to view this photo"
              className="px-4 py-3 text-[var(--colour-bodytext-1)] text-sm border w-[50%] rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <div className="mb-1"></div>
            <button
              type="submit"
              className="text-sm cursor-pointer inline-block w-[50%] text-center bg-transparent hover:bg-[var(--main-blue)] hover:text-white border-[var(--main-blue)] border-1 transition-colors rounded-full text-[var(--main-blue)] font-medium py-[10px] px-4"
            >
                View photo
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
