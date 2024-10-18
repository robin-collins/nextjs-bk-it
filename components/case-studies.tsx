import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const caseStudies = [
  {
    title: 'Financial Institution Fortified',
    description: 'How we secured a major bank against cyber threats, reducing incidents by 95%.',
  },
  {
    title: 'Healthcare Data Protected',
    description: 'Implementing HIPAA-compliant security measures for a large hospital network.',
  },
  {
    title: 'Government Agency Safeguarded',
    description: 'Developing a custom AI-driven threat detection system for sensitive data.',
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 relative">
      <div 
        className="absolute inset-0 -z-10 overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.2)'
        }}
      />
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Case Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>{study.title}</CardTitle>
                <CardDescription>{study.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <a href="#" className="text-primary hover:underline">Read more</a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}