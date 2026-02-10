
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Cpu } from 'lucide-react';

const About: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Cambiado a ruta local. 
  // IMPORTANTE: Guarda tu foto como 'profile.png' en la carpeta raíz del proyecto.
  const profileImageUrl = "./profile.png";

  return (
    <section className="py-24 px-4 bg-slate-950 relative overflow-hidden">
      {/* Luces de fondo sutiles */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-purple-600/10 blur-[120px] pointer-events-none" />
      
      <div className="container max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: -20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Marco Neón Cyberpunk */}
            <div className="aspect-[3/4] glass rounded-[2.5rem] relative z-10 overflow-hidden group border-purple-500/20 shadow-2xl shadow-purple-500/5">
               
               {/* Estado "Encrypted / Identity Hidden" si la imagen falla */}
               {(!imageLoaded || imageError) && (
                 <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/80 space-y-6 p-8">
                   <div className="relative">
                      <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        className="w-24 h-24 rounded-full border-2 border-dashed border-purple-500/30 flex items-center justify-center"
                      />
                      <Cpu className="w-10 h-10 text-purple-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                   </div>
                   <div className="text-center space-y-2">
                     <p className="text-[10px] font-black uppercase tracking-[0.3em] text-purple-400">Identity Encrypted</p>
                     <p className="text-xs text-slate-500 font-light leading-relaxed">
                        {imageError 
                          ? "Error: 'profile.png' no detectado en el directorio local." 
                          : "Accediendo a base de datos de red..."}
                     </p>
                   </div>
                   <div className="flex gap-1">
                      {[1,2,3,4,5].map(i => (
                        <div key={i} className="w-1 h-1 bg-purple-500/50 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                      ))}
                   </div>
                 </div>
               )}

               {/* Imagen de Perfil */}
               {!imageError && (
                 <img 
                   src={profileImageUrl}
                   alt="Victor Manuel Gonzalez" 
                   className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                   onLoad={() => setImageLoaded(true)}
                   onError={() => setImageError(true)}
                 />
               )}
               
               {/* Capas de Estilo */}
               <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60 pointer-events-none" />
               <div className="absolute inset-0 opacity-[0.1] pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
               
               {/* Borde Decorativo */}
               <div className="absolute inset-6 border border-white/5 rounded-[1.5rem] pointer-events-none group-hover:border-purple-500/20 transition-colors duration-500" />
            </div>

            {/* Brillos ambientales */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/20 blur-3xl rounded-full z-0 animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-500/10 blur-3xl rounded-full z-0 animate-pulse" style={{ animationDelay: '1s' }} />
          </motion.div>

          {/* Contenido de Texto */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-2">
              <h3 className="text-purple-500 font-black tracking-[0.3em] uppercase text-xs">Ingeniería & Arte</h3>
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
                Victor Manuel <br />
                <span className="text-gradient">Gonzalez.</span>
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-slate-400 text-lg leading-relaxed font-light italic border-l-2 border-purple-500/30 pl-6">
                "Transformando lógica compleja en experiencias digitales inmersivas."
              </p>
              
              <p className="text-slate-400 text-lg leading-relaxed font-light">
                Desarrollador Full-Stack con una visión futurista. Me especializo en arquitecturas robustas impulsadas por **IA** y seguridad en ecosistemas móviles.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-6 border-t border-white/5">
              <div className="space-y-2">
                <h4 className="text-white font-bold text-sm uppercase tracking-wider">Filosofía</h4>
                <p className="text-slate-500 text-xs leading-relaxed">Código limpio, diseño disruptivo y escalabilidad total.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-white font-bold text-sm uppercase tracking-wider">Enfoque</h4>
                <p className="text-slate-500 text-xs leading-relaxed">Seguridad por defecto e IA como herramienta de empoderamiento.</p>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-6">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">4+</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-widest">Años de Exp.</span>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">15+</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-widest">Proyectos</span>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">100%</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-widest">Compromiso</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
