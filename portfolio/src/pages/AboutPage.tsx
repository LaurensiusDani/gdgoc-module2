export default function AboutPage() {
  // Skills list 
  const skills = [
    { num: '01', title: 'HTML' },
    { num: '02', title: 'CSS' },
    { num: '03', title: 'JavaScript' },
    { num: '04', title: 'Node.js' },
    { num: '05', title: 'React' },
  ];

  return (
    <div className="max-w-[72rem] mx-auto px-6 py-24 md:py-32">
      <h1 className="font-display text-5xl md:text-7xl uppercase mb-16">About.</h1>
      
      {/* Heavy Editorial Section Divider Line Rule */}
      <hr className="border-t-4 border-foreground mb-16" />

      <h2 className="font-mono text-2xl md:text-4xl uppercase mb-12">Core Development Tech Stack</h2>
      
      {/* Responsive Grid Layer Setup */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {skills.map((skill) => (
          <article 
            key={skill.num} 
            className="border border-border p-8 transition-all duration-100 ease-in-out hover:bg-foreground hover:text-background group"
          >
            <span className="font-mono text-xs text-muted-foreground mb-6 block group-hover:text-background">
              {skill.num}
            </span>
            <h3 className="font-display text-2xl">{skill.title}</h3>
          </article>
        ))}
      </div>
    </div>
  );
}