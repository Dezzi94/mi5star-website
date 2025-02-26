'use client';

import { getServiceById } from '@/utils/services';
import { notFound } from 'next/navigation';
import ServicePageContent from '@/components/ServicePageContent';

export default function CorporateRiskManagementPage() {
  const service = getServiceById('corporate-risk-management');

  if (!service) {
    notFound();
  }

  return <ServicePageContent service={service} id="corporate-risk-management" />;
} 