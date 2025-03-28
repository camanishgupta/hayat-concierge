
import React from 'react';
import { Link } from 'react-router-dom';

const CookiePolicy = () => {
  return (
    <div className="bg-offwhite min-h-screen">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="heading-lg mb-8 hero-text-gradient">Cookie Policy</h1>
          
          <div className="glass-card p-8 mb-8">
            <div className="prose prose-lg text-charcoal max-w-none">
              <p className="text-lg mb-6">
                This Cookie Policy explains how Hayat Concierge uses cookies and similar technologies 
                to recognize you when you visit our website. It explains what these technologies are and 
                why we use them, as well as your rights to control our use of them.
              </p>

              <h2 className="heading-md mt-8 mb-4 text-navy">What Are Cookies?</h2>
              <p>
                Cookies are small data files that are placed on your computer or mobile device when you visit a website. 
                Cookies are widely used by website owners to make their websites work efficiently and provide reporting information.
              </p>
              <p>
                Cookies set by the website owner (in this case, Hayat Concierge) are called "first-party cookies." 
                Cookies set by parties other than the website owner are called "third-party cookies." Third-party cookies 
                enable third-party features or functionality to be provided on or through the website (e.g., advertising, 
                interactive content, and analytics).
              </p>

              <h2 className="heading-md mt-8 mb-4 text-navy">Types of Cookies We Use</h2>
              <p>We use the following types of cookies:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>
                  <strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly. 
                  They enable basic functions like page navigation and access to secure areas of the website.
                </li>
                <li>
                  <strong>Functionality Cookies:</strong> These cookies allow us to remember choices you make and provide 
                  enhanced, more personal features. They may be set by us or by third-party providers whose services we 
                  have added to our pages.
                </li>
                <li>
                  <strong>Analytics Cookies:</strong> These cookies help us understand how visitors interact with our website. 
                  They provide information about metrics like the number of visitors, bounce rate, traffic source, etc.
                </li>
                <li>
                  <strong>Marketing Cookies:</strong> These cookies are used to track visitors across websites. The intention 
                  is to display ads that are relevant and engaging for the individual user.
                </li>
              </ul>

              <h2 className="heading-md mt-8 mb-4 text-navy">How Can You Control Cookies?</h2>
              <p>
                You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, 
                you may still use our website, but your access to some functionality and areas may be restricted.
              </p>
              <p>
                Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, 
                including how to see what cookies have been set and how to manage and delete them, visit 
                <a href="https://www.allaboutcookies.org" className="text-gold hover:underline ml-1" target="_blank" rel="noopener noreferrer">www.allaboutcookies.org</a>.
              </p>

              <h2 className="heading-md mt-8 mb-4 text-navy">Your Choices</h2>
              <p>
                When you first visit our website, you will be presented with a cookie consent banner that allows you to 
                accept or decline non-essential cookies.
              </p>
              <p>
                You can change your cookie preferences at any time by clicking on the "Cookie Settings" link in the footer of our website.
              </p>

              <h2 className="heading-md mt-8 mb-4 text-navy">Updates to This Cookie Policy</h2>
              <p>
                We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or our business practices. 
                Any changes will become effective when we post the revised policy on our website.
              </p>
              
              <h2 className="heading-md mt-8 mb-4 text-navy">Contact Us</h2>
              <p>
                If you have any questions about our use of cookies or this Cookie Policy, please contact us at:
              </p>
              <p className="mb-6">Email: privacy@hayatconcierge.com</p>
              
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

export default CookiePolicy;
