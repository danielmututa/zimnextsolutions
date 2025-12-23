import React from 'react';
import { Check, X } from 'lucide-react';

const PricingCard = ({ plan }) => {
  // Extract from plan object
  const { tier, price, colorClasses, features, featureList } = plan;

  return (
    <div className="relative w-full">
      <div className="bg-white w-full rounded-3xl shadow-2xl">
        {/* Header */}
        <div className="pt-8 pb-4 px-6 text-center">
          <h3 className="text-gray-700 font-bold text-2xl mb-1">{tier}</h3>
          <p className="text-gray-400 text-sm">Mobile Friendly Design</p>
        </div>

        {/* Price banner */}
        <div className={`${colorClasses.gradient} py-4 px-6`}>
          <p className="text-white font-bold text-center text-lg">$ {price}</p>
        </div>

        {/* Features */}
        <div className="py-6 px-6 space-y-3">
          {featureList.map((featureName, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className={`w-2.5 h-2.5 rounded-full ${colorClasses.dot} flex-shrink-0`} />
              <span className="text-gray-500 text-sm flex-grow">{featureName}</span>
              {features[index] ? (
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" strokeWidth={3} />
              ) : (
                <X className="w-5 h-5 text-red-500 flex-shrink-0" strokeWidth={3} />
              )}
            </div>
          ))}
        </div>

        {/* Subscribe button */}
        <div className="px-6 pb-8">
          <button className={`w-full ${colorClasses.gradient} text-white font-bold py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}>
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  );
};

const PricingCards = () => {
  // ALL DATA IN ONE ARRAY - NO SEPARATE ARRAYS
  const plans = [
    {
      tier: 'SILVER',
      price: '49.99',
      colorClasses: {
        gradient: 'bg-gradient-to-b from-purple-500 to-purple-600',
        dot: 'bg-purple-600',
        text: 'text-purple-600'
      },
      features: [true, true, true, true, true, true , true ,true, true],
      featureList: [
        '4 Pages Website',
        'Mobile Responsive', 
        'Landing Page',
        'About Page',
        'Services Page',
        'Contact Page',
        'SEO Optimization',
        'Get a domain name .co.zw',
        '24/7 Support',

      ]
    },
    {
      tier: 'GOLD',
      price: '79.99',
      colorClasses: {
        gradient: 'bg-gradient-to-b from-pink-500 to-pink-600',
        dot: 'bg-pink-600',
        text: 'text-pink-600'
      },
      features: [true, true, true, true, true, true , true , true, true , true, true],
      featureList: [
        '5 Pages Website',
        'Mobile Responsive',
        'Landing Page',
        'Products Page',
        'Services Page',
        'Contact Page',
        'About Page',
        'SEO Optimization',
        'Social Media Links',
 'Get a domain name .co.zw',
        '24/7 Support',
      ]
    },
    {
      tier: 'PLATINUM',
      price: '499.99',
      colorClasses: {
        gradient: 'bg-gradient-to-b from-orange-400 to-orange-500',
        dot: 'bg-orange-500',
        text: 'text-orange-500'
      },
      features: [true, true, true, true, true, true, true ,true ,true , true ,true, true],
      featureList: [
         '30 Pages Website',
        'Mobile Responsive',
        'Home Page',
        'Products Page',
        'Services Page',
        'Contact Page',
        'About Page',
        'Gallery Page',
        'SEO Optimization',
        'Social Media Links',
         'Get a domain name .co.zw',
        '24/7 Support',
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 py-12 px-4 sm:px-6 lg:px-8 relative">
      {/* Watermark pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="w-full h-full" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 100px, rgba(255,255,255,0.3) 100px, rgba(255,255,255,0.3) 101px)',
        }} />
      </div>

      <div className="w-full mx-auto relative z-10">
        {/* Top right button */}
        <div className="flex justify-end mb-8">
          <button className="bg-white/20 hover:bg-white/30 text-white font-semibold py-2.5 px-6 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105 border border-white/20">
            View All Pricings
          </button>
        </div>

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Choose Your Plan</h1>
          <p className="text-gray-400 text-lg">Select the perfect plan for your needs</p>
        </div>
        
        {/* Pricing cards - dynamic from plans array */}
        <div className="flex flex-wrap justify-center items-start  gap-8 mb-16">
          {plans.map((plan, index) => (
            <div key={index} className="flex w-full md:w-[47.5%] lg:w-[32%] xl:w-[27%] justify-center">
              <PricingCard plan={plan} />
            </div>
          ))}
        </div>

      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/your-number"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-2xl transition-all duration-300 z-50 flex items-center justify-center group hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <svg 
          className="w-7 h-7" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
        <span className="absolute right-full mr-3 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-xl">
          Chat with us
        </span>
      </a>
    </div>
  );
};

export default PricingCards;