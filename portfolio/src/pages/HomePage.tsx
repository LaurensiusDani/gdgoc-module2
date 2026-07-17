import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="max-w-[72rem] mx-auto px-6 py-24 md:py-32">
      {/* Giant display typography */}
      <h1 className="font-display text-[clamp(3.5rem,8vw,10rem)] mb-8 leading-none">
        Laurensius Dani.
      </h1>
      
      {/* Structural Graphic Punctuation Element */}
      <div className="flex items-center gap-4 mb-12" aria-hidden="true">
        <div className="h-1 bg-foreground flex-grow"></div>
        <div className="w-4 h-4 border-2 border-foreground"></div>
      </div>

      <p className="font-serif text-xl md:text-2xl max-w-3xl mb-12 leading-relaxed">
        Undergraduate Information Systems and Technology student focused on constructing clean, high-performance low-level system designs, modern web infrastructure architectures, and deliberate interface experiences.
      </p>
      
      {/* Button styling translated to Tailwind */}
      <Link 
        to="/about" 
        className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 font-mono text-sm uppercase tracking-[0.1em] transition-all duration-100 ease-in-out hover:bg-background hover:text-foreground hover:outline hover:outline-2 hover:outline-foreground hover:-outline-offset-2"
      >
        Explore <span>&rarr;</span>
      </Link>
    </div>
  );
}