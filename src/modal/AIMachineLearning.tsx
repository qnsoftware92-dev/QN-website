import video from "../assets/video/8.mp4"; 
import { Icon } from "@iconify/react";

export default function AIMachineLearning() {
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
                  <h3 className="text-xl font-semibold">ML Model Integration</h3>
                </div>
                <p className="text-gray-600">TensorFlow/PyTorch models with real-time inference capabilities</p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Icon icon="mdi:image-search" className="text-2xl text-primary" />
                  <h3 className="text-xl font-semibold">Computer Vision</h3>
                </div>
                <p className="text-gray-600">Image classification, object detection and face recognition</p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Icon icon="mdi:robot" className="text-2xl text-primary" />
                  <h3 className="text-xl font-semibold">NLP & Chatbots</h3>
                </div>
                <p className="text-gray-600">Text analysis, sentiment detection and conversational AI</p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Icon icon="mdi:chart-timeline-variant" className="text-2xl text-primary" />
                  <h3 className="text-xl font-semibold">Predictive Analytics</h3>
                </div>
                <p className="text-gray-600">Time series forecasting and trend analysis</p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Icon icon="mdi:file-document-search" className="text-2xl text-primary" />
                  <h3 className="text-xl font-semibold">Document AI</h3>
                </div>
                <p className="text-gray-600">OCR, document parsing and information extraction</p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Icon icon="mdi:target" className="text-2xl text-primary" />
                  <h3 className="text-xl font-semibold">Recommendation Engine</h3>
                </div>
                <p className="text-gray-600">Personalized content and product recommendations</p>
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
                  <li>TailwindCSS for styling</li>
                  <li>Data visualization libraries</li>
                </ul>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold">Backend</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Python FastAPI/Flask</li>
                  <li>Model serving APIs</li>
                  <li>Redis for caching</li>
                </ul>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold">ML Stack</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>TensorFlow/PyTorch</li>
                  <li>Scikit-learn pipeline</li>
                  <li>ONNX for optimization</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-primary mb-4">Key Workflows</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <Icon icon="mdi:cog-transfer" className="text-2xl text-primary" />
                  <h3 className="text-xl font-semibold">Model Pipeline</h3>
                </div>
                <div className="flex flex-col gap-2 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Icon icon="mdi:arrow-right" className="text-lg" />
                    <p>Data input → Preprocessing</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon icon="mdi:arrow-right" className="text-lg" />
                    <p>Model inference → Results</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon icon="mdi:arrow-right" className="text-lg" />
                    <p>Feedback → Model updates</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <Icon icon="mdi:account-cog" className="text-2xl text-primary" />
                  <h3 className="text-xl font-semibold">User Journey</h3>
                </div>
                <div className="flex flex-col gap-2 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Icon icon="mdi:arrow-right" className="text-lg" />
                    <p>Upload data/content</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon icon="mdi:arrow-right" className="text-lg" />
                    <p>View predictions/insights</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon icon="mdi:arrow-right" className="text-lg" />
                    <p>Export/share results</p>
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

