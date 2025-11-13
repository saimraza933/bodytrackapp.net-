import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const titles: { [key: string]: string } = {
      '/': 'Fitlytic - Digital Fitness Platform | Track Smarter. Train Stronger.',
      '/products': 'Products - Workout Guides & Meal Plans | Fitlytic',
      '/subscription': 'Subscription Plans - Premium Fitness Access | Fitlytic',
      '/about': 'About Us - Meet the Fitlytic Team | Fitlytic',
      '/blog': 'Fitness Blog - Tips & Insights | Fitlytic',
      '/contact': 'Contact Us - Get in Touch | Fitlytic',
      '/faq': 'FAQ - Frequently Asked Questions | Fitlytic',
      '/terms': 'Terms of Service | Fitlytic',
      '/privacy': 'Privacy Policy | Fitlytic',
      '/refund': 'Refund Policy | Fitlytic'
    };

    const title = titles[location.pathname] || 'Fitlytic - Digital Fitness Platform';
    document.title = title;
  }, [location.pathname]);

  return null;
};

export default PageTitle;