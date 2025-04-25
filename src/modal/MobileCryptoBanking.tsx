
import { Icon } from "@iconify/react";  
import video from "../assets/video/2.mp4";

export default function MobileCryptoBanking() {
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
                  <h3 className="text-xl font-semibold">Secure Authentication</h3>
                </div>
                <p className="text-gray-600">Biometric login, 2FA with authenticator apps, device binding and wallet signatures</p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Icon icon="ph:wallet-bold" className="text-2xl text-primary" />
                  <h3 className="text-xl font-semibold">Multi-Crypto Wallet</h3>
                </div>
                <p className="text-gray-600">Support for major coins and multiple chains with cold/hot wallet integrations</p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Icon icon="mdi:bank-transfer" className="text-2xl text-primary" />
                  <h3 className="text-xl font-semibold">Fiat On/Off Ramp</h3>
                </div>
                <p className="text-gray-600">Buy/sell crypto with fiat currencies through integrated payment providers</p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Icon icon="mdi:swap-horizontal" className="text-2xl text-primary" />
                  <h3 className="text-xl font-semibold">Built-in Exchange</h3>
                </div>
                <p className="text-gray-600">Direct token swaps with DEX integration and competitive rates</p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Icon icon="mdi:chart-line" className="text-2xl text-primary" />
                  <h3 className="text-xl font-semibold">Portfolio Tracking</h3>
                </div>
                <p className="text-gray-600">Real-time balances, historical performance, and price alerts</p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Icon icon="mdi:credit-card" className="text-2xl text-primary" />
                  <h3 className="text-xl font-semibold">Crypto Card</h3>
                </div>
                <p className="text-gray-600">Virtual and physical debit cards for spending crypto globally</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-primary mb-4">Tech Stack</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold">Mobile App</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>React Native</li>
                  <li>Web3.js / Ethers.js</li>
                  <li>Biometric authentication</li>
                </ul>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold">Backend</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Node.js with NestJS</li>
                  <li>MongoDB / PostgreSQL</li>
                  <li>Blockchain node providers</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-primary mb-4">Security & Compliance</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center justify-center p-4 border-2 border-primary rounded-lg">
                <span className="font-semibold">End-to-end Encryption</span>
              </div>
              <div className="flex items-center justify-center p-4 border-2 border-primary rounded-lg">
                <span className="font-semibold">KYC/AML</span>
              </div>
              <div className="flex items-center justify-center p-4 border-2 border-primary rounded-lg">
                <span className="font-semibold">GDPR</span>
              </div>
              <div className="flex items-center justify-center p-4 border-2 border-primary rounded-lg">
                <span className="font-semibold">Regulatory Compliance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

