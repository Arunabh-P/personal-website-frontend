import { FC } from 'react';

interface CardProps {
  index: string;
  title: string;
  description: string;
}
const MotivationCard: FC<CardProps> = ({ index, title, description }) => (
  <div className="">
    <h2 className="text-[34px] md:text-[38px] lg:text-[44px] xltext-[54px] font-bold">
      {index}
    </h2>
    <h6 className="font-bold uppercase mt-1">{title}</h6>
    <p className="mt-2">{description}</p>
  </div>
);

export default MotivationCard;
