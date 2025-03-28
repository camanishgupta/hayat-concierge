
import React from 'react';
import { Link } from 'react-router-dom';

const TermsConditions = () => {
  return (
    <div className="bg-offwhite min-h-screen">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="heading-lg mb-8 hero-text-gradient">Terms and Conditions</h1>
          
          <div className="glass-card p-8 mb-8">
            <div className="prose prose-lg text-charcoal max-w-none">
              <p className="text-lg mb-6">
                Welcome to Hayat Concierge. These Terms and Conditions govern your use of our services and 
                establish the rights, responsibilities, and obligations of all parties involved.
              </p>

              <h2 className="heading-md mt-8 mb-4 text-navy">1. Services Agreement</h2>
              <p>
                Hayat Concierge provides luxury concierge services, including but not limited to medical tourism 
                coordination, wellness retreats, luxury accommodations, private transportation, bespoke itineraries, 
                and fine dining arrangements in Thailand for Middle Eastern clients.
              </p>

              <h2 className="heading-md mt-8 mb-4 text-navy">2. Booking and Reservations</h2>
              <p>
                All bookings and reservations made through Hayat Concierge are subject to availability and confirmation. 
                A deposit may be required to secure certain services, with the balance due prior to the service date.
              </p>
              <p>
                Cancellation policies vary depending on the service provider. We will inform you of the specific terms 
                at the time of booking.
              </p>

              <h2 className="heading-md mt-8 mb-4 text-navy">3. Payment Terms</h2>
              <p>
                We accept payment via bank transfer, credit card, or other agreed-upon methods. All prices are quoted 
                in the currency specified at the time of booking and are inclusive of our service fees unless otherwise stated.
              </p>
              <p>
                Additional charges may apply for special requests, after-hours services, or changes to confirmed bookings.
              </p>

              <h2 className="heading-md mt-8 mb-4 text-navy">4. Medical Tourism Services</h2>
              <p>
                Hayat Concierge does not provide medical advice or treatment. We facilitate connections with healthcare 
                providers but are not responsible for the medical services provided.
              </p>
              <p>
                Clients are responsible for providing accurate medical information and following all pre- and post-treatment 
                instructions provided by healthcare professionals.
              </p>

              <h2 className="heading-md mt-8 mb-4 text-navy">5. Liability Limitations</h2>
              <p>
                While we strive to provide exceptional service, Hayat Concierge is not liable for any damages, injuries, 
                losses, or delays caused by third-party service providers or circumstances beyond our reasonable control.
              </p>
              <p>
                We strongly recommend that clients obtain comprehensive travel and medical insurance.
              </p>

              <h2 className="heading-md mt-8 mb-4 text-navy">6. Client Responsibilities</h2>
              <p>Clients are responsible for:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Providing accurate and complete information</li>
                <li>Obtaining necessary travel documents (passports, visas, etc.)</li>
                <li>Adhering to all local laws and regulations</li>
                <li>Respecting appointment times and cancellation policies</li>
                <li>Making payments according to agreed terms</li>
              </ul>

              <h2 className="heading-md mt-8 mb-4 text-navy">7. Force Majeure</h2>
              <p>
                Neither party shall be liable for failure to perform obligations if such failure is as a result of 
                Acts of God (including fire, flood, earthquake, storm, or other natural disaster), war, invasion, 
                act of foreign enemies, hostilities, civil war, rebellion, revolution, pandemic, or any other 
                extraordinary event beyond reasonable control.
              </p>

              <h2 className="heading-md mt-8 mb-4 text-navy">8. Governing Law</h2>
              <p>
                These Terms and Conditions are governed by and construed in accordance with the laws of Thailand. 
                Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts of Thailand.
              </p>

              <h2 className="heading-md mt-8 mb-4 text-navy">9. Modifications</h2>
              <p>
                Hayat Concierge reserves the right to modify these Terms and Conditions at any time. Changes will 
                be effective immediately upon posting on our website.
              </p>
              
              <p className="mt-8 italic text-sm">Last updated: {new Date().toLocaleDateString()}</p>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <Link to="/" className="button-secondary">
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
