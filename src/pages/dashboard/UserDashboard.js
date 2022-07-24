/* This example requires Tailwind CSS v2.0+ */
import React, { useContext, useState, useEffect } from "react";
import Transactions from "./Transactions";
import { GlobalContext } from "../../context/context";

/* This example requires Tailwind CSS v2.0+ */
const initialStats = [
  { name: "Total fund Donated", stat: "71,897 eth" },
  { name: "Total Creators Funded", stat: "7" }
];

export default function Example() {
  const { accounts, creatorData } = useContext(GlobalContext);
  const [stats, setStats] = useState(initialStats);

  useEffect(() => {
    const creatorD = creatorData.map((item) => {
      if (item.walletAddress == accounts[0]) {
        return item;
      }
    })[0];
    const stat = [
      { name: "Total fund Donated", stat: `${creatorD.totalFundsSent} ETH` },
      { name: "Total Creators Funded", stat: creatorD.totalCreatorsFundedCount }
    ];
    setStats(stat);
  }, []);
  return (
    <div>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {stats.map((item) => (
          <div key={item.name} className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">{item.name}</dt>
            <dd className="mt-1 text-5xl font-bold text-gray-900">{item.stat}</dd>
          </div>
        ))}
      </dl>

      <>
        <Transactions />
      </>
    </div>
  );
}
