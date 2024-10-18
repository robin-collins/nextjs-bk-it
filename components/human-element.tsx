import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Users, Shield, BookOpen } from 'lucide-react';

const humanElements = [
  {
    title: 'Security Awareness Training',
    description: 'Empower your team with knowledge to recognize and prevent cyber threats.',
    icon: Users,
  },
  {
    title: 'Phishing Simulations',
    description: 'Test and improve your organization\'s resilience against social engineering attacks.',
    icon: Shield,
  },
  {
    title: 'Cybersecurity Culture',
    description: 'Build a security-first mindset throughout your organization.',
    icon: BookOpen,
  },
];

export default function HumanElement() {
  return (
    <section id="human-element" className="py-24 relative">
      <div 
        className="absolute inset-0 -z-10 overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2084&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.2)'
        }}
      />
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">The Human Element</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {humanElements.map((element, index) => (
            <Card key={index} className="bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <element.icon className="h-10 w-10 text-primary mb-4" />
                <CardTitle>{element.title}</CardTitle>
                <CardDescription>{element.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}