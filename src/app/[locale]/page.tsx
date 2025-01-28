import BannerTemplate from '@/components/template/home/banner-template';
import DevMotivationTemplate from '@/components/template/home/dev-motivation-template';
import FooterTemplate from '@/components/template/home/footer';
import SkillTemplate from '@/components/template/home/skill-template';
import SummaryTemplate from '@/components/template/home/summary-template';
import TestimonialTemplate from '@/components/template/home/testimonial-template';
import { fetchSkills } from '@/service/api/skill';
import { fetchTestimonials } from '@/service/api/testimonial';

export default async function Home() {
  const { testimonials } = await fetchTestimonials();
  const { skills } = await fetchSkills();
  return (
    <>
      <BannerTemplate />
      <SkillTemplate />
      <SummaryTemplate />
      <DevMotivationTemplate data={skills} />
      <TestimonialTemplate data={testimonials} />
      <FooterTemplate />
    </>
  );
}
