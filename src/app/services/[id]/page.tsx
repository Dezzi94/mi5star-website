import { getServiceById, getAllServiceIds } from '@/utils/services';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import ServicePageContent from '@/components/ServicePageContent';

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getServiceById(params.id);
  
  if (!service) {
    return {
      title: 'Service Not Found - Mi5Star Security',
      description: 'The requested service could not be found.',
    };
  }

  return {
    title: `${service.title} - Mi5Star Security`,
    description: service.description,
  };
}

// Force static generation for all service pages
export const dynamic = 'force-static';
export const dynamicParams = false;

// Generate static params for all valid service IDs
export async function generateStaticParams() {
  const serviceIds = getAllServiceIds();
  return serviceIds.map((id) => ({
    id: id,
  }));
}

export default function ServicePage({ params }: Props) {
  const service = getServiceById(params.id);

  if (!service) {
    notFound();
  }

  return <ServicePageContent service={service} id={params.id} />;
} 