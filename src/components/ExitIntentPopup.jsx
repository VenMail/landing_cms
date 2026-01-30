import { useState, useEffect, useRef } from 'react';
import { ChristmasSparkleWrapper } from '@/utils/christmasSparkle';
import { HiOutlineSparkles, HiOutlineTrendingUp, HiOutlineCurrencyDollar, HiOutlineChartBar, HiOutlineCheckCircle, HiOutlineCalendar, HiOutlineMail, HiOutlineUsers, HiOutlineGlobe } from 'react-icons/hi';
import { useCurrency } from '@/contexts/CurrencyContext';

const ExitIntentPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [domain, setDomain] = useState('');
  const [analysis, setAnalysis] = useState(null);
  const [interest, setInterest] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const timeoutRef = useRef(null);
  const { formatPrice, isLoading } = useCurrency();

  useEffect(() => {
    const handleMouseLeave = (e) => {
      if (e.clientY <= 0 && !hasTriggered) {
        timeoutRef.current = setTimeout(() => {
          setIsVisible(true);
          setHasTriggered(true);
        }, 500);
      }
    };

    const handleMouseEnter = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [hasTriggered]);

  const analyzeDomain = async () => {
    if (!domain) return;
    
    // Clean domain input
    let cleanDomain = domain.trim();
    cleanDomain = cleanDomain.replace(/^https?:\/\//, '');
    cleanDomain = cleanDomain.replace(/^www\./, '');
    cleanDomain = cleanDomain.split('/')[0];
    
    if (!cleanDomain) return;
    
    setIsAnalyzing(true);
    try {
      const response = await fetch('https://m.venmail.io/analyze-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ domain: cleanDomain }),
      });

      const data = await response.json();
      setAnalysis(data);
      setCurrentStep(2);
    } catch (error) {
      console.error('Error analyzing domain:', error);
      // Provide fallback data if API fails
      setAnalysis({
        current_mx_records: 'Standard email configuration',
        growth_opportunity: 'Significant potential for email automation',
        amount_to_save: isLoading ? '$500+/month' : `${formatPrice(500)}+/month`,
        total_est_value: isLoading ? '$12,000+' : `${formatPrice(12000)}+`,
        success: false,
        error: 'API unavailable'
      });
      setCurrentStep(2);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const closePopup = () => {
    setIsVisible(false);
  };

  const handleInterestSelect = (selectedInterest) => {
    setInterest(selectedInterest);
    setCurrentStep(3);
  };

  const generateEmail = () => {
    // This would integrate with your email generation system
    setCurrentStep(4);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fadeIn">
      <ChristmasSparkleWrapper className="bg-white dark:bg-gray-900 rounded-3xl max-w-lg w-full p-8 relative shadow-2xl border border-gray-200 dark:border-gray-700">
        <button
          onClick={closePopup}
          className="absolute top-6 right-6 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 text-2xl transition-colors"
        >
          ×
        </button>


        {currentStep === 1 && (
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <HiOutlineSparkles className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">Before you go...</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed">
              Get a <span className="font-semibold text-gray-900 dark:text-white">free analysis</span> of how Venmail can transform your business communication
            </p>
            <div className="space-y-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="yourwebsite.com"
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  className="w-full px-6 py-4 border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent text-lg transition-all placeholder-gray-400 dark:placeholder-gray-500"
                  onKeyPress={(e) => e.key === 'Enter' && analyzeDomain()}
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <HiOutlineGlobe className="w-5 h-5 text-gray-400 dark:text-gray-500" />
                </div>
              </div>
              <button
                onClick={analyzeDomain}
                disabled={!domain || isAnalyzing}
                className="w-full bg-gradient-to-r from-black to-gray-800 text-white py-4 rounded-2xl hover:from-gray-800 hover:to-black disabled:opacity-50 disabled:cursor-not-allowed font-semibold text-lg transition-all transform hover:scale-[1.02] shadow-lg"
              >
                {isAnalyzing ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Analyzing...
                  </span>
                ) : (
                  'Analyze My Website'
                )}
              </button>
              <button
                onClick={closePopup}
                className="w-full text-gray-500 dark:text-gray-400 py-3 text-sm hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
              >
                No thanks, I'll explore on my own
              </button>
            </div>
          </div>
        )}

        {currentStep === 2 && analysis && (
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <HiOutlineChartBar className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">Your Growth Analysis</h2>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 mb-8 text-left border border-gray-200 dark:border-gray-600">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
                  <div className="flex items-center mb-2">
                    <HiOutlineMail className="w-5 h-5 text-blue-500 mr-2" />
                    <span className="font-semibold text-sm text-gray-900 dark:text-white">Current Setup</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{analysis.current_mx_records || 'Standard email configuration'}</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
                  <div className="flex items-center mb-2">
                    <HiOutlineTrendingUp className="w-5 h-5 text-green-500 mr-2" />
                    <span className="font-semibold text-sm text-gray-900 dark:text-white">Growth Opportunity</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{analysis.growth_opportunity || 'Significant potential for email automation'}</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
                  <div className="flex items-center mb-2">
                    <HiOutlineCurrencyDollar className="w-5 h-5 text-yellow-500 mr-2" />
                    <span className="font-semibold text-sm text-gray-900 dark:text-white">Potential Savings</span>
                  </div>
                  <p className="text-sm text-green-600 dark:text-green-400 font-bold text-lg">{analysis.amount_to_save || (isLoading ? '$500+/month' : `${formatPrice(500)}+/month`)}</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
                  <div className="flex items-center mb-2">
                    <HiOutlineChartBar className="w-5 h-5 text-purple-500 mr-2" />
                    <span className="font-semibold text-sm text-gray-900 dark:text-white">2-Year Value</span>
                  </div>
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-bold text-lg">{analysis.total_est_value || (isLoading ? '$12,000+' : `${formatPrice(12000)}+`)}</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => setCurrentStep(3)}
              className="w-full bg-gradient-to-r from-black to-gray-800 text-white py-4 rounded-2xl hover:from-gray-800 hover:to-black font-semibold text-lg transition-all transform hover:scale-[1.02] shadow-lg mb-3"
            >
              See How We Can Help
            </button>
            <button
              onClick={closePopup}
              className="w-full text-gray-500 dark:text-gray-400 py-3 text-sm hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
            >
              No thanks, I'll explore on my own
            </button>
          </div>
        )}

        {currentStep === 3 && (
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <HiOutlineUsers className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">What brings you here?</h2>
            <div className="space-y-3">
              <button
                onClick={() => handleInterestSelect('exploring')}
                className="w-full text-left px-6 py-4 border-2 border-gray-200 dark:border-gray-600 rounded-2xl hover:border-purple-500 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all group"
              >
                <div className="font-semibold text-lg mb-1 text-gray-900 dark:text-white">Just exploring</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">I'm curious about the platform</div>
                <div className="mt-2 text-purple-500 dark:text-purple-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity">→ Learn more</div>
              </button>
              <button
                onClick={() => handleInterestSelect('interested-but-unsure')}
                className="w-full text-left px-6 py-4 border-2 border-gray-200 dark:border-gray-600 rounded-2xl hover:border-purple-500 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all group"
              >
                <div className="font-semibold text-lg mb-1 text-gray-900 dark:text-white">I'm interested but not sure how to dive in</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Show me the best way to get started</div>
                <div className="mt-2 text-purple-500 dark:text-purple-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity">→ Get guidance</div>
              </button>
              <button
                onClick={() => handleInterestSelect('ready-to-grow')}
                className="w-full text-left px-6 py-4 border-2 border-gray-200 dark:border-gray-600 rounded-2xl hover:border-purple-500 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all group"
              >
                <div className="font-semibold text-lg mb-1 text-gray-900 dark:text-white">Ready to grow my business</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">I want to see the growth plan</div>
                <div className="mt-2 text-purple-500 dark:text-purple-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity">→ Start growing</div>
              </button>
            </div>
          </div>
        )}

        {currentStep === 4 && (
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <HiOutlineCheckCircle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">Your Personalized Growth Plan</h2>
            <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-2xl p-6 mb-8 text-left border border-orange-200 dark:border-orange-800">
              <h3 className="font-bold text-lg mb-4 text-orange-900 dark:text-orange-300">You no longer need...</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <HiOutlineCheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Separate email marketing tools</span>
                </div>
                <div className="flex items-center">
                  <HiOutlineCheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Multiple calendar scheduling apps</span>
                </div>
                <div className="flex items-center">
                  <HiOutlineCheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Expensive CRM systems</span>
                </div>
                <div className="flex items-center">
                  <HiOutlineCheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Complex automation workflows</span>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-orange-200 dark:border-orange-700 bg-white dark:bg-gray-800 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-bold text-lg text-gray-900 dark:text-white">With Venmail</p>
                  <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    $23/month
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-lg">Unlimited users</span>
                  <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-lg">250GB storage</span>
                  <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-lg">All features</span>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <a
                href="https://m.venmail.io/register"
                target="_blank"
                className="block w-full bg-gradient-to-r from-black to-gray-800 text-white py-4 rounded-2xl hover:from-gray-800 hover:to-black font-semibold text-lg transition-all transform hover:scale-[1.02] shadow-lg"
              >
                Start Your Free Trial
              </a>
              <a
                href="https://venia.cloud/schedule/30-250503-1821-642627-437"
                target="_blank"
                className="block w-full text-gray-600 dark:text-gray-400 py-3 text-sm hover:text-gray-800 dark:hover:text-gray-200 border-2 border-gray-300 dark:border-gray-600 rounded-2xl hover:border-gray-400 dark:hover:border-gray-500 transition-all"
              >
                Help me set up
              </a>
            </div>
          </div>
        )}
      </ChristmasSparkleWrapper>
    </div>
  );
};

export default ExitIntentPopup;
