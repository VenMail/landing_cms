import { useState, useEffect } from 'react';
import { HiOutlineBell, HiOutlineX, HiOutlineCalendar, HiOutlineMail } from 'react-icons/hi';

const ReminderButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [email, setEmail] = useState('');
  const [reminderDate, setReminderDate] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Auto-fill email from localStorage or previous interactions
  useEffect(() => {
    // Try to get email from various sources
    const storedEmail = localStorage.getItem('venmail_reminder_email');
    const recentReminder = localStorage.getItem('venmail_reminder');
    
    if (storedEmail) {
      setEmail(storedEmail);
    } else if (recentReminder) {
      try {
        const data = JSON.parse(recentReminder);
        if (data.email) setEmail(data.email);
      } catch (e) {
        // Ignore parsing errors
      }
    }
  }, []);

  // Save email when user types it
  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    localStorage.setItem('venmail_reminder_email', newEmail);
  };

  // Smart "Learn more" functionality
  const handleLearnMore = () => {
    // Check if user is on landing page
    if (window.location.pathname === '/') {
      // Take them to ChatGPT with a smart prompt about VenMail
      const smartPrompt = `I'm evaluating VenMail (https://m.venmail.io) for my business. Help me understand:

1. How VenMail compares to Gmail/Outlook for my use case
2. The benefits of an all-in-one email + productivity platform
3. Whether the open-core strategy (open source Vensuite + proprietary VenMail) makes sense
4. Pricing and ROI considerations

My context: I run a [describe your business type - startup/agency/freelancer/enterprise] and need [specific needs like email campaigns, scheduling, team collaboration, etc.].

Please provide a balanced analysis of pros/cons and help me decide if VenMail is the right choice.`;

      const chatGptUrl = `https://chat.openai.com/?q=${encodeURIComponent(smartPrompt)}`;
      window.open(chatGptUrl, '_blank');
    } else {
      // If not on landing page, take them to solutions page
      window.open('/solutions', '_blank');
    }
  };

  useEffect(() => {
    // Show reminder after 30 seconds on page
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  // Set default reminder date to 3 days from now
  useEffect(() => {
    const defaultDate = new Date();
    defaultDate.setDate(defaultDate.getDate() + 3);
    setReminderDate(defaultDate.toISOString().split('T')[0]);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !reminderDate) return;

    setIsSubmitting(true);
    setMessage('');

    try {
      const response = await fetch('https://venia.cloud/reminders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          reminder_date: reminderDate,
          message: "Don't forget to explore VenMail - your all-in-one email and productivity workspace!",
          utm_source: 'landing_page',
          utm_medium: 'reminder_button',
          utm_campaign: 'product_discovery',
        }),
      });

      const data = await response.json();

      if (data.success) {
        setMessage('Reminder scheduled successfully!');
        setShowConfirmation(true);
        setTimeout(() => {
          setIsExpanded(false);
          setShowConfirmation(false);
          setTimeout(() => setIsVisible(false), 500);
        }, 2000);
      } else {
        setMessage(data.error || 'Failed to schedule reminder');
      }
    } catch (error) {
      console.error('Error scheduling reminder:', error);
      setMessage('Failed to schedule reminder. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDismiss = () => {
    setIsVisible(false);
    // Don't show again for 24 hours
    localStorage.setItem('venmail_reminder_dismissed', new Date().toISOString());
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {isExpanded && (
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-6 w-80 animate-fadeIn">
          {showConfirmation ? (
            <div className="text-center py-4">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Reminder Scheduled!
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                We'll remind you on {new Date(reminderDate).toLocaleDateString()}
              </p>
            </div>
          ) : (
            <>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Not ready to sign up now?
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Get a reminder to explore VenMail on a later date
                  </p>
                </div>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 ml-4"
                >
                  <HiOutlineX className="w-4 h-4" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <HiOutlineMail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={handleEmailChange}
                      placeholder="your@email.com"
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Reminder Date
                  </label>
                  <div className="relative">
                    <HiOutlineCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="date"
                      value={reminderDate}
                      onChange={(e) => setReminderDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                {message && (
                  <div className={`text-sm p-2 rounded-lg ${
                    message.includes('success') 
                      ? 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400'
                      : 'bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400'
                  }`}>
                    {message}
                  </div>
                )}

                <div className="flex gap-2">
                  <button
                    type="submit"
                    disabled={isSubmitting || !email || !reminderDate}
                    className="flex-1 bg-primary-600 hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    {isSubmitting ? 'Scheduling...' : 'Remind me'}
                  </button>
                  <button
                    type="button"
                    onClick={handleLearnMore}
                    className="flex-1 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    Learn more
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      )}
      
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="bg-primary-600 hover:bg-primary-700 text-white p-4 rounded-full shadow-lg transition-all transform hover:scale-105 relative"
      >
        <HiOutlineBell className="w-6 h-6" />
        {!isExpanded && (
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
        )}
      </button>
    </div>
  );
};

export default ReminderButton;
