'use client';

import { getServiceById } from '@/utils/services';
import { notFound } from 'next/navigation';
import ServicePageContent from '@/components/ServicePageContent';

export default function ExecutiveProtectionPage() {
  const service = getServiceById('executive-protection');

  if (!service) {
    notFound();
  }

  return <ServicePageContent service={service} id="executive-protection" />;
} 