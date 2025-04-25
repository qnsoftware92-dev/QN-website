
import { Icon } from "@iconify/react";  
import video from "../assets/video/5.mp4";

export default function RealState() {
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
                  <Icon icon="mdi:account-circle" className="text-2xl text-primary" />
                  <h3 className="text-xl font-semibold">User Authentication</h3>
                </div>
                <p className="text-gray-600">Secure login, social auth, and role-based access control</p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Icon icon="mdi:shopping-outline" className="text-2xl text-primary" />
                  <h3 className="text-xl font-semibold">Product Catalog</h3>
                </div>
                <p className="text-gray-600">Rich product listings with filtering, sorting and variants</p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Icon icon="mdi:cart" className="text-2xl text-primary" />
                  <h3 className="text-xl font-semibold">Shopping Cart</h3>
                </div>
                <p className="text-gray-600">Add/remove items, wishlist, and persistent cart storage</p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Icon icon="mdi:credit-card" className="text-2xl text-primary" />
                  <h3 className="text-xl font-semibold">Secure Checkout</h3>
                </div>
                <p className="text-gray-600">Multiple payment options, promo codes and order tracking</p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Icon icon="mdi:view-dashboard" className="text-2xl text-primary" />
                  <h3 className="text-xl font-semibold">Admin Dashboard</h3>
                </div>
                <p className="text-gray-600">Product management, analytics and order processing</p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Icon icon="mdi:star" className="text-2xl text-primary" />
                  <h3 className="text-xl font-semibold">Reviews & Ratings</h3>
                </div>
                <p className="text-gray-600">Customer reviews, ratings and moderation tools</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-primary mb-4">Tech Stack</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold">Frontend</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Next.js for SSR/SEO</li>
                  <li>TailwindCSS for styling</li>
                  <li>Redux for state management</li>
                </ul>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold">Backend</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Node.js with Express</li>
                  <li>MongoDB & Redis</li>
                  <li>Stripe payment integration</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-primary mb-4">Security & Standards</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center justify-center p-4 border-2 border-primary rounded-lg">
                <span className="font-semibold">PCI DSS</span>
              </div>
              <div className="flex items-center justify-center p-4 border-2 border-primary rounded-lg">
                <span className="font-semibold">GDPR</span>
              </div>
              <div className="flex items-center justify-center p-4 border-2 border-primary rounded-lg">
                <span className="font-semibold">SSL Security</span>
              </div>
              <div className="flex items-center justify-center p-4 border-2 border-primary rounded-lg">
                <span className="font-semibold">Data Privacy</span>
              </div>
            </div>
          </div>
        <div>
          <h2 className="text-3xl font-bold text-primary mb-4">User & Admin Flows</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <Icon icon="mdi:account" className="text-2xl text-primary" />
                <h3 className="text-xl font-semibold">Customer Journey</h3>
              </div>
              <div className="flex flex-col gap-2 text-gray-600">
                <div className="flex items-center gap-2">
                  <Icon icon="mdi:arrow-right" className="text-lg" />
                  <p>Visit homepage → Search for products</p>
                </div>
                <div className="flex items-center gap-2">
                  <Icon icon="mdi:arrow-right" className="text-lg" />
                  <p>Browse category → View product detail</p>
                </div>
                <div className="flex items-center gap-2">
                  <Icon icon="mdi:arrow-right" className="text-lg" />
                  <p>Add to cart → Checkout → Pay</p>
                </div>
                <div className="flex items-center gap-2">
                  <Icon icon="mdi:arrow-right" className="text-lg" />
                  <p>View order status → Leave a review later</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <Icon icon="mdi:shield-account" className="text-2xl text-primary" />
                <h3 className="text-xl font-semibold">Admin Dashboard</h3>
              </div>
              <div className="flex flex-col gap-2 text-gray-600">
                <div className="flex items-center gap-2">
                  <Icon icon="mdi:arrow-right" className="text-lg" />
                  <p>Log in to Admin Panel</p>
                </div>
                <div className="flex items-center gap-2">
                  <Icon icon="mdi:arrow-right" className="text-lg" />
                  <p>Add/Edit/Delete product</p>
                </div>
                <div className="flex items-center gap-2">
                  <Icon icon="mdi:arrow-right" className="text-lg" />
                  <p>View sales analytics</p>
                </div>
                <div className="flex items-center gap-2">
                  <Icon icon="mdi:arrow-right" className="text-lg" />
                  <p>Manage user orders and inventory</p>
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

