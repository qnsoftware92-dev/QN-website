
import { Icon } from "@iconify/react";  
import video from "../assets/video/1.mp4";

export default function EducationApp() {
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
                  <Icon icon="mdi:brain" className="text-2xl text-primary" />
                  <h3 className="text-xl font-semibold">AI-Powered Learning</h3>
                </div>
                <p className="text-gray-600">Personalized learning paths, adaptive content, and intelligent assessments</p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Icon icon="mdi:robot" className="text-2xl text-primary" />
                  <h3 className="text-xl font-semibold">AI Tutor</h3>
                </div>
                <p className="text-gray-600">24/7 chat assistance, concept explanations, and natural language Q&A</p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Icon icon="mdi:microphone" className="text-2xl text-primary" />
                  <h3 className="text-xl font-semibold">Voice Recognition</h3>
                </div>
                <p className="text-gray-600">Speech-to-text, pronunciation practice, and voice-based queries</p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Icon icon="mdi:trophy" className="text-2xl text-primary" />
                  <h3 className="text-xl font-semibold">Gamification</h3>
                </div>
                <p className="text-gray-600">XP points, badges, leaderboards, and learning streaks</p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Icon icon="mdi:chart-line" className="text-2xl text-primary" />
                  <h3 className="text-xl font-semibold">Smart Analytics</h3>
                </div>
                <p className="text-gray-600">Progress tracking, learning insights, and AI recommendations</p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Icon icon="mdi:translate" className="text-2xl text-primary" />
                  <h3 className="text-xl font-semibold">Multilingual Support</h3>
                </div>
                <p className="text-gray-600">Real-time translation and native language learning support</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-primary mb-4">Tech Stack</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold">Frontend</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>React Native for mobile</li>
                  <li>Next.js for web version</li>
                  <li>TailwindCSS for styling</li>
                </ul>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold">Backend & AI</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Node.js with Express</li>
                  <li>OpenAI API integration</li>
                  <li>MongoDB for data storage</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-primary mb-4">Compliance & Security</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center justify-center p-4 border-2 border-primary rounded-lg">
                <span className="font-semibold">COPPA</span>
              </div>
              <div className="flex items-center justify-center p-4 border-2 border-primary rounded-lg">
                <span className="font-semibold">GDPR</span>
              </div>
              <div className="flex items-center justify-center p-4 border-2 border-primary rounded-lg">
                <span className="font-semibold">Data Privacy</span>
              </div>
              <div className="flex items-center justify-center p-4 border-2 border-primary rounded-lg">
                <span className="font-semibold">AI Ethics</span>
              </div>
            </div>
          </div>
        </div>
      </div>


      
    </div>
  );
}

