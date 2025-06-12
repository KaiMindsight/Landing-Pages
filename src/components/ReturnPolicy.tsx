
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const ReturnPolicy = () => {
  return (
    <div className="relative max-w-4xl mx-auto p-8" style={{ color: '#171717' }}>
      <Link 
        to="/" 
        className="absolute top-4 left-4 flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors"
      >
        <ArrowLeft size={16} />
        <span>Back to Home</span>
      </Link>

      <h1 className="text-3xl font-bold mb-8">Refund & Return Policy</h1>
      
      <p className="mb-6">We want you to love your Mindsight purchase! If you're not fully satisfied, we're here to help.</p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Standard Return Window</h2>
        <p className="mb-4">You have 30 days from the date you receive your item to request a return.</p>
        
        <p className="mb-2">To be eligible for a return, items must be:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>In the same condition you received them</li>
          <li>Unused, with all original tags attached</li>
          <li>In the original packaging</li>
          <li>Accompanied by a receipt or proof of purchase</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">How to Start a Return</h2>
        <p className="mb-4">Email us at <a href="mailto:Support@mindsightnow.com" className="text-blue-600 underline">Support@mindsightnow.com</a> with your order number and reason for return.</p>
        <p className="mb-4">We'll send you a pre-paid return shipping label and easy-to-follow return instructions.</p>
        <p className="mb-4"><strong>Important:</strong> Please do not send items back without requesting a return first — we cannot accept unauthorized returns.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Return Shipping Costs</h2>
        <p className="mb-4">We want to be fair and transparent! Here's how shipping costs are handled:</p>
        
        <table className="w-full border-collapse border border-gray-300 mb-4">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-3 text-left">Situation</th>
              <th className="border border-gray-300 p-3 text-left">Who Pays for Return Shipping?</th>
              <th className="border border-gray-300 p-3 text-left">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-3">Item arrived damaged, defective, or we sent the wrong item</td>
              <td className="border border-gray-300 p-3">Free Return (no deduction)</td>
              <td className="border border-gray-300 p-3">We cover the return shipping.</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-3">Change of mind / No longer needed / Ordered wrong item</td>
              <td className="border border-gray-300 p-3">Customer pays (deducted from refund)</td>
              <td className="border border-gray-300 p-3">Label provided; cost deducted from refund.</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-3">Size, color, style preference</td>
              <td className="border border-gray-300 p-3">Customer pays (deducted from refund)</td>
              <td className="border border-gray-300 p-3">Label provided; cost deducted from refund.</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-3">Item arrived late (but not due to Mindsight error)</td>
              <td className="border border-gray-300 p-3">Customer pays (deducted from refund)</td>
              <td className="border border-gray-300 p-3">Label provided; cost deducted from refund.</td>
            </tr>
          </tbody>
        </table>
        
        <p className="mb-4">Return shipping costs will be clearly outlined when your return label is issued.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Damages & Issues</h2>
        <p className="mb-4">Please inspect your order when it arrives.</p>
        <p className="mb-4">If your item is damaged, defective, or incorrect, contact us within 7 days at <a href="mailto:Support@mindsightnow.com" className="text-blue-600 underline">Support@mindsightnow.com</a> so we can make it right — usually through a free replacement, exchange, or full refund.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Non-Returnable Items</h2>
        <p className="mb-4">Sale items and gift cards are final sale and not eligible for return.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Refunds</h2>
        <p className="mb-4">Once we receive and inspect your return, we'll notify you if your refund is approved.</p>
        <p className="mb-4">Approved refunds will be issued to your original payment method within 10 business days.</p>
        <p className="mb-4">Keep in mind: it may take additional time for your bank or credit card company to process the refund.</p>
        <p className="mb-4">If it's been more than 15 business days since your refund was approved and you haven't seen it, please reach out to us.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">A Few Notes</h2>
        <p className="mb-4">If items are returned used, damaged, or missing parts not due to our error, a partial refund may apply.</p>
        <p className="mb-4">Need help? Reach out to <a href="mailto:Support@mindsightnow.com" className="text-blue-600 underline">Support@mindsightnow.com</a> — real humans are here to help. =)</p>
      </section>
    </div>
  );
};

export default ReturnPolicy;
