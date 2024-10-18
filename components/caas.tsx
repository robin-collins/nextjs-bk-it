import { Button } from '@/components/ui/button';

export default function CaaS() {
  return (
    <section id="caas" className="py-24 relative">
      <div 
        className="absolute inset-0 -z-10 overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.3)'
        }}
      />
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Cybersecurity as a Service (CaaS)</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Experience enterprise-grade security without the enterprise-level complexity. Our CaaS offering provides a comprehensive, scalable, and cost-effective solution to protect your digital assets 24/7.
        </p>
        <ul className="list-disc text-left max-w-2xl mx-auto mb-8">
          <li>24/7 Monitoring and Threat Detection</li>
          <li>Automated Incident Response</li>
          <li>Regular Security Assessments</li>
          <li>Compliance Management</li>
          <li>Continuous Security Optimization</li>
        </ul>
        <Button size="lg">Learn More About CaaS</Button>
      </div>
    </section>
  );
}