
import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="bg-offwhite min-h-screen">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="heading-lg mb-8 hero-text-gradient">Privacy Policy</h1>
          
          <div className="glass-card p-8 mb-8">
            <div className="prose prose-lg text-charcoal max-w-none">
              <p className="text-lg mb-6">
                At Hayat Concierge, we are committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy explains how we collect, use, and safeguard your data when you use our services.
              </p>

              <h2 className="heading-md mt-8 mb-4 text-navy">Information We Collect</h2>
              <p>We may collect the following types of personal information:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Contact information (name, email address, phone number)</li>
                <li>Passport and visa details (for travel arrangements)</li>
                <li>Health information (for medical tourism services)</li>
                <li>Travel preferences and requirements</li>
                <li>Payment information</li>
                <li>Accommodation preferences</li>
                <li>Feedback and service ratings</li>
              </ul>

              <h2 className="heading-md mt-8 mb-4 text-navy">How We Use Your Information</h2>
              <p>We use your personal information for the following purposes:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>To provide and personalize our concierge services</li>
                <li>To make travel, accommodation, and medical appointments</li>
                <li>To communicate with you about your bookings and inquiries</li>
                <li>To process payments and manage billing</li>
                <li>To improve our services and develop new offerings</li>
                <li>To comply with legal obligations</li>
              </ul>

              <h2 className="heading-md mt-8 mb-4 text-navy">Data Sharing and Disclosure</h2>
              <p>We may share your information with:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Hospitals, clinics, and healthcare providers</li>
                <li>Hotels, resorts, and accommodation providers</li>
                <li>Transportation services</li>
                <li>Tour operators and activity providers</li>
                <li>Payment processors</li>
              </ul>
              <p>
                We only share information necessary to fulfill your service requests. All our partners are bound by 
                strict confidentiality and data protection agreements.
              </p>

              <h2 className="heading-md mt-8 mb-4 text-navy">Data Security</h2>
              <p>
                We implement robust security measures to protect your personal information from unauthorized access, 
                alteration, disclosure, or destruction. These measures include encryption, access controls, and regular 
                security assessments.
              </p>

              <h2 className="heading-md mt-8 mb-4 text-navy">Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data (subject to legal obligations)</li>
                <li>Object to certain processing of your data</li>
                <li>Request restriction of processing</li>
                <li>Request data portability</li>
              </ul>

              <h2 className="heading-md mt-8 mb-4 text-navy">Contact Us</h2>
              <p>
                If you have any questions about our Privacy Policy or wish to exercise your rights, please contact us at:
              </p>
              <p className="mb-6">Email: privacy@hayatconcierge.com</p>

              <h2 className="heading-md mt-8 mb-4 text-navy">Policy Updates</h2>
              <p>
                We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. 
                We will notify you of any significant changes.
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

export default PrivacyPolicy;
