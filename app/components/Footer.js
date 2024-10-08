'use  client';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-6">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <img src="/img/Amazon_Web_Services_logo_AWS.png" alt="BrandGen" width="65"  />
        </div>
        <div className="text-white text-sm flex flex-col items-end">
          <span>&copy; 2024 Dooley Inc.</span>
          <div>
            <Link href="https://www.yourwebsite.com/privacy-policy" passHref className="hover:underline" target="_blank">
              Privacy Policy
            </Link>
            &nbsp;|&nbsp;
            <Link href="https://www.yourwebsite.com/terms" passHref className="hover:underline" target="_blank">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;