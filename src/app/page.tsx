import { Button } from "../components/ui/button";
import { newsreaderItalic, newsreaderNormal } from "../lib/fonts";
import Image from "next/image";
import { BlogPosts } from "./components/posts";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between m-2 bg-transparent sm:grid grid-cols-3">

      <div className="flex flex-col justify-center p-8 gap-12 h-dvh w-full bg-cover bg-center bg-[url('/inverted-background.png')]">
        {/* Hero Pill, Text, and Images */}
        <div>
          <div className="flex flex-row items-center gap-3 outline outline-[0.5px] outline-white p-1 px-3 rounded-full w-[240px] bg-white/5">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <div className="text-white text-sm font-thin whitespace-normal break-words">
              on demand ordering available
            </div>
          </div>

          {/* Hero Text */}
          <div className={`${newsreaderNormal.className} text-white text-[36px] max-w-md my-6`}>
            club & company merch from the{" "}
            <span className={newsreaderItalic.className}>same</span> suppliers
            as
          </div>
          <Image
            src="/logos.png"
            alt="AF"
            width={300}
            height={100}
            className="select-none"
            draggable="false"
          />
        </div>


        <div className="flex flex-row gap-3 items-center">
          <Button className="max-w-xl">request order</Button>
        </div>

        {/* Lower bullets */}
        <div className="text-white absolute bottom-0 left-0 p-8">
          <div className="flex items-center gap-2 mb-4">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_760_510)">
                <path
                  d="M7.49999 15C11.603 15 15 11.5956 15 7.49999C15 3.39706 11.6103 0 7.50734 0C7.11763 0 6.92646 0.235294 6.92646 0.617646V3.46323C6.92646 3.78676 7.14705 4.03676 7.46323 4.03676C7.78676 4.03676 8.00737 3.78676 8.00737 3.46323V0.60294L7.49264 1.25C10.9779 1.25 13.7427 4.02941 13.7427 7.49999C13.7427 10.9706 10.9706 13.75 7.49999 13.75C4.02941 13.75 1.24264 10.9706 1.25 7.49999C1.25735 5.94852 1.80882 4.54411 2.73529 3.46323C2.95588 3.17647 2.97058 2.83088 2.72794 2.57353C2.48529 2.31617 2.08088 2.33823 1.80882 2.66176C0.691176 3.97059 0 5.66911 0 7.49999C0 11.5956 3.4044 15 7.49999 15ZM8.67643 8.55882C9.25733 7.94849 9.13972 7.13235 8.44114 6.64705L4.55146 3.92646C4.18382 3.66912 3.80147 4.05881 4.05881 4.41911L6.77205 8.30885C7.2647 9.00735 8.08086 9.13234 8.67643 8.55882Z"
                  fill="white"
                  fill-opacity="0.85"
                />
              </g>
              <defs>
                <clipPath id="clip0_760_510">
                  <rect width="15" height="15.0073" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <div className="text-sm">closes in 3 weeks</div>
          </div>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span className="text-sm">
                orders of 10+ pieces get custom merch design
              </span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-white rounded-full mt-1"></div>
              <span className="text-sm">
                starting at{" "}
                <span className={newsreaderItalic.className}>$20/piece</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="hidden sm:block sm:col-span-2 bg-black h-full bg-[url('/background.png')] bg-cover bg-center"></div>
    </div>
  );
}
