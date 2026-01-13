
import React, { useState, useEffect } from 'react';
import { MapPin, Calendar, Clock, ChevronRight, Check } from 'lucide-react';

const App: React.FC = () => {
  const [showContent, setShowContent] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 sm:p-12 relative overflow-hidden">
      {/* Decorative subtle lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/2 w-px h-full bg-gray-400 transform -translate-x-1/2"></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-gray-400 transform -translate-y-1/2"></div>
      </div>

      <main className={`max-w-xl w-full bg-white/40 backdrop-blur-md border border-white/60 shadow-sm rounded-sm p-8 sm:p-16 transition-all duration-1000 transform ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        
        {/* Header Section */}
        <header className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4 slide-up" style={{ animationDelay: '0.2s' }}>Una invitación cordial</p>
          <h1 className="text-4xl sm:text-5xl font-light text-gray-800 italic mb-2 slide-up" style={{ animationDelay: '0.4s' }}>Venus</h1>
          <div className="w-12 h-px bg-gray-300 mx-auto mt-6 slide-up" style={{ animationDelay: '0.6s' }}></div>
        </header>

        {/* Message Body */}
        <div className="space-y-6 text-gray-700 leading-relaxed font-light text-sm sm:text-base text-center slide-up" style={{ animationDelay: '0.8s' }}>
          <p>
            Tras haber compartido unas breves palabras contigo por Instagram, me he quedado con una grata impresión de tu amabilidad.
          </p>
          <p>
            Este domingo, un grupo de amigos y yo hemos organizado un paseo tranquilo por Lima. Queremos aprovechar el buen tiempo para caminar, conversar y disfrutar de una tarde sin prisas.
          </p>
          <p>
            Sería un verdadero gusto para nosotros contar con tu compañía. Es un plan sencillo, pensado para relajarse y compartir un momento agradable en buena sintonía.
          </p>
        </div>

        {/* Details Section */}
        <div className="mt-12 space-y-4 slide-up" style={{ animationDelay: '1s' }}>
          <div className="flex items-center justify-center gap-3 text-gray-600">
            <Calendar size={16} strokeWidth={1.5} />
            <span className="text-sm tracking-wide">Domingo, 27 de Octubre</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-gray-600">
            <Clock size={16} strokeWidth={1.5} />
            <span className="text-sm tracking-wide">A partir de las 4:30 PM</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-gray-600">
            <MapPin size={16} strokeWidth={1.5} />
            <span className="text-sm tracking-wide">Miraflores & Barranco, Lima</span>
          </div>
        </div>

        {/* Footer / CTA */}
        <footer className="mt-16 flex flex-col items-center slide-up" style={{ animationDelay: '1.2s' }}>
          {!confirmed ? (
            <button
              onClick={() => setConfirmed(true)}
              className="group relative inline-flex items-center gap-2 px-10 py-4 bg-gray-800 text-white text-sm tracking-widest uppercase overflow-hidden transition-all hover:bg-gray-700 active:scale-95"
            >
              <span className="relative z-10">¿Te gustaría acompañarnos?</span>
              <ChevronRight size={14} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            </button>
          ) : (
            <div className="text-center animate-bounce duration-1000">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 mb-4">
                <Check size={20} className="text-gray-600" />
              </div>
              <p className="text-sm text-gray-600 italic">Gracias por considerar la invitación. Estaré atento a lo que decidas.</p>
            </div>
          )}
          
          <p className="mt-8 text-[10px] text-gray-400 uppercase tracking-widest text-center">
            Sin compromisos, solo la intención de una tarde amena.
          </p>
        </footer>

      </main>

      {/* Floating refinement details */}
      <footer className="mt-12 text-gray-400 text-[10px] tracking-[0.4em] uppercase opacity-60">
        Lima &bull; MMXXIV
      </footer>
    </div>
  );
};

export default App;
