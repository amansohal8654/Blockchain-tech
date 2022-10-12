import Loader from './Loader'

function LimitOrders({limitOrders}) {
    console.log(limitOrders)
  return (
    <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
      <h3 className="text-lg font-medium leading-6 text-gray-900">Last 100 Limit Orders</h3>
      {limitOrders ? <div className="mt-8 flex flex-col">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Maker Asset
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Taker Rate
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Remaining Maker Amount
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Maker Rate
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Maker Balance
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Maker Allowance
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Making Amount
                    </th>
                    <th scope="col" className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Create Date Time
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {limitOrders?.map((order, idx) => (
                    <tr key={idx}>
                      <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-500 sm:pl-6">
                        {order?.data?.makerAsset}
                      </td>
                      <td className="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-900">
                        {order?.takerRate}
                      </td>
                      <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-900">{order?.remainingMakerAmount}</td>
                      <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{order?.makerRate}</td>
                      <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{order?.makerBalance}</td>
                      <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{order?.makerAllowance}</td>
                      <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{order?.data?.makingAmount}</td>
                      <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{order?.createDateTime}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>:
        <Loader />}
    </div>
  )
}

export default LimitOrders