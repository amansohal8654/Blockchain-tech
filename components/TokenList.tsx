import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'
import TokenInfo from './TokenInfo';
import Loader from './Loader'

const TokenList = ({tokenData}) => {
  console.log(tokenData);
    const [open, setOpen] = useState(false)
    const [infoToken, setInfoToken] = useState();

    const handelTokenInfoSlider = (tokenKey: string) => {
        setInfoToken(tokenData?.tokens[tokenKey])
        setOpen(true)
    }

  return (
    <>
    <TokenInfo open={open} setOpen={setOpen} infoToken={infoToken}/>
    {tokenData ? <div className="p-8">
      <h2 className="text-sm font-medium text-gray-500 ">Token List</h2>
      <ul
        role="list"
        className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4"
      >
        {Object.entries(tokenData?.tokens).map(([key, token] : any) => (
          <li
            key={key}
            className="col-span-1 flex rounded-md shadow-sm"
          >
            <div
              className="flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md"
            >
              <img
                  src={token.logoURI}
                  alt=""
                />
            </div>
            <div onClick={() => handelTokenInfoSlider(key)} className="cursor-pointer flex flex-1 items-center justify-between truncate rounded-r-md border-t border-r border-b border-gray-200 bg-white">
              <div className="flex-1 truncate px-4 py-2 text-sm">
                <div
                  className="font-medium text-gray-900 hover:text-gray-600"
                >
                  {token.name}
                </div>
                <p className="text-gray-500">{token?.address} Members</p>
              </div>
              <div className="flex-shrink-0 pr-2">
                <button
                  type="button"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white bg-transparent text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="sr-only">Open options</span>
                  <EllipsisVerticalIcon
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>
            
          </li>
        ))}
      </ul>
    </div> :
        <Loader />
    }
  </>
  );
};

export default TokenList;

