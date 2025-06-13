"use client"
import React, { useState, useEffect, useRef } from "react";
import { ChevronRight, Sparkles, Zap, Users, Shield, ArrowRight, Check, Star } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";

const LandingPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  
  const heroRef = useRef<HTMLElement>(null);
  const featuresRef = useRef<HTMLElement>(null);
  const testimonialsRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % 3);
    }, 4000);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const sections = [heroRef.current, featuresRef.current, testimonialsRef.current, ctaRef.current];
    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const features = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "AI-Powered Creation",
      description: "Generate high-quality content in seconds with our advanced AI technology"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Create blog posts, social media content, and more in just a few clicks"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Collaboration",
      description: "Work together seamlessly with your team on all your content projects"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure & Private",
      description: "Your data is protected with enterprise-grade security and privacy"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Content Marketing Manager",
      content: "This AI tool has revolutionized our content creation process. We're now 3x faster!",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Digital Marketer",
      content: "The quality of content generated is exceptional. It's like having a professional writer on demand.",
      rating: 5
    },
    {
      name: "Emily Watson",
      role: "Social Media Specialist",
      content: "From blog posts to social media captions, this tool handles everything perfectly.",
      rating: 5
    }
  ];

  const stats = [
    { number: "50K+", label: "Content Pieces Generated" },
    { number: "10K+", label: "Happy Users" },
    { number: "99.9%", label: "Uptime" },
    { number: "24/7", label: "Support" }
  ];
  return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50 transition-all duration-500 ${
        scrollY > 50 ? 'shadow-lg bg-white/95' : ''
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className={`flex items-center space-x-2 transition-all duration-700 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}>
              <div className="flex items-center justify-center">
                <Image src={'./logoipsum-custom-logo.svg'} alt="Logo" width={160} height={160} />
              </div>
            </div>
            <div className={`flex items-center space-x-4 transition-all duration-700 delay-200 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}>
              {/* <Link href={'/sign-in'}>
                <button className="text-slate-600 hover:text-slate-900 px-4 py-2 rounded-lg hover:bg-slate-100 transition-all duration-200 hover:scale-105 cursor-pointer">
                  Login
                </button>
              </Link> */}
              <Link href={'/dashboard'}>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 cursor-pointer">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} id="hero" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div 
            className="absolute top-20 left-10 w-20 h-20 bg-blue-200/30 rounded-full blur-xl animate-bounce"
            style={{ animationDelay: '0s', animationDuration: '6s' }}
          />
          <div 
            className="absolute top-40 right-20 w-16 h-16 bg-purple-200/30 rounded-full blur-xl animate-bounce"
            style={{ animationDelay: '2s', animationDuration: '8s' }}
          />
          <div 
            className="absolute bottom-20 left-1/4 w-12 h-12 bg-pink-200/30 rounded-full blur-xl animate-bounce"
            style={{ animationDelay: '4s', animationDuration: '7s' }}
          />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className={`inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8 transition-all duration-700 delay-300 ${
              isVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
            } hover:scale-105 hover:bg-blue-100 cursor-pointer`}>
              <Star className="w-4 h-4 animate-spin" style={{ animationDuration: '3s' }} />
              <span>Now powered by Google Gemini</span>
            </div>
            
            <h1 className={`text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 bg-clip-text text-transparent leading-tight`}>
              <span className="inline-block">Create</span>{' '}
              <span className="inline-block">Amazing</span>{' '}
              <span className="inline-block">Content</span>
              <br />
              <span className="text-4xl md:text-6xl inline-block">with</span>{' '}
              <span className="text-4xl md:text-6xl inline-block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">AI Magic</span>
            </h1>
            
            <p className={`text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              Transform your ideas into compelling content in seconds. From blog posts to social media, 
              our AI-powered platform helps you create professional content that engages and converts.
            </p>
            
            <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 transition-all duration-1000 delay-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}>
              <Link href={'/dashboard'}>
                <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-2xl transform hover:scale-110 transition-all duration-300 flex items-center space-x-2 hover:-translate-y-1 animate-pulse hover:animate-none cursor-pointer">
                  <span>Start Creating Free</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </button>
              </Link>
              <button className="text-slate-700 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-slate-100 transition-all duration-300 flex items-center space-x-2 hover:scale-105 hover:-translate-y-1 cursor-pointer">
                <span>Watch Demo</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 transition-all duration-1200 delay-1200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
          }`}>
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`text-center transform transition-all duration-500 hover:scale-110 hover:-translate-y-2`}
                style={{ 
                  animationDelay: `${1400 + index * 200}ms`,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  opacity: isVisible ? 1 : 0
                }}
              >
                <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2 hover:text-blue-600 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-50" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            visibleSections.has('features') ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 hover:scale-105 transition-transform duration-300">
              Powerful Features for
              <span className="block text-blue-600 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Modern Content Creation</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Everything you need to create, manage, and optimize your content workflow
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`group p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 hover:shadow-xl hover:scale-105 transition-all duration-500 hover:-translate-y-2 hover:rotate-1 cursor-pointer ${
                  visibleSections.has('features') ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
                }`}
                style={{ 
                  transitionDelay: `${index * 150}ms`,
                  animation: visibleSections.has('features') ? `slideInUp 0.8s ease-out ${index * 150}ms both` : 'none'
                }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                  {feature.description}
                </p>
                <div className="mt-4 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section ref={testimonialsRef} id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-purple-50 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-300/20 rounded-full blur-2xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-300/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className={`text-4xl font-bold text-slate-900 mb-16 transition-all duration-1000 ${
            visibleSections.has('testimonials') ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          } hover:scale-105 transition-transform duration-300`}>
            Loved by Content Creators Worldwide
          </h2>
          
          <div className="relative">
            <div className={`bg-white rounded-2xl p-8 shadow-lg transform transition-all duration-1000 ${
              visibleSections.has('testimonials') ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-8'
            } hover:shadow-2xl hover:scale-105 hover:-translate-y-2 cursor-pointer`}>
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-5 h-5 text-yellow-400 fill-current transform hover:scale-125 transition-transform duration-300 animate-pulse" 
                    style={{ animationDelay: `${i * 100}ms` }}
                  />
                ))}
              </div>
              <blockquote className="text-xl text-slate-700 mb-6 italic leading-relaxed hover:text-slate-900 transition-colors duration-300">
                "{testimonials[currentTestimonial].content}"
              </blockquote>
              <div className="space-y-2">
                <div className="font-semibold text-slate-900 hover:text-blue-600 transition-colors duration-300">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-slate-600">{testimonials[currentTestimonial].role}</div>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-500 transform hover:scale-150 cursor-pointer ${
                    index === currentTestimonial 
                      ? 'bg-blue-600 scale-125' 
                      : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Content?
          </h2>
          <p className="text-xl mb-12 opacity-90">
            Join thousands of creators who are already using AI to supercharge their content workflow
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 cursor-pointer">
              <span>Get Started Free</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 cursor-pointer">
              Login to Account
            </button>
          </div>
          
          <div className="mt-8 flex items-center justify-center space-x-6 text-sm opacity-80">
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4" />
              <span>Free forever plan</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="rounded-lg flex gap-2 justify-center items-center">
                  <Image src={'/logoipsum-365.svg'} alt="Logo" width={30} height={30} />
                  <span className="font-bold text-2xl">Content.AI</span>
                </div>
              </div>
              <p className="text-slate-400">
                Empowering creators with AI-powered content generation tools.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
            <p>&copy; 2025 Content.AI All rights reserved.</p>
          </div>
        </div>
      </footer>
      
    </div>
  );
}

export default LandingPage;