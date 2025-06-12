
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="relative max-w-4xl mx-auto p-8" style={{ color: '#171717' }}>
      <Link 
        to="/" 
        className="absolute top-4 left-4 flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors"
      >
        <ArrowLeft size={16} />
        <span>Back to Home</span>
      </Link>

      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      
      <p className="mb-6">This Privacy Policy describes how Mindsight ("we", "us", or "our") collects, uses, and protects your information when you use our website and services.</p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
        <p className="mb-4">We may collect the following types of information:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Personal information you provide (name, email, address, phone number)</li>
          <li>Payment information for order processing</li>
          <li>Website usage data and analytics</li>
          <li>Customer service communications</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
        <p className="mb-4">We use your information to:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Process and fulfill your orders</li>
          <li>Provide customer support</li>
          <li>Send order confirmations and shipping updates</li>
          <li>Improve our website and services</li>
          <li>Send promotional emails (with your consent)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Information Sharing</h2>
        <p className="mb-4">We do not sell, trade, or rent your personal information to third parties. We may share your information with:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Service providers who help us operate our business</li>
          <li>Shipping companies to deliver your orders</li>
          <li>Payment processors to handle transactions</li>
          <li>Legal authorities when required by law</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
        <p className="mb-4">We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
        <p className="mb-4">Our website uses cookies to enhance your browsing experience and analyze website traffic. You can disable cookies in your browser settings.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
        <p className="mb-4">You have the right to:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Access your personal information</li>
          <li>Correct inaccurate information</li>
          <li>Request deletion of your information</li>
          <li>Opt-out of marketing communications</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="mb-4">If you have questions about this Privacy Policy, please contact us at:</p>
        <p className="mb-2">Email: <a href="mailto:support@mindsightnow.com" className="text-blue-600 underline">support@mindsightnow.com</a></p>
        <p className="mb-4">Address: 10 Kilmer Rd, Edison, NJ 08817</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
        <p className="mb-4">We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
        <p className="mb-4">Last updated: January 2025</p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
