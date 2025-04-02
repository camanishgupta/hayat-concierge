
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from '@/components/ui/use-toast';
import { 
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage 
} from '@/components/ui/form';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Send, CheckCircle, AlertTriangle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import * as emailjs from 'emailjs-com';
import Footer from '@/components/Footer';

// Interface for form data
interface EnquiryFormData {
  name: string;
  email: string;
  phone: string;
  travelerType: string;
  otherTravelerType?: string;
  stayLength: string;
  visitPurpose: string[];
  otherVisitPurpose?: string;
  arrivalDate: string;
  urgency: string;
  otherUrgency?: string;
  travelArrangements: string[];
  accommodation: string[];
  otherAccommodation?: string;
  luxuryServices: string[];
  medicalServices: string[];
  topNeed1: string;
  topNeed2: string;
  topNeed3: string;
  additionalRequests: string;
}

const Enquiry = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const { t, language } = useLanguage();
  
  const form = useForm<EnquiryFormData>({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      travelerType: '',
      stayLength: '',
      visitPurpose: [],
      arrivalDate: '',
      urgency: '',
      travelArrangements: [],
      accommodation: [],
      luxuryServices: [],
      medicalServices: [],
      topNeed1: '',
      topNeed2: '',
      topNeed3: '',
      additionalRequests: ''
    }
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const onSubmit = async (data: EnquiryFormData) => {
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // Format the data for the email
      const emailData = {
        to_email: 'hayat01ourahmoun@gmail.com',
        from_name: data.name,
        reply_to: data.email,
        subject: `New Enquiry from ${data.name}`,
        message: `
          Guest Information:
          Name: ${data.name}
          Email: ${data.email}
          Phone: ${data.phone}
          
          Number of travelers: ${data.travelerType}
          ${data.otherTravelerType ? `Other traveler type: ${data.otherTravelerType}` : ''}
          
          Length of stay: ${data.stayLength}
          
          Purpose of visit: ${data.visitPurpose.join(', ')}
          ${data.otherVisitPurpose ? `Other purpose: ${data.otherVisitPurpose}` : ''}
          
          Expected Arrival & Urgency:
          Planned arrival date: ${data.arrivalDate}
          Urgency: ${data.urgency}
          ${data.otherUrgency ? `Other urgency: ${data.otherUrgency}` : ''}
          
          Services Needed:
          Travel Arrangements: ${data.travelArrangements.join(', ')}
          
          Accommodation: ${data.accommodation.join(', ')}
          ${data.otherAccommodation ? `Other accommodation: ${data.otherAccommodation}` : ''}
          
          Luxury Services: ${data.luxuryServices.join(', ')}
          
          Medical Services: ${data.medicalServices.join(', ')}
          
          Top 3 Absolute Needs:
          1. ${data.topNeed1}
          2. ${data.topNeed2}
          3. ${data.topNeed3}
          
          Additional Requests: ${data.additionalRequests}
        `,
      };
      
      // For testing - simulating a successful email submission
      // In production, uncommment the EmailJS code below and replace the placeholders
      // with your actual EmailJS credentials
      
      console.log("Form data being submitted:", emailData);
      
      // Mock successful form submission - for testing purposes
      setTimeout(() => {
        setIsSubmitted(true);
        toast({
          title: t('enquiry.success'),
          description: t('enquiry.successMessage'),
        });
      }, 1500);
      
      /* Uncomment and replace with your actual EmailJS credentials
      await emailjs.send(
        'YOUR_SERVICE_ID',  // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        emailData,
        'YOUR_USER_ID'      // Replace with your EmailJS user ID
      );
      */
      
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitError(t('enquiry.errorMessage'));
      toast({
        variant: "destructive",
        title: t('enquiry.error'),
        description: t('enquiry.errorMessage'),
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-cream pb-20">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 relative">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 
            className={cn(
              "heading-xl hero-text-gradient mb-6 opacity-0 transform translate-y-4 transition-all duration-700 delay-100",
              { "opacity-100 translate-y-0": isLoaded }
            )}
          >
            {t('enquiry.title')}
          </h1>
          <p 
            className={cn(
              "subheading mx-auto opacity-0 transform translate-y-4 transition-all duration-700 delay-200",
              { "opacity-100 translate-y-0": isLoaded }
            )}
          >
            {t('enquiry.subtitle')}
          </p>
        </div>
      </section>
      
      {/* Enquiry Form */}
      <section className="container mx-auto px-6 max-w-5xl">
        <div 
          className={cn(
            "glass-card p-8 md:p-12 opacity-0 transform translate-y-8 transition-all duration-700 delay-300",
            { "opacity-100 translate-y-0": isLoaded }
          )}
        >
          {isSubmitted ? (
            <div className="text-center py-10">
              <div className="mx-auto mb-6 bg-green-100 w-20 h-20 rounded-full flex items-center justify-center">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <h2 className="heading-lg mb-4">{t('enquiry.success')}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t('enquiry.successMessage')}
              </p>
            </div>
          ) : (
            <>
              <div className="text-center mb-12">
                <h2 className="heading-lg mb-4 text-navy">{t('enquiry.formTitle')}</h2>
                <p className="text-muted-foreground">{t('enquiry.formSubtitle')}</p>
              </div>
              
              {submitError && (
                <div className="mb-8 p-4 bg-red-50 border border-red-100 rounded-lg flex items-center gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                  <p className="text-red-700">{submitError}</p>
                </div>
              )}
              
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-navy">{t('enquiry.name')} *</Label>
                    <Input
                      id="name"
                      {...form.register('name', { required: true })}
                      className="mt-1 bg-white text-black"
                      placeholder={t('enquiry.name')}
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-navy">{t('enquiry.email')} *</Label>
                    <Input
                      id="email"
                      type="email"
                      {...form.register('email', { required: true })}
                      className="mt-1 bg-white text-black"
                      placeholder={t('enquiry.email')}
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-navy">{t('enquiry.phone')}</Label>
                    <Input
                      id="phone"
                      {...form.register('phone')}
                      className="mt-1 bg-white text-black"
                      placeholder={t('enquiry.phone')}
                    />
                  </div>
                </div>
                
                {/* Section 1: Guest Information */}
                <div className="border-t border-gray-200 pt-8">
                  <h3 className="text-xl font-semibold mb-6 text-navy">{t('enquiry.guestInfo')}</h3>
                  
                  <div className="space-y-6">
                    {/* Number of travelers */}
                    <div>
                      <Label className="text-navy mb-3 block">{t('enquiry.numTravelers')} *</Label>
                      <RadioGroup 
                        onValueChange={(value) => form.setValue('travelerType', value)}
                        className="flex flex-wrap gap-4"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="Solo Traveler" id="solo" />
                          <Label htmlFor="solo" className="text-black">{t('enquiry.soloTraveler')}</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="Couple" id="couple" />
                          <Label htmlFor="couple" className="text-black">{t('enquiry.couple')}</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="Family with children" id="family" />
                          <Label htmlFor="family" className="text-black">{t('enquiry.familyWithChildren')}</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="Group of Friends" id="group" />
                          <Label htmlFor="group" className="text-black">{t('enquiry.groupOfFriends')}</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="Other" id="other-traveler" />
                          <Label htmlFor="other-traveler" className="text-black">{t('common.other')}:</Label>
                          <Input 
                            className="w-40 h-8 bg-white text-black"
                            {...form.register('otherTravelerType')}
                          />
                        </div>
                      </RadioGroup>
                    </div>
                    
                    {/* Length of stay */}
                    <div>
                      <Label className="text-navy mb-3 block">{t('enquiry.stayLength')} *</Label>
                      <RadioGroup 
                        onValueChange={(value) => form.setValue('stayLength', value)}
                        className="flex flex-wrap gap-4"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="1-3 days" id="short" />
                          <Label htmlFor="short" className="text-black">{t('enquiry.days1to3')}</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="4-7 days" id="medium" />
                          <Label htmlFor="medium" className="text-black">{t('enquiry.days4to7')}</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="More than a week" id="long" />
                          <Label htmlFor="long" className="text-black">{t('enquiry.moreThanWeek')}</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="Not sure yet" id="not-sure" />
                          <Label htmlFor="not-sure" className="text-black">{t('enquiry.notSureYet')}</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    
                    {/* Purpose of visit */}
                    <div>
                      <Label className="text-navy mb-3 block">{t('enquiry.visitPurpose')} *</Label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="medical" 
                            onCheckedChange={(checked) => {
                              const currentValues = form.getValues('visitPurpose');
                              if (checked) {
                                form.setValue('visitPurpose', [...currentValues, 'Medical Treatment']);
                              } else {
                                form.setValue('visitPurpose', currentValues.filter(v => v !== 'Medical Treatment'));
                              }
                            }}
                          />
                          <Label htmlFor="medical" className="text-black">{t('enquiry.medicalTreatment')}</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="wellness" 
                            onCheckedChange={(checked) => {
                              const currentValues = form.getValues('visitPurpose');
                              if (checked) {
                                form.setValue('visitPurpose', [...currentValues, 'Wellness & Retreats']);
                              } else {
                                form.setValue('visitPurpose', currentValues.filter(v => v !== 'Wellness & Retreats'));
                              }
                            }}
                          />
                          <Label htmlFor="wellness" className="text-black">{t('enquiry.wellness')}</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="luxury" 
                            onCheckedChange={(checked) => {
                              const currentValues = form.getValues('visitPurpose');
                              if (checked) {
                                form.setValue('visitPurpose', [...currentValues, 'Luxury Leisure & Exploration']);
                              } else {
                                form.setValue('visitPurpose', currentValues.filter(v => v !== 'Luxury Leisure & Exploration'));
                              }
                            }}
                          />
                          <Label htmlFor="luxury" className="text-black">{t('enquiry.luxuryLeisure')}</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="business" 
                            onCheckedChange={(checked) => {
                              const currentValues = form.getValues('visitPurpose');
                              if (checked) {
                                form.setValue('visitPurpose', [...currentValues, 'Business & VIP Services']);
                              } else {
                                form.setValue('visitPurpose', currentValues.filter(v => v !== 'Business & VIP Services'));
                              }
                            }}
                          />
                          <Label htmlFor="business" className="text-black">{t('enquiry.businessVIP')}</Label>
                        </div>
                        <div className="flex items-center space-x-2 col-span-1 md:col-span-2">
                          <Checkbox 
                            id="other-purpose" 
                            onCheckedChange={(checked) => {
                              const currentValues = form.getValues('visitPurpose');
                              if (checked) {
                                form.setValue('visitPurpose', [...currentValues, 'Other']);
                              } else {
                                form.setValue('visitPurpose', currentValues.filter(v => v !== 'Other'));
                              }
                            }}
                          />
                          <Label htmlFor="other-purpose" className="text-black">{t('common.other')}:</Label>
                          <Input 
                            className="w-full max-w-xs h-8 bg-white text-black"
                            {...form.register('otherVisitPurpose')}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Section 2: Expected Arrival & Urgency */}
                <div className="border-t border-gray-200 pt-8">
                  <h3 className="text-xl font-semibold mb-6 text-navy">{t('enquiry.arrival')}</h3>
                  
                  <div className="space-y-6">
                    {/* Planned arrival date */}
                    <div>
                      <Label htmlFor="arrival-date" className="text-navy">{t('enquiry.plannedArrival')}</Label>
                      <Input
                        id="arrival-date"
                        type="date"
                        {...form.register('arrivalDate')}
                        className="mt-1 w-full max-w-xs bg-white text-black"
                      />
                    </div>
                    
                    {/* Urgency of visit */}
                    <div>
                      <Label className="text-navy mb-3 block">{t('enquiry.urgency')}</Label>
                      <RadioGroup 
                        onValueChange={(value) => form.setValue('urgency', value)}
                        className="space-y-3"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="Medical emergency" id="emergency" />
                          <Label htmlFor="emergency" className="text-black">{t('enquiry.medicalEmergency')}</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="Scheduled medical treatment" id="scheduled" />
                          <Label htmlFor="scheduled" className="text-black">{t('enquiry.scheduledMedical')}</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="Leisure or wellness" id="leisure" />
                          <Label htmlFor="leisure" className="text-black">{t('enquiry.leisureFlexible')}</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="Other" id="other-urgency" />
                          <Label htmlFor="other-urgency" className="text-black">{t('common.other')}:</Label>
                          <Input 
                            className="w-full max-w-xs h-8 bg-white text-black"
                            {...form.register('otherUrgency')}
                          />
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                </div>
                
                {/* Section 3: Concierge Services Needed */}
                <div className="border-t border-gray-200 pt-8">
                  <h3 className="text-xl font-semibold mb-6 text-navy">{t('enquiry.servicesNeeded')}</h3>
                  
                  <div className="space-y-8">
                    {/* Travel Arrangements */}
                    <div>
                      <Label className="text-navy mb-3 block">{t('enquiry.travelArrangements')}</Label>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="flight" 
                            onCheckedChange={(checked) => {
                              const currentValues = form.getValues('travelArrangements');
                              if (checked) {
                                form.setValue('travelArrangements', [...currentValues, 'Flight Ticket Booking']);
                              } else {
                                form.setValue('travelArrangements', currentValues.filter(v => v !== 'Flight Ticket Booking'));
                              }
                            }}
                          />
                          <Label htmlFor="flight" className="text-black">{t('enquiry.flightBooking')}</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="jet" 
                            onCheckedChange={(checked) => {
                              const currentValues = form.getValues('travelArrangements');
                              if (checked) {
                                form.setValue('travelArrangements', [...currentValues, 'Private Jet Charter']);
                              } else {
                                form.setValue('travelArrangements', currentValues.filter(v => v !== 'Private Jet Charter'));
                              }
                            }}
                          />
                          <Label htmlFor="jet" className="text-black">{t('enquiry.privateJet')}</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="vip-airport" 
                            onCheckedChange={(checked) => {
                              const currentValues = form.getValues('travelArrangements');
                              if (checked) {
                                form.setValue('travelArrangements', [...currentValues, 'VIP Airport Meet & Assist']);
                              } else {
                                form.setValue('travelArrangements', currentValues.filter(v => v !== 'VIP Airport Meet & Assist'));
                              }
                            }}
                          />
                          <Label htmlFor="vip-airport" className="text-black">{t('enquiry.vipAirport')}</Label>
                        </div>
                      </div>
                    </div>
                    
                    {/* Accommodation Preferences */}
                    <div>
                      <Label className="text-navy mb-3 block">{t('enquiry.accommodation')}</Label>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="hotel" 
                            onCheckedChange={(checked) => {
                              const currentValues = form.getValues('accommodation');
                              if (checked) {
                                form.setValue('accommodation', [...currentValues, '5-Star Hotel']);
                              } else {
                                form.setValue('accommodation', currentValues.filter(v => v !== '5-Star Hotel'));
                              }
                            }}
                          />
                          <Label htmlFor="hotel" className="text-black">{t('enquiry.fiveStarHotel')}</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="villa" 
                            onCheckedChange={(checked) => {
                              const currentValues = form.getValues('accommodation');
                              if (checked) {
                                form.setValue('accommodation', [...currentValues, 'Private Villa']);
                              } else {
                                form.setValue('accommodation', currentValues.filter(v => v !== 'Private Villa'));
                              }
                            }}
                          />
                          <Label htmlFor="villa" className="text-black">{t('enquiry.privateVilla')}</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="resort" 
                            onCheckedChange={(checked) => {
                              const currentValues = form.getValues('accommodation');
                              if (checked) {
                                form.setValue('accommodation', [...currentValues, 'Family-Friendly Resort']);
                              } else {
                                form.setValue('accommodation', currentValues.filter(v => v !== 'Family-Friendly Resort'));
                              }
                            }}
                          />
                          <Label htmlFor="resort" className="text-black">{t('enquiry.familyResort')}</Label>
                        </div>
                        <div className="flex items-center space-x-2 col-span-1 md:col-span-3">
                          <Checkbox 
                            id="other-accommodation" 
                            onCheckedChange={(checked) => {
                              const currentValues = form.getValues('accommodation');
                              if (checked) {
                                form.setValue('accommodation', [...currentValues, 'Other']);
                              } else {
                                form.setValue('accommodation', currentValues.filter(v => v !== 'Other'));
                              }
                            }}
                          />
                          <Label htmlFor="other-accommodation" className="text-black">{t('common.other')}:</Label>
                          <Input 
                            className="w-full max-w-xs h-8 bg-white text-black"
                            {...form.register('otherAccommodation')}
                          />
                        </div>
                      </div>
                    </div>
                    
                    {/* Luxury & Leisure Services */}
                    <div>
                      <Label className="text-navy mb-3 block">{t('enquiry.luxuryServices')}</Label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="tours" 
                            onCheckedChange={(checked) => {
                              const currentValues = form.getValues('luxuryServices');
                              if (checked) {
                                form.setValue('luxuryServices', [...currentValues, 'Private Tours & Cultural Experiences']);
                              } else {
                                form.setValue('luxuryServices', currentValues.filter(v => v !== 'Private Tours & Cultural Experiences'));
                              }
                            }}
                          />
                          <Label htmlFor="tours" className="text-black">{t('enquiry.privateTours')}</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="shopping" 
                            onCheckedChange={(checked) => {
                              const currentValues = form.getValues('luxuryServices');
                              if (checked) {
                                form.setValue('luxuryServices', [...currentValues, 'Personal Shopping Assistance']);
                              } else {
                                form.setValue('luxuryServices', currentValues.filter(v => v !== 'Personal Shopping Assistance'));
                              }
                            }}
                          />
                          <Label htmlFor="shopping" className="text-black">{t('enquiry.shopping')}</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="dining" 
                            onCheckedChange={(checked) => {
                              const currentValues = form.getValues('luxuryServices');
                              if (checked) {
                                form.setValue('luxuryServices', [...currentValues, 'Fine Dining Reservations & Halal Dining Options']);
                              } else {
                                form.setValue('luxuryServices', currentValues.filter(v => v !== 'Fine Dining Reservations & Halal Dining Options'));
                              }
                            }}
                          />
                          <Label htmlFor="dining" className="text-black">{t('enquiry.fineDining')}</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="transportation" 
                            onCheckedChange={(checked) => {
                              const currentValues = form.getValues('luxuryServices');
                              if (checked) {
                                form.setValue('luxuryServices', [...currentValues, 'High-End Transportation']);
                              } else {
                                form.setValue('luxuryServices', currentValues.filter(v => v !== 'High-End Transportation'));
                              }
                            }}
                          />
                          <Label htmlFor="transportation" className="text-black">{t('enquiry.transportation')}</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="yacht" 
                            onCheckedChange={(checked) => {
                              const currentValues = form.getValues('luxuryServices');
                              if (checked) {
                                form.setValue('luxuryServices', [...currentValues, 'Yacht Rental']);
                              } else {
                                form.setValue('luxuryServices', currentValues.filter(v => v !== 'Yacht Rental'));
                              }
                            }}
                          />
                          <Label htmlFor="yacht" className="text-black">{t('enquiry.yachtRental')}</Label>
                        </div>
                      </div>
                    </div>
                    
                    {/* Medical & Wellness */}
                    <div>
                      <Label className="text-navy mb-3 block">{t('enquiry.medicalWellness')}</Label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="consultation" 
                            onCheckedChange={(checked) => {
                              const currentValues = form.getValues('medicalServices');
                              if (checked) {
                                form.setValue('medicalServices', [...currentValues, 'Medical Consultation & Treatment Coordination']);
                              } else {
                                form.setValue('medicalServices', currentValues.filter(v => v !== 'Medical Consultation & Treatment Coordination'));
                              }
                            }}
                          />
                          <Label htmlFor="consultation" className="text-black">{t('enquiry.medicalConsultation')}</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="recovery" 
                            onCheckedChange={(checked) => {
                              const currentValues = form.getValues('medicalServices');
                              if (checked) {
                                form.setValue('medicalServices', [...currentValues, 'Post-Treatment Recovery Arrangements']);
                              } else {
                                form.setValue('medicalServices', currentValues.filter(v => v !== 'Post-Treatment Recovery Arrangements'));
                              }
                            }}
                          />
                          <Label htmlFor="recovery" className="text-black">{t('enquiry.recovery')}</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="spa" 
                            onCheckedChange={(checked) => {
                              const currentValues = form.getValues('medicalServices');
                              if (checked) {
                                form.setValue('medicalServices', [...currentValues, 'Wellness & Spa Retreats']);
                              } else {
                                form.setValue('medicalServices', currentValues.filter(v => v !== 'Wellness & Spa Retreats'));
                              }
                            }}
                          />
                          <Label htmlFor="spa" className="text-black">{t('enquiry.spaRetreats')}</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="followup" 
                            onCheckedChange={(checked) => {
                              const currentValues = form.getValues('medicalServices');
                              if (checked) {
                                form.setValue('medicalServices', [...currentValues, 'Long-Term Health & Follow-Up Planning']);
                              } else {
                                form.setValue('medicalServices', currentValues.filter(v => v !== 'Long-Term Health & Follow-Up Planning'));
                              }
                            }}
                          />
                          <Label htmlFor="followup" className="text-black">{t('enquiry.followUp')}</Label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Section 4: Top 3 Absolute Needs */}
                <div className="border-t border-gray-200 pt-8">
                  <h3 className="text-xl font-semibold mb-2 text-navy">{t('enquiry.topNeeds')}</h3>
                  <p className="text-muted-foreground mb-4">{t('enquiry.topNeedsSubtitle')}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="need1" className="text-navy">1.</Label>
                      <Input
                        id="need1"
                        {...form.register('topNeed1')}
                        className="mt-1 w-full bg-white text-black"
                      />
                    </div>
                    <div>
                      <Label htmlFor="need2" className="text-navy">2.</Label>
                      <Input
                        id="need2"
                        {...form.register('topNeed2')}
                        className="mt-1 w-full bg-white text-black"
                      />
                    </div>
                    <div>
                      <Label htmlFor="need3" className="text-navy">3.</Label>
                      <Input
                        id="need3"
                        {...form.register('topNeed3')}
                        className="mt-1 w-full bg-white text-black"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Section 5: Additional Requests */}
                <div className="border-t border-gray-200 pt-8">
                  <h3 className="text-xl font-semibold mb-2 text-navy">{t('enquiry.additionalRequests')}</h3>
                  <p className="text-muted-foreground mb-4">{t('enquiry.additionalRequestsSubtitle')}</p>
                  
                  <Textarea
                    {...form.register('additionalRequests')}
                    className="w-full min-h-32 bg-white text-black"
                  />
                </div>
                
                {/* Submit Button */}
                <div className="border-t border-gray-200 pt-8 flex justify-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="button-primary px-10 py-3 bg-navy hover:bg-navy/90 text-white w-full md:w-auto flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>{t('common.submit')}...</span>
                    ) : (
                      <>
                        {t('enquiry.submitInquiry')} <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Enquiry;
