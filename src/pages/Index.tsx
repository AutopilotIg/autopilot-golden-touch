import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Bot, MessageSquare, Palette, Globe, Brain, Zap, Clock, TrendingUp, Users, Star, Shield, ArrowRight, Instagram, MessageCircle, ChevronDown } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const services = [{
    icon: Bot,
    title: "Chatbot Inteligente",
    description: "Automatiza las respuestas a tus clientes 24/7 con IA avanzada que entiende y responde naturalmente."
  }, {
    icon: MessageSquare,
    title: "Mensajería Automática",
    description: "Envía mensajes personalizados y secuencias automatizadas que nutren y convierten leads."
  }, {
    icon: Palette,
    title: "Generación de Contenido",
    description: "Crea contenido visual y textual de alta calidad para mantener tu Instagram siempre activo."
  }, {
    icon: Globe,
    title: "Diseño Web Profesional",
    description: "Páginas web modernas y optimizadas que convierten visitantes en clientes."
  }, {
    icon: Brain,
    title: "Asistencia IA",
    description: "Soporte inteligente que aprende de tu negocio para brindar respuestas precisas."
  }];
  const benefits = [{
    icon: Clock,
    title: "Ahorra 80% del tiempo",
    description: "Automatiza tareas repetitivas y enfócate en hacer crecer tu negocio"
  }, {
    icon: TrendingUp,
    title: "Aumenta ventas 300%",
    description: "Respuestas instantáneas que convierten más leads en clientes"
  }, {
    icon: Users,
    title: "Atención 24/7",
    description: "Nunca pierdas un cliente por no estar disponible"
  }, {
    icon: Shield,
    title: "100% Confiable",
    description: "Tecnología probada por miles de empresas exitosas"
  }];
  const testimonials = [{
    name: "María González",
    business: "Fashion Store",
    text: "Desde que implementé AUTOPILOT, mis ventas aumentaron 250%. El chatbot responde mejor que yo misma.",
    rating: 5
  }, {
    name: "Carlos Ruiz",
    business: "Digital Agency",
    text: "La automatización de mensajes ha sido increíble. Ahora puedo manejar 10 veces más clientes sin esfuerzo.",
    rating: 5
  }, {
    name: "Ana Martínez",
    business: "Beauty Salon",
    text: "El contenido generado automáticamente mantiene mi Instagram activo y mis clientes siempre comprometidos.",
    rating: 5
  }];
  const faqs = [{
    question: "¿Qué tan rápido puedo ver resultados?",
    answer: "Los primeros resultados son inmediatos. Una vez configurado, tu chatbot estará respondiendo al instante y verás un aumento en engagement en las primeras 24 horas."
  }, {
    question: "¿Necesito conocimientos técnicos?",
    answer: "No necesitas ningún conocimiento técnico. Nosotros nos encargamos de toda la configuración y te enseñamos a usar el sistema de manera simple."
  }, {
    question: "¿Funciona con cualquier tipo de negocio?",
    answer: "Sí, AUTOPILOT se adapta a cualquier industria: e-commerce, servicios, restaurantes, salones de belleza, consultorías y más."
  }, {
    question: "¿Qué soporte incluye?",
    answer: "Incluye configuración completa, capacitación personalizada, soporte técnico 24/7 y actualizaciones gratuitas del sistema."
  }, {
    question: "¿Puedo personalizar las respuestas?",
    answer: "Completamente. El sistema aprende de tu negocio y puedes personalizar cada respuesta para que suene exactamente como tu marca."
  }];
  return <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <Badge className="mb-8 bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-bold px-6 py-2 text-lg">
            AUTOPILOT
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-yellow-200 to-yellow-400 bg-clip-text text-transparent leading-tight">
            Más ventas.<br />
            Menos esfuerzo.<br />
            <span className="text-yellow-400">Todo automático.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Automatiza tu Instagram con IA avanzada. Chatbots inteligentes, contenido automático y estrategias que convierten seguidores en clientes mientras duermes.
          </p>
          
          <Button size="lg" className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black font-bold px-12 py-4 text-lg rounded-full transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-yellow-500/25" onClick={() => window.open('https://www.instagram.com/autopilot.ig', '_blank')}>
            Comenzar Ahora
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
        
        {/* Floating elements for visual appeal */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full opacity-20 animate-pulse delay-1000"></div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-yellow-400 bg-clip-text text-transparent">
              Servicios Premium
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Tecnología de vanguardia para automatizar y hacer crecer tu presencia en Instagram
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => <Card key={index} className="bg-gray-900/50 border-gray-800 hover:border-yellow-500/50 transition-all duration-300 group hover:transform hover:scale-105">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-full flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-yellow-500/25 transition-all duration-300">
                    <service.icon className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-yellow-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-6 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-yellow-400 bg-clip-text text-transparent">
              ¿Por qué AUTOPILOT?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Resultados comprobados que transforman tu negocio
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg group-hover:shadow-yellow-500/25 transition-all duration-300">
                  <benefit.icon className="h-10 w-10 text-black" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-yellow-400">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-yellow-400 bg-clip-text text-transparent">
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Historias reales de éxito con AUTOPILOT
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => <Card key={index} className="bg-gray-900/50 border-gray-800 hover:border-yellow-500/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />)}
                  </div>
                  <p className="text-gray-300 mb-6 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <p className="font-bold text-white">{testimonial.name}</p>
                    <p className="text-yellow-400 text-sm">{testimonial.business}</p>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-gray-900/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-yellow-400 bg-clip-text text-transparent">
              Preguntas Frecuentes
            </h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => <Card key={index} className="bg-gray-900/50 border-gray-800">
                <CardContent className="p-0">
                  <button className="w-full text-left p-6 hover:bg-gray-800/50 transition-colors flex items-center justify-between" onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                    <span className="font-bold text-lg text-white">{faq.question}</span>
                    <ChevronDown className={`h-5 w-5 text-yellow-400 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === index && <div className="px-6 pb-6">
                      <Separator className="mb-4 bg-gray-700" />
                      <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                    </div>}
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-yellow-400 bg-clip-text text-transparent">
            ¿Listo para automatizar tu éxito?
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Únete a miles de empresarios que ya transformaron su negocio con AUTOPILOT. 
            Tu competencia ya está automatizando, ¿vas a quedarte atrás?
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black font-bold px-12 py-4 text-lg rounded-full transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-yellow-500/25" onClick={() => window.open('https://www.instagram.com/autopilot.ig', '_blank')}>
              Comenzar Ahora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button size="lg" variant="outline" className="border-2 border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black font-bold px-12 py-4 text-lg rounded-full transform hover:scale-105 transition-all duration-300 flex items-center" onClick={() => window.open('https://www.instagram.com/autopilot.ig', '_blank')}>
              <Instagram className="mr-3 h-6 w-6" />
              Síguenos en Instagram
            </Button>
          </div>
          
          <p className="text-gray-500 text-sm mt-8">
            * Garantía de satisfacción 100% • Soporte técnico incluido • Sin compromisos a largo plazo
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-4 bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-bold px-4 py-2">
            AUTOPILOT
          </Badge>
          <p className="text-gray-400 mb-4">
            Automatización premium para Instagram • Tecnología que convierte
          </p>
          <p className="text-gray-600 text-sm">
            © 2024 AUTOPILOT. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>;
};

export default Index;
