'use client';

import { getServiceById } from '@/utils/services';
import { notFound } from 'next/navigation';
import ServicePageContent from '@/components/ServicePageContent';

export default function HighValueAssetPage() {
  const service = getServiceById('high-value-asset');

  if (!service) {
    notFound();
  }

  return <ServicePageContent service={service} id="high-value-asset" />;
} 