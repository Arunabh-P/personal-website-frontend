import BannerTemplate from '@/components/template/home/banner-template';
import DevMotivationTemplate from '@/components/template/home/dev-motivation-template';
import FooterTemplate from '@/components/template/home/footer';
import SkillTemplate from '@/components/template/home/skill-template';
import SummaryTemplate from '@/components/template/home/summary-template';

export default function Home() {
  return (
    <>
      <BannerTemplate />
      <SkillTemplate />
      <SummaryTemplate />
      <DevMotivationTemplate />
      <FooterTemplate />
    </>
  );
}
