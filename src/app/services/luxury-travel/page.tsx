'use client';

import { getServiceById } from '@/utils/services';
import { notFound } from 'next/navigation';
import ServicePageContent from '@/components/ServicePageContent';

export default function LuxuryTravelPage() {
  const service = getServiceById('luxury-travel');

  if (!service) {
    notFound();
  }

  return <ServicePageContent service={service} id="luxury-travel" />;
} 