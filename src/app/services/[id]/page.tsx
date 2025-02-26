import { getServiceById, getAllServiceIds } from '@/utils/services';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import ServicePageContent from '@/components/ServicePageContent';

type Props = {
  params: { id: string };
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

// Force static generation
export const dynamic = 'error';
export const dynamicParams = false;

// Pre-generate all possible service pages at build time
export async function generateStaticParams() {
  const ids = getAllServiceIds();
  return ids.map((id) => ({
    id: id,
  }));
}

export default function ServicePage({ params }: Props) {
  const service = getServiceById(params.id);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black">
      <ServicePageContent service={service} id={params.id} />
    </div>
  );
} 