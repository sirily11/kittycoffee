import DropdownButton from "@/components/Dropdown";
import EnsRecords from "@/components/EnsRecords";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Image from "next/image";

export const metadata = {
  title: "KittyCoffee",
  description: "KittyCoffee, 我们的Web3.0小屋",
  icons: {
    icon: "/kitty.png",
  },
  openGraph: {
    type: "website",
    url: "https://kittycoffee.vercel.app",
    title: "KittyCoffee",
    description: "KittyCoffee, 我们的Web3.0小屋",
    images: [
      {
        url: "https://s3.kittycoffee.love/kittycoffee-logo.jpg",
        width: 2000,
        height: 2000,
        alt: "KittyCoffee",
      },
    ],
  },
};

export default function Example() {
  return (
    <div className="bg-white">
      <div className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
            <svg
              className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>

            <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mt-20">
                  KittyCoffee <br className="hidden lg:inline" />
                  我们的Web3.0小屋
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  在这里，我们用Web3.0技术，记录着我们恋爱生活的点点滴滴。
                  从恋爱合约、DID、到最终的元宇宙应用。愿此刻的梦，
                  能够成为未来的现实。
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <div className="ml-auto mr-0">
                    <DropdownButton />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <Image
            className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
            src="/kitty-bg2.jpg"
            alt=""
            width={2000}
            height={2000}
          />
        </div>
      </div>
      <EnsRecords />
    </div>
  );
}
