import { Button } from '@/components/ui/button';

export default function Future() {
  return (
    <section id="future" className="py-24 relative text-center">
      <div 
        className="absolute inset-0 -z-10 overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.3)'
        }}
      />
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6">Shaping the Future of Cybersecurity</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          At Blackcat IT, we're not just responding to current threats – we're anticipating the challenges of tomorrow. Our cutting-edge research in AI and quantum computing is paving the way for next-generation security solutions.
        </p>
        <Button size="lg">Explore Our Innovations</Button>
      </div>
    </section>
  );
}