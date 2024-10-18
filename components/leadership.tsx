import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const leaders = [
  { name: 'Dr. Jane Smith', role: 'CEO', image: 'https://i.pravatar.cc/150?img=1' },
  { name: 'John Doe', role: 'CTO', image: 'https://i.pravatar.cc/150?img=2' },
  { name: 'Emily Johnson', role: 'Head of AI Research', image: 'https://i.pravatar.cc/150?img=3' },
];

export default function Leadership() {
  return (
    <section id="leadership" className="py-24 relative">
      <div 
        className="absolute inset-0 -z-10 overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2047&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.2)'
        }}
      />
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Leadership</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <div key={index} className="text-center">
              <Avatar className="w-32 h-32 mx-auto mb-4">
                <AvatarImage src={leader.image} alt={leader.name} />
                <AvatarFallback>{leader.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-semibold">{leader.name}</h3>
              <p className="text-muted-foreground">{leader.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}