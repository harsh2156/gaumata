import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface PartnerCardProps {
  src: string;
  title: string;
  description: string;
  link: string;
}

const TechnologyPartner: React.FC = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-16 mb-10 px-4'>
      <h1 className='text-3xl sm:text-4xl font-semibold text-green-500 mb-10 text-center'>Technology Partners</h1>
      <div className="flex flex-wrap justify-center gap-4 mb-14">
        <PartnerCard 
          src='/partner.svg' 
          title='Ayushman Cowfit' 
          description='Ayushman Cowfit is an Artificial Intelligence powered cattle health solution crafted for livestock wellbeing and effective herd management by working on optimal early interventions.' 
          link='https://www.google.com/' 
        />
        <PartnerCard 
          src='/partner.svg' 
          title='Ayushman Cowfit' 
          description='Ayushman Cowfit is an Artificial Intelligence powered cattle health solution crafted for livestock wellbeing and effective herd management by working on optimal early interventions.' 
          link='https://www.google.com/' 
        />
        <PartnerCard 
          src='/partner.svg' 
          title='Ayushman Cowfit' 
          description='Ayushman Cowfit is an Artificial Intelligence powered cattle health solution crafted for livestock wellbeing and effective herd management by working on optimal early interventions.' 
          link='https://www.google.com/' 
        />
        <PartnerCard 
          src='/partner.svg' 
          title='Ayushman Cowfit' 
          description='Ayushman Cowfit is an Artificial Intelligence powered cattle health solution crafted for livestock wellbeing and effective herd management by working on optimal early interventions.' 
          link='https://www.google.com/' 
        />
      </div>
    </div>
  )
}

const PartnerCard: React.FC<PartnerCardProps> = ({src, title, description, link}) => {
  return (
    <div className='flex flex-col gap-y-4 items-start justify-start w-full sm:w-[45%] md:w-2/5 bg-white rounded-lg p-4 shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out'>
      <div>
        <img src={src} alt="Image" className="w-full h-auto object-contain"/>
      </div>
      <div>
        <h1 className='font-semibold text-lg text-black mb-4'>{title}</h1>
        <p className='text-gray-500 mb-2'>{description}</p>
        <Link to={link} className='flex gap-x-3 mt-1 items-center text-yellow-500 font-semibold'>
          <span>Know more</span>
          <FaArrowRight size={12} />
        </Link>
      </div>
    </div>
  )
}

export default TechnologyPartner;
