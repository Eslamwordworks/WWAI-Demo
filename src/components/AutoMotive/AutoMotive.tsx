import React from 'react';
// import { Swiper, SwiperSlide } from "swiper/react";
import HealthCare1 from '../../../public/assets/health-care1.png';
import HealthCare2 from '../../../public/assets/health-care2.png';
import HealthCare3 from '../../../public/assets/health-care3.png';
import HealthCare4 from '../../../public/assets/health-care4.png';
import HealthCare5 from '../../../public/assets/health-care5.png';
import HealthCare6 from '../../../public/assets/health-care6.png';
import HealthCare7 from '../../../public/assets/health-care7.png';
import HealthCare8 from '../../../public/assets/health-care8.png';
import HealthCare9 from '../../../public/assets/health-care9.png';

import MotorHubBot from '../MotorHub';


// Define the structure of a use case
interface UseCase {
  title: string;
  description: string;
  image: string; // Changed to accept the actual image import 
}


const useCases: UseCase[] = [
  {
    title: "24/7 Patient Assistance",
    description: "Round-the-clock support that improves patient satisfaction and frees staff for critical care.",
    image: HealthCare1
  },
  {
    title: "Automated Appointment Booking",
    description: "AI-driven automation personalises scheduling and reminders, optimising patient flow.",
    image: HealthCare2
  },
  {
    title: "Personalized Health Insights",
    description: "Real-time updates that empower patients with timely information and enhance their experience.",
    image: HealthCare3
  },
  {
    title: "Gen –AI Insurance RPA",
    description: "Gen –AI driven automation for streamline insurance approvals, validating Clinical procedures, & disbursals.",
    image: HealthCare4
  },
  {
    title: "Intelligent Prescription Detection",
    description: "Automatically detects prescription requirements, ensuring only valid prescriptions are accepted.",
    image: HealthCare5
  },
  {
    title: "Medication Adherence Monitoring",
    description: "Out Gen AI assistant tracks medication schedules and sends reminders with automated alerts.",
    image: HealthCare6
  },
  {
    title: "Operational Support for Staff",
    description: "Gen AI based optimisation for staff workflows such as Payroll and Leave Management enhancing efficiency.",
    image: HealthCare7
  },
  {
    title: "Streamlined Emergency Handling",
    description: "Our Gen-AI assistant analyzes feedback instantly, to help hospital improve emergency care and responsiveness.",
    image: HealthCare8
  },
  {
    title: "Real-Time Lab Results",
    description: "Access medical records and lab results, with simplified explanations, insights, and actionable steps based on the findings.",
    image: HealthCare9
  },
];

const UseCase: React.FC<UseCase> = ({ title, description, image }) => {
  return (
    <div className="w-full sm:w-[264px] h-[252px] rounded-lg overflow-hidden shadow-sm">
      {/* Top Section - Image */}
      <div className="h-[144px] bg-[#F3F4F6] flex justify-center items-center p-4">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Bottom Section - Description */}
      <div className="h-[108px] bg-white p-4 flex flex-col gap-2">
        <h3 className="text-[#20232C] font-medium text-sm">{title}</h3>
        <p className="text-[#9199B0] text-xs font-medium">{description}</p>
      </div>
    </div>
  );
};

const AutoMotive: React.FC = () => {
  return (
    <div className='p-6 bg-[#FCFCFD] w-full'>
      <div className="container mx-auto">
        <div className="mb-6">
          <h1 className="font-semibold text-2xl text-[#20232C] mb-2">Automotive</h1>
          <p className="font-medium text-sm text-[#9199B0]">
            Empowering hospitals with Gen-AI chatbots and voicebots for efficient 24/7 patient support, personalized
            assistance, and a seamless healthcare experience.
          </p>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold text-[#20232C] mb-4">Use Cases</h2>

          {/* Large Screens: Grid Layout */}
          <div className="hidden lg:grid grid-cols-4 gap-6">
            {useCases.map((item, index) => (
              <UseCase key={index} {...item} />
            ))}
          </div>

          {/* Medium Screens: 2 columns */}
          <div className="hidden md:grid lg:hidden grid-cols-2 gap-4">
            {useCases.map((item, index) => (
              <UseCase key={index} {...item} />
            ))}
          </div>

          {/* Small Screens: Single column layout */}
          <div className="grid md:hidden grid-cols-1 gap-4">
            {useCases.map((item, index) => (
              <UseCase key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-20 '>

        <div>
          {/* Your existing content */}
          <MotorHubBot />
        </div>
        
      </div>
    </div>
  );
};

export default AutoMotive;