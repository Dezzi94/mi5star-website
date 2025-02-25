import { Metadata } from 'next';
import ServicesLayoutWrapper from '@/components/ServicesLayoutWrapper';

type Props = {
  params: { id: string };
  children: React.ReactNode;
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

export default function ServiceLayout({ children }: { children: React.ReactNode }) {
  return (
    <ServicesLayoutWrapper>
      {children}
    </ServicesLayoutWrapper>
  );
} 