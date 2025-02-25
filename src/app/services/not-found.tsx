import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="heading-xl mb-6">
          <span className="text-gradient">404</span>
        </h1>
        <h2 className="heading-lg mb-8">Service Not Found</h2>
        <p className="text-text-secondary text-lg mb-8 max-w-2xl">
          The service you are looking for does not exist or has been moved.
          Please check our available services or contact us for assistance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/services" className="btn-primary">
            View All Services
          </Link>
          <Link href="/contact" className="btn-secondary">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
} 