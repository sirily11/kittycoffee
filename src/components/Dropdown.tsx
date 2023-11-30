"use client";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface DropdownItem {
  name: string;
  href: string;
  description: string;
}

export default function Dropdown() {
  const items: DropdownItem[] = [
    {
      name: "KittyCoffee 恋爱合约",
      href: "https://etherscan.io/address/0x8942927b2087abBd4B92629C78ed5FCF8dE3D984",
      description: "智能合约，记载着最真诚的表白～",
    },
    {
      name: "KittyCoffee DID",
      href: "https://app.ens.domains/kittycoffee.eth",
      description: "DID, 绑定着我们的恋爱合约, 述说着我们的故事～",
    },
    {
      name: "分手权益NFT",
      href: "https://etherscan.io/address/0x5A4987DfeCedfB862Dba88A72CD491035dA6416e",
      description:
        "分手权益NFT,每次分手后,只有被分手的人能够分手,同时分手权益自动转移到被分手对象手上。",
    },
    {
      name: "对她许下的承诺",
      href: "https://opensea.io/assets/ethereum/0x9ebec3e9e8fb474f4d7f50f6f9c8057e65d5f9f2/1",
      description: "NFT, 记载着对她的承诺～",
    },
  ];

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          查看我们的链上资产
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-80 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {items.map((item, index) => (
              <div key={item.name}>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href={item.href}
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      <p className="tex font-bold">{item.name}</p>
                      <p>{item.description}</p>
                    </a>
                  )}
                </Menu.Item>
              </div>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
