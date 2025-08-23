
"use client"

import Image from "next/image";

export default function home() {
  return (
    <main>
      <div className="w-full h-full flex flex-col items-center">
        <div className="flex flex-col space-y-4">
          <div className="rounded-lg p-3 bg-zinc-100 dark:bg-zinc-950 w-[90vw] md:min-w-[48rem] md:w-[50vw] shadow-lg text-center">
            <h1 className="text-2xl font-bold">
              <span className="text-blue-500">Juicebox Finance</span> (In Development 🔨)
            </h1>
            <h2 className="text-gray-600 dark:text-gray-300">
              Estimated Completion: <span className="font-bold text-blue-500">End 2025</span>.
            </h2>
          </div>

          <div className="rounded-lg p-3 bg-zinc-100 dark:bg-zinc-950 w-[90vw] md:min-w-[48rem] md:w-[50vw] shadow-lg">
            <h1 className="text-lg font-semibold">
              Features Coming Soon:
            </h1>
            <h2 className="text-sm text-gray-600 dark:text-gray-300">
              🧮 (more) Financial calculators<br/>
              🧾 Bill-splitter<br/>
              👥 Social features<br/>
              🏆 Gamified achievements system<br/>
              ✨ UI Enhancements
            </h2>
          </div>

          <div className="rounded-lg p-3 bg-zinc-100 dark:bg-zinc-950 w-[90vw] md:min-w-[48rem] md:w-[50vw] shadow-lg">
            <Image alt="juiceboxFinancePage1" src="/images/projects/juiceboxFinance/juiceboxFinancePage1.png" width={1920} height={1080} className="w-full"/>
            <div className="h-2"></div>
            <h1 className="text-lg font-semibold">
              User Authentication.
            </h1>
            <h2 className="text-sm text-gray-600 dark:text-gray-300">
              Integrated <span className="font-bold text-blue-500">Amazon Cognito</span> user pools for a secure, scalable, and customisable <span className="font-bold text-blue-500">user authentication</span> experience, and identity pools for seamless <span className="font-bold text-blue-500">authorisation</span> and access control to private and protected resources.
            </h2>
          </div>

          <div className="rounded-lg p-3 bg-zinc-100 dark:bg-zinc-950 w-[90vw] md:min-w-[48rem] md:w-[50vw] shadow-lg">
            <Image alt="juiceboxFinancePage2" src="/images/projects/juiceboxFinance/juiceboxFinancePage2.png" width={1920} height={1080} className="w-full"/>
            <div className="h-2"></div>
            <h1 className="text-lg font-semibold">
              Cash Accounts / Tools / Settings.
            </h1>
            <h2 className="text-sm text-gray-600 dark:text-gray-300">
              Full-featured iOS application for managing personal cash accounts, budgets, and transaction histories.
              Configured <span className="font-bold text-blue-500">Amazon S3</span> and Amazon CloudFront to enable performant, secure <span className="font-bold text-blue-500">storage and delivery of profile pictures</span>.
              Designed and implemented a NoSQL data architecture using <span className="font-bold text-blue-500">Amazon DynamoDB</span> to support scalable storage and retrieval of financial data such as personal <span className="font-bold text-blue-500">cash accounts, budgets, and transaction histories</span>.

            </h2>
          </div>

          <div className="rounded-lg p-3 bg-zinc-100 dark:bg-zinc-950 w-[90vw] md:min-w-[48rem] md:w-[50vw] shadow-lg">
            <Image alt="juiceboxFinancePage3" src="/images/projects/juiceboxFinance/juiceboxFinancePage3.png" width={1920} height={1080} className="w-full"/>
            <div className="h-2"></div>
            <h1 className="text-lg font-semibold">
              Manage Budgets.
            </h1>
            <h2 className="text-sm text-gray-600 dark:text-gray-300">
              •	Set & Track Goals: Adjust <span className="font-bold text-blue-500">monthly budgets</span> per category with a <span className="font-bold text-blue-500">clear overview</span> of total expenses vs budget.<br/>
	            •	Visual Alerts: Get instant <span className="font-bold text-blue-500">feedback on overspending</span> with intuitive <span className="font-bold text-blue-500">colour-coded category cards</span> (green, yellow, orange, red).<br/>
	            •	Detailed Insights: Tap any category to <span className="font-bold text-blue-500">reveal past trends and expenditure</span> through interactive graphs.<br/>
            </h2>
          </div>

          <div className="rounded-lg p-3 bg-zinc-100 dark:bg-zinc-950 w-[90vw] md:min-w-[48rem] md:w-[50vw] shadow-lg">
            <Image alt="juiceboxFinancePage4" src="/images/projects/juiceboxFinance/juiceboxFinancePage4.png" width={1920} height={1080} className="w-full"/>
            <div className="h-2"></div>
            <h1 className="text-lg font-semibold">
              Manage Transactions.
            </h1>
            <h2 className="text-sm text-gray-600 dark:text-gray-300">
              •	Add Transactions Easily: <span className="font-bold text-blue-500">Log income or expenses</span> by selecting predefined categories and entering details in a user-friendly form.<br/>
              •	Account-Linked Tracking: Automatically <span className="font-bold text-blue-500">update cash account balance</span> by linking each transaction to a specific account.<br/>
              •	Insightful Visuals: <span className="font-bold text-blue-500">Analyse spending patterns</span> with dynamic pie charts that break down expenses by category and time period.<br/>
            </h2>
          </div>
        </div>
      </div>
    </main>
  );
}
