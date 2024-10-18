import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BarChart, PieChart, TrendingUp, AlertTriangle } from 'lucide-react';

const riskManagementFeatures = [
  {
    title: 'Risk Assessment',
    description: 'Comprehensive evaluation of your organization\'s cybersecurity risks.',
    icon: BarChart,
  },
  {
    title: 'Compliance Management',
    description: 'Ensure adherence to industry standards and regulations.',
    icon: PieChart,
  },
  {
    title: 'Continuous Monitoring',
    description: 'Real-time threat intelligence and risk analytics.',
    icon: TrendingUp,
  },
  {
    title: 'Incident Response Planning',
    description: 'Develop and maintain robust incident response strategies.',
    icon: AlertTriangle,
  },
];

export default function RiskManagement() {
  return (
    <section id="risk-management" className="py-24 relative">
      <div 
        className="absolute inset-0 -z-10 overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.2)'
        }}
      />
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Comprehensive Risk Management</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {riskManagementFeatures.map((feature, index) => (
            <Card key={index} className="bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <feature.icon className="h-10 w-10 text-primary mb-4" />
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}