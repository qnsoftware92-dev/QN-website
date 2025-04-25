import { Icon } from "@iconify/react/dist/iconify.js";
import video from "../assets/video/6.mp4";  

export default function Logistics() {
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
                  <Icon icon="mdi:account-multiple" className="text-2xl text-primary" />
                  <h3 className="text-xl font-semibold">User Roles</h3>
                </div>
                <p className="text-gray-600">Admin, dispatcher, driver and customer portals with role-based access</p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Icon icon="mdi:package-variant" className="text-2xl text-primary" />
                  <h3 className="text-xl font-semibold">Order Management</h3>
                </div>
                <p className="text-gray-600">Create, track and manage shipments with real-time status updates</p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Icon icon="mdi:truck" className="text-2xl text-primary" />
                  <h3 className="text-xl font-semibold">Fleet Management</h3>
                </div>
                <p className="text-gray-600">Track vehicles, manage drivers and optimize delivery routes</p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Icon icon="mdi:map-marker-path" className="text-2xl text-primary" />
                  <h3 className="text-xl font-semibold">Route Optimization</h3>
                </div>
                <p className="text-gray-600">AI-powered route planning to minimize delivery time and costs</p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Icon icon="mdi:warehouse" className="text-2xl text-primary" />
                  <h3 className="text-xl font-semibold">Warehouse Management</h3>
                </div>
                <p className="text-gray-600">Inventory tracking, stock alerts and warehouse operations</p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Icon icon="mdi:chart-box" className="text-2xl text-primary" />
                  <h3 className="text-xl font-semibold">Analytics & Reports</h3>
                </div>
                <p className="text-gray-600">Performance metrics, delivery analytics and custom reports</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-primary mb-4">Tech Stack</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold">Frontend & Mobile</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>React.js for web dashboard</li>
                  <li>React Native for driver app</li>
                  <li>TailwindCSS for styling</li>
                </ul>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold">Backend & Infrastructure</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Node.js with Express</li>
                  <li>PostgreSQL & Redis</li>
                  <li>Google Maps API integration</li>
                </ul>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold">APIs & Services</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Twilio (SMS updates)</li>
                  <li>Firebase (push notifications)</li>
                  <li>Stripe/Razorpay (payments)</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-primary mb-4">Key Workflows</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <Icon icon="mdi:truck-delivery" className="text-2xl text-primary" />
                  <h3 className="text-xl font-semibold">Delivery Process</h3>
                </div>
                <div className="flex flex-col gap-2 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Icon icon="mdi:arrow-right" className="text-lg" />
                    <p>Order received → Route planning</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon icon="mdi:arrow-right" className="text-lg" />
                    <p>Driver assignment → Pickup</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon icon="mdi:arrow-right" className="text-lg" />
                    <p>In transit → Real-time tracking</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon icon="mdi:arrow-right" className="text-lg" />
                    <p>Delivery → POD collection</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <Icon icon="mdi:view-dashboard" className="text-2xl text-primary" />
                  <h3 className="text-xl font-semibold">Admin Controls</h3>
                </div>
                <div className="flex flex-col gap-2 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Icon icon="mdi:arrow-right" className="text-lg" />
                    <p>Monitor fleet location</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon icon="mdi:arrow-right" className="text-lg" />
                    <p>Manage orders and routes</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon icon="mdi:arrow-right" className="text-lg" />
                    <p>Track delivery performance</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon icon="mdi:arrow-right" className="text-lg" />
                    <p>Generate reports and analytics</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

