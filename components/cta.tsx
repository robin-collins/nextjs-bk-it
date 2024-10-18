import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative text-primary-foreground">
      <div 
        className="absolute inset-0 -z-10 overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.4)'
        }}
      />
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Ready to secure your digital future?
          </h2>
          <p className="mt-4 text-lg">
            Get in touch with our experts to discuss how Blackcat IT can protect your assets and drive innovation.
          </p>
          <div className="mt-8">
            <Button size="lg" variant="secondary">
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}