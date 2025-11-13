import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const titles: { [key: string]: string } = {
      '/': 'Body Track - Digital Fitness Platform | Track Smarter. Train Stronger.',
      '/products': 'Products - Workout Guides & Meal Plans | Body Track',
      '/subscription': 'Subscription Plans - Premium Fitness Access | Body Track',
      '/about': 'About Us - Meet the Body Track Team | Body Track',
      '/blog': 'Fitness Blog - Tips & Insights | Body Track',
      '/contact': 'Contact Us - Get in Touch | Body Track',
      '/faq': 'FAQ - Frequently Asked Questions | Body Track',
      '/terms': 'Terms of Service | Body Track',
      '/privacy': 'Privacy Policy | Body Track',
      '/refund': 'Refund Policy | Body Track'
    };

    const title = titles[location.pathname] || 'Body Track - Digital Fitness Platform';
    document.title = title;
  }, [location.pathname]);

  return null;
};

export default PageTitle;