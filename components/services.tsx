import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Shield, Brain, Lock, Server } from 'lucide-react';

const services = [
  {
    title: 'Cyber Security',
    description: 'Protect your digital assets with our advanced security solutions.',
    icon: Shield,
  },
  {
    title: 'AI Research',
    description: 'Leverage cutting-edge AI technologies to drive innovation.',
    icon: Brain,
  },
  {
    title: 'Penetration Testing',
    description: 'Identify vulnerabilities before they can be exploited.',
    icon: Lock,
  },
  {
    title: 'Secure Infrastructure',
    description: 'Build and maintain robust, secure IT infrastructure.',
    icon: Server,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div 
        className="absolute inset-0 -z-10 overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2034&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.1)'
        }}
      />
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <service.icon className="h-10 w-10 text-primary mb-4" />
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}