import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const TermsConditions = () => {
  return (
    <div className="relative max-w-4xl mx-auto p-8" style={{ color: '#171717' }}>
      <Link 
        to="/" 
        className="absolute top-4 left-4 flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors"
      >
        <ArrowLeft size={16} />
        <span>Back to Home</span>
      </Link>

      <h1 className="text-3xl font-bold mb-8">Terms & Conditions</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">OVERVIEW</h2>
        <p className="mb-4">This website is operated by Mindsight. Throughout the site, the terms "we", "us" and "our" refer to Mindsight. Mindsight offers this website, including all information, tools and Services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.</p>
        
        <p className="mb-4">By visiting our site and/ or purchasing something from us, you engage in our "Service" and agree to be bound by the following terms and conditions ("Terms of Service", "Terms"), including those additional terms and conditions and policies referenced herein and/or available by hyperlink. These Terms of Service apply to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and/ or contributors of content.</p>

        <p className="mb-4">Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any Services. If these Terms of Service are considered an offer, acceptance is expressly limited to these Terms of Service.</p>

        <p className="mb-4">Any new features or tools which are added to the current store shall also be subject to the Terms of Service. You can review the most current version of the Terms of Service at any time on this page. We reserve the right to update, change or replace any part of these Terms of Service by posting updates and/or changes to our website. It is your responsibility to check this page periodically for changes. Your continued use of or access to the website following the posting of any changes constitutes acceptance of those changes.</p>

        <p className="mb-4">Our store is hosted on Shopify Inc. They provide us with the online e-commerce platform that allows us to sell our products and Services to you.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">SECTION 1 - ONLINE STORE TERMS</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.</li>
          <li>You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws).</li>
          <li>You must not transmit any worms or viruses or any code of a destructive nature.</li>
          <li>A breach or violation of any of the Terms will result in an immediate termination of your Services.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">SECTION 2 - GENERAL CONDITIONS</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>We reserve the right to refuse Service to anyone for any reason at any time.</li>
          <li>You understand that your content (not including credit card information), may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices. Credit card information is always encrypted during transfer over networks.</li>
          <li>You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service or any contact on the website through which the Service is provided, without express written permission by us.</li>
          <li>The headings used in this agreement are included for convenience only and will not limit or otherwise affect these Terms.</li>
        </ul>
      </section>

      {/* Continue with all sections up to SECTION 20 with proper formatting */}
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">SECTION 20 - CONTACT INFORMATION</h2>
        <p className="mb-4">Questions about the Terms of Service should be sent to us at <a href="mailto:Support@mindsightnow.com" className="text-blue-600 underline">Support@mindsightnow.com</a>.</p>
        <p className="mb-4">Our contact information is posted below:</p>
        <p className="mb-2">THINGS THAT WORK INC.</p>
        <p className="mb-2"><a href="mailto:Support@mindsightnow.com" className="text-blue-600 underline">Support@mindsightnow.com</a></p>
        <p className="mb-4">4970 Willow Stone Heights, Colorado Springs CO 80906, United States</p>
      </section>
    </div>
  );
};

export default TermsConditions;
