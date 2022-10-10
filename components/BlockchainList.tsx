import { sampleBlockchainData } from "../utils/sample-data";
import Link from 'next/link'
const BlockchainList = () => {
  return (
    <>
      <ul
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 mt-8"
      >
        {sampleBlockchainData.map((Blockchain) => (
          <Link href = {`/${Blockchain.id}`}>
            <li
              key={Blockchain.id}
              className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow cursor-pointer"
            >
              <div className="flex flex-1 flex-col p-8">
                <img
                  className="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
                  src={Blockchain.imageUrl}
                  alt=""
                />
                <h3 className="mt-6 text-sm font-medium text-gray-900">
                  {Blockchain.name}
                </h3>
                <dl className="mt-1 flex flex-grow flex-col justify-between">
                  <dd className="mt-3">
                    <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                      {Blockchain.id}
                    </span>
                  </dd>
                </dl>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
};
export default BlockchainList;
