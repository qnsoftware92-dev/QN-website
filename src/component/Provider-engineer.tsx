import ImageStep1 from "../assets/INQUIRE AND CONSULTING.svg";
import ImageStep2 from "../assets/SELECTVCSANDINTERVIEW.svg";
import ImageStep3 from "../assets/TAKE INTERVIEW.svg";
import ImageStep4 from "../assets/ONBOARD THE ENGINEERS.svg";


export default function ProviderEngineer() {
    const hiringSteps = [
        {
            step: 1,
            title: "Inquire and consulting",
            description: "We listen to your requirements and give you tecnical advice or suggestions if needed.",
            image: ImageStep1
        },
        {
            step: 2,
            title: "Find the right candidates", 
            description: "We will find the right candidates in our team and interview them to make sure they are the right fit for your project.",
            image: ImageStep2
        },
        {
            step: 3,
            title: "Take interview",
            description: "We will take interview of the selected candidates over a phone or video call with questions and live code tests.",
            image: ImageStep3
        },
        {
            step: 4,
            title: "Onboard the engineers",
            description: "We will determine the start date, sign the agreement and together onboard the engineers to your development team.",
            image: ImageStep4
        }
    ];

    return (
        <div className="md:max-w-screen-xl max-w-screen-xl md:p-0 p-4 mx-auto mt-10">
            <div className="mb-16">
                <div className="md:text-4xl text-2xl text-primary text-center font-bold">Process of hiring engineers</div>
            </div>
            <div className="w-full max-w-screen-md mx-auto border-l border-dotted border-r-gray-2">
                {hiringSteps.map((step) => (
                    <div key={step.step} className={`slide_animation-${step.step} flex items-center mb-10`}>
                        <div className="flex items-center">
                            <div className="md:w-10 w-5 border-b border-gray-2 md:-ml-6 -ml-3"></div>
                            <div className="w-7 h-7 md:ml-6 ml-1 flex items-center justify-center text-lg bg-primary text-white rounded-full">
                                {step.step}
                            </div>
                        </div>
                        <div className="flex items-center flex-shrink-0">
                            <img className="md:mx-8 mx-4 md:w-auto w-16" src={step.image} alt={step.title} />
                        </div>
                        <div className="flex flex-col">
                            <div className="relative z-10 md:ml-6 text-xl w-fit md:px-2 bg-white font-extrabold tracking-widest">
                                {step.title}
                            </div>
                            <div className="md:-mt-4 md:border border-gray-5 md:px-8 md:py-7 to-gray-1 opacity-80 tracking-wide">
                                {step.description}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
