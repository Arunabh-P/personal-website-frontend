import BannerTemplate from '@/components/template/home/banner-template';
import DevMotivationTemplate from '@/components/template/home/dev-motivation-template';
import FooterTemplate from '@/components/template/home/footer';
import SkillTemplate from '@/components/template/home/skill-template';
import SummaryTemplate from '@/components/template/home/summary-template';
import TestimonialTemplate from '@/components/template/home/testimonial-template';
import { fetchTestimonials } from '@/service/api/testimonial';

export default async function Home() {
  const { testimonials } = await fetchTestimonials();
  return (
    <>
      <BannerTemplate />
      <SkillTemplate />
      <SummaryTemplate />
      <DevMotivationTemplate />
      <TestimonialTemplate data={testimonials} />
      <FooterTemplate />
    </>
  );
}
