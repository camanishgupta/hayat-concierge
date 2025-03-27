
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Send, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';
import Footer from '@/components/Footer';

const Contact = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    inquiry: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: '',
        email: '',
        phone: '',
        inquiry: '',
        message: ''
      });
      
      // Reset submission status after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative">
        <div className="container mx-auto max-w-4xl text-center">
          <span 
            className={cn(
              "inline-block py-1 px-3 bg-navy/10 text-navy rounded-full text-sm font-medium mb-6 opacity-0 transform translate-y-4 transition-all duration-700",
              { "opacity-100 translate-y-0": isLoaded }
            )}
          >
            Connect With Us
          </span>
          <h1 
            className={cn(
              "heading-xl hero-text-gradient mb-6 opacity-0 transform translate-y-4 transition-all duration-700 delay-100",
              { "opacity-100 translate-y-0": isLoaded }
            )}
          >
            Let's Plan Your Journey
          </h1>
          <p 
            className={cn(
              "subheading mx-auto opacity-0 transform translate-y-4 transition-all duration-700 delay-200",
              { "opacity-100 translate-y-0": isLoaded }
            )}
          >
            We're here to curate a bespoke Thai experience tailored to your specific needs and preferences.
          </p>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="container mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div 
            className={cn(
              "glass-card p-8 opacity-0 transform translate-y-8 transition-all duration-700 delay-300",
              { "opacity-100 translate-y-0": isLoaded }
            )}
          >
            <h2 className="heading-lg mb-6 text-navy">Contact Information</h2>
            <p className="text-muted-foreground mb-8">
              Our team of expert concierges is available to assist you in planning your perfect Thai experience, 
              from medical tourism to luxury wellness retreats.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-navy/10 p-3 rounded-full">
                  <Phone className="w-5 h-5 text-navy" />
                </div>
                <div>
                  <h3 className="font-medium text-navy">Phone</h3>
                  <p className="text-muted-foreground">+66 2 345 6789</p>
                  <p className="text-muted-foreground">Available 24/7</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-navy/10 p-3 rounded-full">
                  <Mail className="w-5 h-5 text-navy" />
                </div>
                <div>
                  <h3 className="font-medium text-navy">Email</h3>
                  <p className="text-muted-foreground">concierge@bespokethai.com</p>
                  <p className="text-muted-foreground">Response within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-navy/10 p-3 rounded-full">
                  <MapPin className="w-5 h-5 text-navy" />
                </div>
                <div>
                  <h3 className="font-medium text-navy">Office</h3>
                  <p className="text-muted-foreground">Sukhumvit Road, Bangkok</p>
                  <p className="text-muted-foreground">Thailand 10110</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Form */}
          <div 
            className={cn(
              "glass-card p-8 opacity-0 transform translate-y-8 transition-all duration-700 delay-400",
              { "opacity-100 translate-y-0": isLoaded }
            )}
          >
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6">
                <div className="bg-green-50 rounded-full p-3 mb-4">
                  <CheckCircle className="w-12 h-12 text-green-500" />
                </div>
                <h3 className="heading-md mb-3 text-navy">Message Received!</h3>
                <p className="text-muted-foreground">
                  Thank you for reaching out. One of our concierge specialists will contact you shortly to discuss your travel plans.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="heading-lg mb-6 text-navy">Send Us a Message</h2>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-navy">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      className="mt-1"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email" className="text-navy">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        className="mt-1"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-navy">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleInputChange}
                        placeholder="+66 123 456 789"
                        className="mt-1"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="inquiry" className="text-navy">Type of Inquiry</Label>
                    <select
                      id="inquiry"
                      name="inquiry"
                      value={formState.inquiry}
                      onChange={handleInputChange}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mt-1"
                      required
                    >
                      <option value="">Select an option</option>
                      <option value="medical">Medical Tourism</option>
                      <option value="wellness">Wellness Retreat</option>
                      <option value="luxury">Luxury Travel</option>
                      <option value="accommodation">Accommodation</option>
                      <option value="transportation">Transportation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-navy">Your Message</Label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your travel needs and preferences..."
                      className="flex min-h-32 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mt-1"
                      required
                    />
                  </div>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="button-primary w-full flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>Sending...</>
                  ) : (
                    <>
                      Send Message <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
