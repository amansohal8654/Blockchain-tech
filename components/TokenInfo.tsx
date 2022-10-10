import { Fragment, useState, useEffect, useCallback } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { HeartIcon, XMarkIcon } from "@heroicons/react/24/outline";
import axios from "axios";

export default function TokenInfo({ open, setOpen, infoToken }) {
  const [limitOrder, setLimitOrder] = useState([]);

  useEffect(() => {
    getLimitOrder();
  }, [infoToken]);

  const getLimitOrder = useCallback(async () => {
    try {
      const limitOrderData = await axios.get(
        `https://limit-orders.1inch.io/v2.0/1/limit-order/address/${infoToken?.address}?page=1&limit=100`
      );
      setLimitOrder(limitOrderData?.data);
      console.log(limitOrderData?.data);
    } catch (err) {
      console.log(err);
    }
  }, [infoToken]);
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-full">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={() => setOpen(false)}
                      >
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="h-full overflow-y-auto bg-white p-8">
                    <div className="space-y-6 pb-16">
                      <div>
                        <div className="aspect-w-4 aspect-h-4 block w-full overflow-hidden rounded-lg">
                          <img
                            src={infoToken?.logoURI}
                            alt=""
                            className="object-cover"
                          />
                        </div>
                        <div className="mt-4 flex items-start justify-between">
                          <button
                            type="button"
                            className="ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          >
                            <HeartIcon className="h-6 w-6" aria-hidden="true" />
                            <span className="sr-only">Favorite</span>
                          </button>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">
                          Information
                        </h3>
                        <dl className="mt-2 divide-y divide-gray-200 border-t border-b border-gray-200">
                          <div className="flex justify-between py-3 text-sm font-medium">
                            <dt className="text-gray-500 pr-3">Address</dt>
                            <dd className="text-gray-900">
                              {infoToken?.address}
                            </dd>
                          </div>
                          <div className="flex justify-between py-3 text-sm font-medium">
                            <dt className="text-gray-500">Decimals</dt>
                            <dd className="text-gray-900">
                              {infoToken?.decimals}
                            </dd>
                          </div>
                          <div className="flex justify-between py-3 text-sm font-medium">
                            <dt className="text-gray-500 pr-3">logoURI</dt>
                            <dd className="text-gray-900">
                              {infoToken?.logoURI}
                            </dd>
                          </div>
                          <div className="flex justify-between py-3 text-sm font-medium">
                            <dt className="text-gray-500">name</dt>
                            <dd className="text-gray-900">{infoToken?.name}</dd>
                          </div>
                          <div className="flex justify-between py-3 text-sm font-medium">
                            <dt className="text-gray-500">symbol</dt>
                            <dd className="text-gray-900">
                              {infoToken?.symbol}
                            </dd>
                          </div>
                          <div className="flex justify-between py-3 text-sm font-medium">
                            <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                              {infoToken?.tags.map((value: string) => value)}
                            </span>
                          </div>
                        </dl>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">
                          limit orders
                        </h3>
                        {limitOrder?.length > 0 ? (
                          limitOrder?.map((value: any) => {
                            <p>{value}</p>;
                          })) : (
                            <p>Limit order Not Found</p>
                          ) 
                        }
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
