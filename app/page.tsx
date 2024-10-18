import Header from '@/components/header';
import Hero from '@/components/hero';
import Services from '@/components/services';
import Solutions from '@/components/solutions';
import CaseStudies from '@/components/case-studies';
import Future from '@/components/future';
import Leadership from '@/components/leadership';
import HumanElement from '@/components/human-element';
import ThreatSimulation from '@/components/threat-simulation';
import RiskManagement from '@/components/risk-management';
import CaaS from '@/components/caas';
import CTA from '@/components/cta';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-24">
        <Hero />
        <Services />
        <Solutions />
        <CaseStudies />
        <Future />
        <Leadership />
        <HumanElement />
        <ThreatSimulation />
        <RiskManagement />
        <CaaS />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}