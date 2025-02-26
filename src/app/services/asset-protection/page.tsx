'use client';

import { getServiceById } from '@/utils/services';
import { notFound } from 'next/navigation';
import ServicePageContent from '@/components/ServicePageContent';

export default function AssetProtectionPage() {
  const service = getServiceById('asset-protection');

  if (!service) {
    notFound();
  }

  return <ServicePageContent service={service} id="asset-protection" />;
} 