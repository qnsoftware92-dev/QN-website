import { Icon } from "@iconify/react";
import video from "../assets/video/3.mp4";

export default function FintechWebApp() {
  return (
    <div className="flex flex-col items-center w-full max-w-screen-lg mx-auto mt-10 md:mt-16 px-4 pb-10 lg:px-0">
      <div className="">
        <div className="" style={{ aspectRatio: "1.333" }}>
          <div className="">
            <video 
              src={video}
              loop
              muted
              autoPlay
              className="w-full h-full object-cover rounded-lg"
              controls={false}
            />
          </div>
        </div>
      </div>

      <div className="content-block-container">
      <div className="flex flex-col gap-8 px-4 md:px-0 mt-10">
        <div>
          <h2 className="text-3xl font-bold text-primary mb-4">Core Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Icon icon="material-symbols:security" className="text-2xl text-primary" />
                <h3 className="text-xl font-semibold">Security & Auth</h3>
              </div>
              <p className="text-gray-600">Two-factor authentication, biometric login, data encryption and secure session management</p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Icon icon="mdi:view-dashboard" className="text-2xl text-primary" />
                <h3 className="text-xl font-semibold">User Dashboard</h3>
              </div>
              <p className="text-gray-600">Financial status overview, account balances, transaction history and visual insights</p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Icon icon="mdi:bank-transfer" className="text-2xl text-primary" />
                <h3 className="text-xl font-semibold">Transactions</h3>
              </div>
              <p className="text-gray-600">Send/receive money, link bank accounts, schedule payments and QR code payments</p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Icon icon="mdi:chart-line" className="text-2xl text-primary" />
                <h3 className="text-xl font-semibold">Analytics</h3>
              </div>
              <p className="text-gray-600">Expense tracking, spending categories, budget planning and AI-driven insights</p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Icon icon="mdi:bank" className="text-2xl text-primary" />
                <h3 className="text-xl font-semibold">Loans & Credit</h3>
              </div>
              <p className="text-gray-600">Personal/business loans, credit score monitoring and EMI management</p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Icon icon="mdi:bell" className="text-2xl text-primary" />
                <h3 className="text-xl font-semibold">Notifications</h3>
              </div>
              <p className="text-gray-600">Payment reminders, fraud alerts and spending limit notifications</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-primary mb-4">Tech Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold">Frontend</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>React.js with TypeScript</li>
                <li>TailwindCSS for styling</li>
                <li>Chart.js for data visualization</li>
              </ul>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold">Backend</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Node.js with Express</li>
                <li>PostgreSQL database</li>
                <li>Redis for caching</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-primary mb-4">Security Compliance</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center justify-center p-4 border-2 border-primary rounded-lg">
              <span className="font-semibold">PCI-DSS</span>
            </div>
            <div className="flex items-center justify-center p-4 border-2 border-primary rounded-lg">
              <span className="font-semibold">GDPR</span>
            </div>
            <div className="flex items-center justify-center p-4 border-2 border-primary rounded-lg">
              <span className="font-semibold">SOC 2</span>
            </div>
            <div className="flex items-center justify-center p-4 border-2 border-primary rounded-lg">
              <span className="font-semibold">KYC/AML</span>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

