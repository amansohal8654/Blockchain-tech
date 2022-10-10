import React, { ReactNode, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { PlusIcon } from "@heroicons/react/20/solid";
import Model from "./Model"
import BlockchainForm from './BlockchainForm'

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => {
  const [open, setOpen] = useState(false)
return (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Model title="Add Blockchain To Database"  open = { open } setOpen={setOpen}>
      <BlockchainForm setOpen={setOpen}/>
    </Model>
    <header>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="flex flex-shrink-0 items-center">
              <img
                className="block h-8 w-auto lg:hidden"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              />
              <img
                className="hidden h-8 w-auto lg:block"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              />
            </div>
            <div className="ml-6 flex items-center space-x-4">
              <Link href='/'>
                Blockchain Tech
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <button
                onClick={() => setOpen(true)}
                type="button"
                className="relative inline-flex items-center rounded-md border border-transparent bg-indigo-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                <span>Add Blockchain</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
    {children}
  </div>
)
};

export default Layout;
