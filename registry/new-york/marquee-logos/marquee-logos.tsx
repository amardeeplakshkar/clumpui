import Anthropic from "@/components/icons/anthropic";
import DeepSeek from "@/components/icons/deepseek";
import Gemini from "@/components/icons/gemini";
import MistralAI from "@/components/icons/mistral";
import Nextjs from "@/components/icons/nextjs";
import OpenAI from "@/components/icons/open-ai";
import { cn } from "@/lib/utils";
import { Marquee } from "@/registry/magicui/marquee";

const logos = [
  {
    name: "Microsoft",
    img: <Anthropic/>,
  },
  {
    name: "Apple",
    img: <Gemini/>,
  },
  {
    name: "Google",
    img: <OpenAI/>,
  },
  {
    name: "Facebook",
    img: DeepSeek,
  },
  {
    name: "LinkedIn",
    img: <MistralAI/>,
  },
  {
    name: "Twitter",
    img: <Nextjs/>,
  },
];

const Logo = ({ name, img }: { name: string; img: any }) => {
  return (
    <div className={cn("size-12 cursor-pointer bg-red-500")}>
      <img/>
    </div>
  );
};

export default function MarqueeLogos() {
  return (
    <div className="relative flex size-full flex-col items-center justify-center gap-4 overflow-hidden rounded-lg border bg-background py-20 md:shadow-xl">
      <Marquee className="[--gap:3rem]">
        {logos.map((logo, idx) => (
          <Logo key={idx} {...logo} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-linear-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-linear-to-l from-white dark:from-background"></div>
    </div>
  );
}
