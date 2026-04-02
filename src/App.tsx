import { ReactNode } from "react";
import { motion } from "motion/react";
import { 
  Instagram, 
  MessageCircle, 
  MapPin, 
  Phone, 
  Star,
  ArrowRight,
  Sparkles,
  Heart
} from "lucide-react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

interface LinkButtonProps {
  href: string;
  icon: ReactNode;
  label: string;
  ariaLabel: string;
  color: string;
}

const LinkButton = ({ href, icon, label, ariaLabel, color }: LinkButtonProps) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={ariaLabel}
    className="glass flex items-center gap-4 w-full p-5 mb-6 rounded-3xl transition-all duration-500 hover:bg-white/20 group"
    whileHover={{ scale: 1.03, x: 5 }}
    whileTap={{ scale: 0.97 }}
  >
    <div className={`flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${color} text-white shadow-lg shadow-black/20`}>
      {icon}
    </div>
    <span className="text-xl font-semibold tracking-tight">{label}</span>
    <ArrowRight className="ml-auto w-6 h-6 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all" />
  </motion.a>
);

interface TestimonialProps {
  name: string;
  text: string;
}

const TestimonialCard = ({ name, text }: TestimonialProps) => (
  <article className="glass-dark p-8 mb-6 rounded-[2.5rem] relative overflow-hidden group">
    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
      <Heart className="w-12 h-12 text-brand-pink" />
    </div>
    <div className="flex items-center gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-5 h-5 text-brand-cyan fill-brand-cyan" />
      ))}
    </div>
    <h3 className="text-xl font-bold mb-3 text-white">{name}</h3>
    <p className="text-white/70 italic leading-relaxed text-lg">"{text}"</p>
  </article>
);

export default function App() {
  return (
    <div className="min-h-screen bg-mesh relative pb-20">
      {/* Decorative background elements */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-pink/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-cyan/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-md mx-auto px-6 pt-16 relative z-10">
        {/* Header Section */}
        <header className="flex flex-col items-center text-center mb-16">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative mb-8 p-1 rounded-full bg-gradient-to-tr from-brand-pink via-brand-purple to-brand-cyan animate-float"
          >
            <div className="p-1 bg-[#0F0F1A] rounded-full">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#1A1A2E] to-[#0F0F1A] flex flex-col items-center justify-center border border-white/10 shadow-2xl relative overflow-hidden">
                {/* Decorative glow */}
                <div className="absolute inset-0 bg-brand-purple/5 blur-xl" />
                
                <span className="text-5xl font-serif font-bold text-white leading-none tracking-tighter z-10">KF</span>
                <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-white/40 to-transparent my-1 z-10" />
                <span className="text-[8px] font-bold text-white tracking-[0.2em] uppercase z-10">Espaçokfarias</span>
                <span className="text-[6px] text-white/60 tracking-[0.1em] uppercase z-10">Nail Designer</span>
              </div>
            </div>
            <motion.div 
              className="absolute -bottom-2 -right-2 bg-brand-cyan p-2 rounded-2xl shadow-xl"
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
            >
              <Sparkles className="w-6 h-6 text-[#0F0F1A]" />
            </motion.div>
          </motion.div>
          
          <h1 className="text-4xl font-extrabold mb-3 tracking-tighter">
            <span className="text-gradient">espacokfarias</span>
          </h1>
          <p className="text-white/60 text-lg font-medium tracking-wide uppercase text-sm">
            Especialista em Unhas & Bem-estar
          </p>
        </header>

        <main>
          {/* Services Section */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-8 px-2 flex items-center gap-3">
              <span className="w-8 h-1 bg-brand-cyan rounded-full" />
              Nossos Serviços
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {[
                "Alongamento de Unha",
                "Manicure",
                "Pedicure",
                "Spa dos Pés",
                "Depilação"
              ].map((service, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass p-4 rounded-2xl flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-pink/20 flex items-center justify-center text-brand-pink">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <span className="text-lg font-medium">{service}</span>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Quick Links Section */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-8 px-2 flex items-center gap-3">
              <span className="w-8 h-1 bg-brand-pink rounded-full" />
              Agendamento & Contato
            </h2>
            <nav>
              <LinkButton 
                href="https://wa.me/5516993930395"
                icon={<MessageCircle className="w-7 h-7" />}
                label="Agendar via WhatsApp"
                ariaLabel="Enviar mensagem para espacokfarias via WhatsApp"
                color="from-green-400 to-emerald-600"
              />
              <LinkButton 
                href="https://www.instagram.com/espacokfarias/"
                icon={<Instagram className="w-7 h-7" />}
                label="Ver Portfólio no Insta"
                ariaLabel="Instagram de espacokfarias"
                color="from-pink-500 via-purple-500 to-orange-500"
              />
              <LinkButton 
                href="https://www.google.com/maps/search/?api=1&query=Rua+João+Penteado,+953+-+Jardim+Sumaré"
                icon={<MapPin className="w-7 h-7" />}
                label="Localização & Horários"
                ariaLabel="Ver endereço e horário de funcionamento no Google Maps"
                color="from-brand-cyan to-blue-600"
              />
              <LinkButton 
                href="tel:+5516993930395"
                icon={<Phone className="w-7 h-7" />}
                label="Ligar para espacokfarias"
                ariaLabel="Ligar para espacokfarias"
                color="from-brand-purple to-indigo-700"
              />
            </nav>
          </section>

          {/* Testimonials Section */}
          <section className="mb-20">
            <div className="flex items-center justify-between mb-10 px-2">
              <h2 className="text-2xl font-bold">Feedback Real</h2>
              <div className="glass px-4 py-2 rounded-2xl flex items-center gap-2">
                <Star className="w-5 h-5 text-brand-cyan fill-brand-cyan" />
                <span className="font-bold">5.0</span>
              </div>
            </div>
            
            <TestimonialCard 
              name="Ellayne Mirian"
              text="Uma ótima profissional, um bom lugar, muita conversa e papo bom."
            />
            <TestimonialCard 
              name="Joyce Michelly"
              text="Ótimo atendimento, um trabalho lindo!"
            />
            <TestimonialCard 
              name="Shayane Iris"
              text="Ambiente agradável e profissional super atenciosa."
            />
          </section>

          {/* Gallery Section */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-8 px-2 flex items-center gap-3">
              <span className="w-8 h-1 bg-brand-purple rounded-full" />
              Galeria de Luxo
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=800",
                "https://images.unsplash.com/photo-1604654894610-df490c96827f?q=80&w=800",
                "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=800",
                "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800",
                "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=800",
                "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?q=80&w=800",
                "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800",
                "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=800"
              ].map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="aspect-square rounded-2xl overflow-hidden glass border border-white/10"
                >
                  <img 
                    src={img} 
                    alt={`Trabalho espacokfarias ${index + 1}`}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              ))}
            </div>
          </section>
        </main>

        {/* Footer Section */}
        <footer className="text-center pt-12 border-t border-white/10">
          <div className="mb-10 text-white/50 space-y-4">
            <p className="flex items-center justify-center gap-3 text-lg">
              <MapPin className="w-6 h-6 text-brand-cyan" />
              R. João Penteado, 953 - Jardim Sumaré
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-brand-cyan font-bold">
              <div className="w-2 h-2 bg-brand-cyan rounded-full animate-pulse" />
              Aberto: 08:00 - 18:00
            </div>
          </div>

          <p className="text-sm text-white/30">
            © 2026 espacokfarias. 
            <br />
            Beleza e Confiança em cada detalhe.
          </p>
        </footer>
      </div>
    </div>
  );
}
