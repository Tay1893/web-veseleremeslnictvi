import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Hammer,
  Wrench,
  PaintBucket,
  Zap,
  Phone,
  Mail,
  MapPin,
  Star,
  Users,
  Award,
  Clock,
  CheckCircle,
  Menu,
  X,
  Shield,
  Cookie
} from 'lucide-react'

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showCookieConsent, setShowCookieConsent] = useState(true)
  const [showGdprModal, setShowGdprModal] = useState(false)
  
  const services = [
    {
      icon: <Hammer className="h-12 w-12 text-amber-600" />,
      title: "Opravy a údržba",
      description: "Kompletní opravy v domácnosti, údržba a drobné stavební práce"
    },
    {
      icon: <PaintBucket className="h-12 w-12 text-blue-600" />,
      title: "Malování a lakování",
      description: "Profesionální malování interiérů a exteriérů, lakování nábytku"
    },
    {
      icon: <Zap className="h-12 w-12 text-yellow-600" />,
      title: "Elektroinstalace",
      description: "Bezpečné elektroinstalační práce, výměna vypínačů a zásuvek"
    },
    {
      icon: <Wrench className="h-12 w-12 text-green-600" />,
      title: "Instalatérské práce",
      description: "Opravy vodovodních a kanalizačních systémů, výměna baterií"
    }
  ]
  
  const testimonials = [
    {
      name: "Jana Svobodová",
      location: "Praha 6",
      rating: 5,
      text: "Vynikající služby! Pan mistr přijel přesně na čas a opravil všechno perfektně. Určitě doporučuji!"
    },
    {
      name: "Tomáš Novák",
      location: "Praha 2",
      rating: 5,
      text: "Profesionální přístup, fair ceny a kvalitní práce. Konečně jsem našel spolehlivého řemeslníka."
    },
    {
      name: "Marie Procházková",
      location: "Praha 10",
      rating: 5,
      text: "Rychlá domluva, přesnost a skvělý výsledek. Budu určitě využívat jejich služby i nadále."
    }
  ]
  
  const galleryImages = [
    "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1609778074620-c3ddb2a1b3ee?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1493663284031-b7e3aaa4435e?w=400&h=300&fit=crop"
  ]
  
  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (consent) {
      setShowCookieConsent(false)
    }
  }, [])
  
  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    setShowCookieConsent(false)
  }
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Hammer className="h-8 w-8 text-amber-600 mr-3" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">Veseležemeslnictví</h1>
                <p className="text-sm text-gray-600">s.r.o</p>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('uvod')} className="text-gray-700 hover:text-amber-600 transition-colors">Úvod</button>
              <button onClick={() => scrollToSection('sluzby')} className="text-gray-700 hover:text-amber-600 transition-colors">Služby</button>
              <button onClick={() => scrollToSection('recenze')} className="text-gray-700 hover:text-amber-600 transition-colors">Recenze</button>
              <button onClick={() => scrollToSection('galerie')} className="text-gray-700 hover:text-amber-600 transition-colors">Galerie</button>
              <button onClick={() => scrollToSection('kontakt')} className="text-gray-700 hover:text-amber-600 transition-colors">Kontakt</button>
            </div>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-amber-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('uvod')} className="block px-3 py-2 text-gray-700 hover:text-amber-600">Úvod</button>
              <button onClick={() => scrollToSection('sluzby')} className="block px-3 py-2 text-gray-700 hover:text-amber-600">Služby</button>
              <button onClick={() => scrollToSection('recenze')} className="block px-3 py-2 text-gray-700 hover:text-amber-600">Recenze</button>
              <button onClick={() => scrollToSection('galerie')} className="block px-3 py-2 text-gray-700 hover:text-amber-600">Galerie</button>
              <button onClick={() => scrollToSection('kontakt')} className="block px-3 py-2 text-gray-700 hover:text-amber-600">Kontakt</button>
            </div>
          </div>
        )}
      </nav>
      
      {/* Hero Section */}
      <section id="uvod" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Váš spolehlivý
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 block">
                    hodinový manžel
                  </span>
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Profesionální řemeslné služby přímo u vás doma. Opravy, údržba, instalace - vše rychle, kvalitně a za fair cenu.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => scrollToSection('kontakt')} 
                  className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-6 text-lg rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Zavolejte nyní
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => scrollToSection('sluzby')}
                  className="px-8 py-6 text-lg rounded-xl border-2 border-amber-600 text-amber-600 hover:bg-amber-50 transition-all duration-300"
                >
                  Zobrazit služby
                </Button>
              </div>
              
              <div className="flex items-center space-x-8 pt-8">
                <div className="flex items-center">
                  <Users className="h-6 w-6 text-amber-600 mr-2" />
                  <span className="text-gray-700 font-medium">500+ spokojených zákazníků</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-6 w-6 text-amber-600 mr-2" />
                  <span className="text-gray-700 font-medium">15 let zkušeností</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
              <img 
                src="https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&h=400&fit=crop" 
                alt="Řemeslník při práci" 
                className="relative z-10 w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="sluzby" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Naše služby</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Poskytujeme kompletní řemeslné služby pro váš domov. Od drobných oprav až po složitější instalace.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-emerald-100 px-6 py-3 rounded-full">
              <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
              <span className="text-green-800 font-medium">Záruka na všechny práce • Pojištění odpovědnosti • Rychlý příjezd</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section id="recenze" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Co říkají naši zákazníci</h2>
            <p className="text-xl text-gray-600">Přečtěte si recenze od spokojených klientů</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <CardTitle className="text-lg font-bold text-gray-900">{testimonial.name}</CardTitle>
                      <p className="text-sm text-gray-600">{testimonial.location}</p>
                    </div>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 italic leading-relaxed">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Gallery Section */}
      <section id="galerie" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Galerie našich prací</h2>
            <p className="text-xl text-gray-600">Podívejte se na ukázky z realizovaných projektů</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <img 
                  src={image} 
                  alt={`Realizace ${index + 1}`} 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="kontakt" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Kontaktujte nás</h2>
            <p className="text-xl text-gray-300">Jsme tu pro vás 24/7. Neváhejte se ozvat!</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="bg-amber-600 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Telefon</h3>
                  <p className="text-gray-300">+420 123 456 789</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-amber-600 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">E-mail</h3>
                  <p className="text-gray-300">info@veselezemesilnictvi.cz</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-amber-600 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Adresa</h3>
                  <p className="text-gray-300">Praha a okolí</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-amber-600 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Pracovní doba</h3>
                  <p className="text-gray-300">Pondělí - Pátek: 7:00 - 19:00</p>
                  <p className="text-gray-300">Víkend: 9:00 - 17:00</p>
                </div>
              </div>
            </div>
            
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Rychlá poptávka</CardTitle>
                <CardDescription className="text-gray-300">
                  Napište nám a my se vám ozveme do 24 hodin
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Jméno</label>
                  <input 
                    type="text" 
                    placeholder="Zadejte vaše jméno..."
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">E-mail</label>
                  <input 
                    type="email" 
                    placeholder="vas@email.cz"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Zpráva</label>
                  <textarea 
                    rows={4} 
                    placeholder="Popište co potřebujete opravit nebo nainstalovat..."
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  Odeslat poptávku
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Hammer className="h-8 w-8 text-amber-600 mr-3" />
                <div>
                  <h3 className="text-xl font-bold">Veseležemeslnictví</h3>
                  <p className="text-sm text-gray-400">s.r.o</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Profesionální řemeslné služby v Praze a okolí. Spolehlivost, kvalita a fair ceny.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Služby</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Opravy a údržba</li>
                <li>Malování a lakování</li>
                <li>Elektroinstalace</li>
                <li>Instalatérské práce</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
              <div className="space-y-2 text-gray-400">
                <p>📞 +420 123 456 789</p>
                <p>📧 info@veselezemesilnictvi.cz</p>
                <p>📍 Praha a okolí</p>
              </div>
            </div>
          </div>
          
          <hr className="border-gray-700 my-8" />
          
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; 2024 Veseležemeslnictví s.r.o. Všechna práva vyhrazena.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button 
                onClick={() => setShowGdprModal(true)}
                className="hover:text-white transition-colors"
              >
                Zásady GDPR
              </button>
              <span>|</span>
              <a href="#" className="hover:text-white transition-colors">Podmínky použití</a>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Cookie Consent */}
      {showCookieConsent && (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm text-white p-4 z-50">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center">
              <Cookie className="h-6 w-6 text-amber-600 mr-3 flex-shrink-0" />
              <p className="text-sm">
                Používáme cookies pro zlepšení vašeho zážitku na našem webu. Pokračováním souhlasíte s jejich použitím.
              </p>
            </div>
            <div className="flex gap-3">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => setShowGdprModal(true)}
                className="border-white/30 text-white hover:bg-white/10"
              >
                Více informací
              </Button>
              <Button 
                size="sm" 
                onClick={acceptCookies}
                className="bg-amber-600 hover:bg-amber-700 text-white"
              >
                Souhlasím
              </Button>
            </div>
          </div>
        </div>
      )}
      
      {/* GDPR Modal */}
      {showGdprModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Shield className="h-6 w-6 text-blue-600 mr-2" />
                  <CardTitle>Ochrana osobních údajů (GDPR)</CardTitle>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setShowGdprModal(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <div>
                <h4 className="font-semibold mb-2">Správce osobních údajů</h4>
                <p>Veseležemeslnictví s.r.o, IČO: 12345678, Praha</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Jaké údaje zpracováváme</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Jméno a kontaktní údaje (telefon, e-mail)</li>
                  <li>Informace o požadovaných službách</li>
                  <li>Cookies pro fungování webu</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Účel zpracování</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Poskytnutí požadovaných služeb</li>
                  <li>Komunikace se zákazníky</li>
                  <li>Zlepšení kvality služeb</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Vaše práva</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Právo na přístup k údajům</li>
                  <li>Právo na opravu nebo výmaz</li>
                  <li>Právo na omezení zpracování</li>
                  <li>Právo na přenositelnost údajů</li>
                </ul>
              </div>
              
              <div>
                <p className="text-gray-600">
                  Pro více informací nebo uplatnění svých práv nás kontaktujte na info@veselezemesilnictvi.cz
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}