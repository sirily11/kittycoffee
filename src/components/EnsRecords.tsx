const stats = [
  {
    id: 1,
    name: "个人DID",
    value: "qiwei.kittycoffee.eth",
    href: "https://app.ens.domains/qiwei.kittycoffee.eth",
  },
  {
    id: 2,
    name: "恋爱合约",
    value: "kittycoffee.eth",
    href: "https://app.ens.domains/kittycoffee.eth",
  },
  {
    id: 3,
    name: "分手权益 NFT",
    value: "rights.nft.kittycoffee.eth",
    href: "https://app.ens.domains/rights.nft.kittycoffee.eth",
  },
];

export default function EnsRecords() {
  return (
    <div className="bg-white py-24 sm:py-32 h-screen">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              DID
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              去中心化域名，用Web3技术记录着点点滴滴
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat) => (
              <a
                key={stat.id}
                className="flex flex-col bg-gray-400/5 p-8"
                href={stat.href}
              >
                <dt className="text-sm font-semibold leading-6 text-gray-600">
                  {stat.name}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                  {stat.value}
                </dd>
              </a>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
