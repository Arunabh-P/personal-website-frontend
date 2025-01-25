import MotivationCard from '@/components/molecule/motivation-card';
import { devMotivationData } from '@/constants/home/dev-motivation';

const DevMotivationTemplate = () => (
  <div className="section-x-padding section-b-padding">
    <h2 className="text-start font-lora uppercase pb-4">
      {devMotivationData.title}
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[10px]">
      {devMotivationData.data.map((item) => (
        <MotivationCard
          index={item.index}
          title={item.subTitle}
          description={item.description}
          key={item.index}
        />
      ))}
    </div>
  </div>
);

export default DevMotivationTemplate;
