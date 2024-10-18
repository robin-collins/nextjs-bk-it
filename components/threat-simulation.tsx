import { Button } from '@/components/ui/button';

export default function ThreatSimulation() {
  return (
    <section id="threat-simulation" className="py-24 relative">
      <div 
        className="absolute inset-0 -z-10 overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.2)'
        }}
      />
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Advanced Threat Simulation</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Stay one step ahead of cyber criminals with our state-of-the-art threat simulation platform. We replicate real-world attack scenarios to test your defenses and identify vulnerabilities before they can be exploited.
        </p>
        <Button size="lg">Schedule a Demo</Button>
      </div>
    </section>
  );
}