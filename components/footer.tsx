import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background relative">
      <div 
        className="absolute inset-0 -z-10 overflow-hidden opacity-10"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <ShieldCheck className="h-8 w-8 text-primary mr-2" />
            <span className="text-xl font-bold">Blackcat IT</span>
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end">
            <Link href="#" className="text-muted-foreground hover:text-foreground px-4 py-2">Privacy Policy</Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground px-4 py-2">Terms of Service</Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground px-4 py-2">Contact</Link>
          </nav>
        </div>
        <div className="mt-8 text-center text-muted-foreground">
          <p>&copy; 2023 Blackcat IT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}