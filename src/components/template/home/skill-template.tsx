import React from 'react';
import Image from 'next/image';
import { skills } from '@/constants/home/skill';

const SkillTemplate = () => (
  <div className="bg-white overflow-hidden  h-[15vh] flex items-center ">
    <div className="animate-scroll gap-[50px] hidden md:flex">
      {skills.map((data, index) => (
        <Image
          key={index}
          src={data.icon}
          alt={data.altText}
          width={50}
          height={50}
          priority
        />
      ))}
      {skills.map((data, index) => (
        <Image
          key={index}
          src={data.icon}
          alt={data.altText}
          width={50}
          height={50}
          priority
        />
      ))}
    </div>
    <div className="flex animate-scroll gap-[50px] md:hidden">
      {skills.map((data, index) => (
        <Image
          key={index}
          src={data.icon}
          alt={data.altText}
          width={40}
          height={40}
          priority
        />
      ))}
      {skills.map((data, index) => (
        <Image
          key={index}
          src={data.icon}
          alt={data.altText}
          width={40}
          height={40}
          priority
        />
      ))}
    </div>
  </div>
);

export default SkillTemplate;
