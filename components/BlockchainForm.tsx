import { sampleBlockchainData } from "../utils/sample-data";
import { useState } from "react";

function BlockchainForm({ setOpen }) {
  const [selectedBlockchain, setSelectedBlockchain] = useState(sampleBlockchainData[0]);

  const savedBlockchainToDatabase = (event : any) => {
    console.log(event.target.value);
    const blockchainData = sampleBlockchainData.find((value) => { return value.id == event.target.value})
    console.log(blockchainData);
  };

  return (
    <>
      <label
        htmlFor="location"
        className="block text-sm font-medium text-gray-700"
      >
        Blockchain Name
      </label>
      <select
        id="blockchain"
        name="blockchain"
        onChange={(event) => savedBlockchainToDatabase(event)}
        className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        defaultValue={sampleBlockchainData[0].id}
      >
        {sampleBlockchainData.map((blockchain) => (
          <option className="cursor-pointer" value={blockchain.id}>
            {blockchain?.name}
          </option>
        ))}
      </select>
      <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
        <button
          type="button"
          className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-2 sm:text-sm"
          onClick={() => setOpen(false)}
        >
          Save
        </button>
        <button
          type="button"
          className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-1 sm:mt-0 sm:text-sm"
          onClick={() => setOpen(false)}
        >
          Cancel
        </button>
      </div>
    </>
  );
}

export default BlockchainForm;
