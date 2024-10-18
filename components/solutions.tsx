import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Shield, Lock, Server, Cloud } from 'lucide-react';

const solutions = [
  {
    title: 'Advanced Threat Protection',
    description: 'AI-powered defense against sophisticated cyber threats.',
    icon: Shield,
  },
  {
    title: 'Zero Trust Architecture',
    description: 'Secure access for every user, device, and application.',
    icon: Lock,
  },
  {
    title: 'Secure Cloud Integration',
    description: 'Seamless and protected cloud infrastructure solutions.',
    icon: Cloud,
  },
  {
    title: 'IoT Security',
    description: 'Comprehensive protection for connected devices.',
    icon: Server,
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-24 relative">
      <div 
        className="absolute inset-0 -z-10 overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.2)'
        }}
      />
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Innovative Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <Card key={index} className="bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <solution.icon className="h-10 w-10 text-primary mb-4" />
                <CardTitle>{solution.title}</CardTitle>
                <CardDescription>{solution.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}