import video from "../assets/video/7.mp4";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function HRTech() {
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
                  <Icon icon="mdi:account-group" className="text-2xl text-primary" />
                  <h3 className="text-xl font-semibold">Employee Management</h3>
                </div>
                <p className="text-gray-600">Personnel files, org charts, and employee data management</p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Icon icon="mdi:account-search" className="text-2xl text-primary" />
                  <h3 className="text-xl font-semibold">Recruitment & ATS</h3>
                </div>
                <p className="text-gray-600">Job postings, applicant tracking, and interview scheduling</p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Icon icon="mdi:calendar-check" className="text-2xl text-primary" />
                  <h3 className="text-xl font-semibold">Leave & Attendance</h3>
                </div>
                <p className="text-gray-600">Time off requests, attendance tracking, and leave management</p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Icon icon="mdi:cash" className="text-2xl text-primary" />
                  <h3 className="text-xl font-semibold">Payroll & Benefits</h3>
                </div>
                <p className="text-gray-600">Salary processing, tax compliance, and benefits administration</p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Icon icon="mdi:chart-line" className="text-2xl text-primary" />
                  <h3 className="text-xl font-semibold">Performance Reviews</h3>
                </div>
                <p className="text-gray-600">Goal setting, feedback collection, and performance tracking</p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Icon icon="mdi:file-document" className="text-2xl text-primary" />
                  <h3 className="text-xl font-semibold">Document Management</h3>
                </div>
                <p className="text-gray-600">Digital contracts, policy documents, and compliance tracking</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-primary mb-4">Tech Stack</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold">Frontend</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>React.js with TypeScript</li>
                  <li>Tailwind CSS for styling</li>
                  <li>Redux for state management</li>
                </ul>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold">Backend</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Node.js with NestJS</li>
                  <li>PostgreSQL database</li>
                  <li>Redis for caching</li>
                </ul>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold">Services</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>AWS for cloud hosting</li>
                  <li>SendGrid for emails</li>
                  <li>DocuSign for e-signatures</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-primary mb-4">Key Workflows</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <Icon icon="mdi:account-plus" className="text-2xl text-primary" />
                  <h3 className="text-xl font-semibold">Hiring Process</h3>
                </div>
                <div className="flex flex-col gap-2 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Icon icon="mdi:arrow-right" className="text-lg" />
                    <p>Job posting → Application review</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon icon="mdi:arrow-right" className="text-lg" />
                    <p>Interview scheduling → Offer letter</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon icon="mdi:arrow-right" className="text-lg" />
                    <p>Document collection → Onboarding</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <Icon icon="mdi:account-cog" className="text-2xl text-primary" />
                  <h3 className="text-xl font-semibold">Employee Lifecycle</h3>
                </div>
                <div className="flex flex-col gap-2 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Icon icon="mdi:arrow-right" className="text-lg" />
                    <p>Profile setup → Role assignment</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon icon="mdi:arrow-right" className="text-lg" />
                    <p>Performance reviews → Training</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon icon="mdi:arrow-right" className="text-lg" />
                    <p>Promotions → Role transitions</p>
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

