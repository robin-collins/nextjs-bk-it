import { Button } from '@/components/ui/button';
import { ShieldCheck, Brain } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div 
        className="absolute inset-0 -z-10 overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.3)'
        }}
      />
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-muted-foreground ring-1 ring-muted-foreground/10 hover:ring-muted-foreground/20">
            Announcing our next-gen AI-powered security solution. <a href="#" className="font-semibold text-primary"><span className="absolute inset-0" aria-hidden="true"></span>Read more <span aria-hidden="true">&rarr;</span></a>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Secure Your Future with <span className="text-primary">Blackcat IT</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Cutting-edge cyber security and AI research solutions to protect your digital assets and drive innovation.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg">
              Get started
              <ShieldCheck className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              Learn more
              <Brain className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}