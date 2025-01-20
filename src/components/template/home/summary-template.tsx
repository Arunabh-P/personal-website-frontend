import Timeline from '@/components/molecule/timeline';
import { timelineData } from '@/constants/home/timeline';
import React from 'react';

const SummaryTemplate = () => (
  <div className="md:flex section-padding pt-0  md:h-screen md:overflow-auto md:no-scrollbar md:gap-10">
    <div className="md:w-6/12  md:sticky md:top-0 md:pt-5 min-h-fit max-h-fit">
      <h2 className="font-lora pb-4 font-medium">
        PROFESSIONAL <br /> SUMMARY
      </h2>
      <p className="font-normal text-justify">
        With a foundation in Mechanical Engineering, I pivoted to web
        development during the pandemic, where I turned a challenging situation
        into an opportunity for growth. Using YouTube and official
        documentation, I self-taught development, quickly gaining proficiency in
        modern web technologies. My journey led me to{' '}
        <span className="font-medium">Brototype</span>, where I sharpened my
        skills in MERN stack development, and soon after, I secured my first
        professional role as a Frontend Developer at{' '}
        <span className="font-medium">Codinoz Technologies</span>.
        <br />
        <br />
        Currently, as a Software Engineer at{' '}
        <span className="font-medium">Technopalette Solutions</span>, I
        specialize in React.js and Next.js, focusing on migrating and optimizing
        cross-platform, mobile-first web applications. I design responsive,
        user-centric interfaces, integrate APIs seamlessly, and troubleshoot
        performance issues to ensure a smooth and efficient user experience. My
        work also involves building reusable components, fostering scalability,
        and streamlining the development process.
        <br />
        <br />I thrive in collaborative, Agile environments and have a strong
        passion for learning new technologies and mentoring others. My diverse
        background and adaptability allow me to bring unique insights to the
        table, continuously striving to contribute to team success and deliver
        high-quality web solutions.
      </p>
    </div>
    <div className="md:w-6/12  pt-5 md:pt-10">
      <Timeline data={timelineData} />
    </div>
  </div>
);

export default SummaryTemplate;
