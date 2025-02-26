export interface Feature {
  title: string;
  description: string;
}

export interface Benefit {
  title: string;
  description: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features: Feature[];
  image: string;
  longDescription?: string;
  benefits: Benefit[];
  process: ProcessStep[];
}

export const services: Service[] = [
  {
    id: 'asset-protection',
    title: 'Asset Protection',
    description: 'Elite security solutions for high-value assets, from art collections to luxury properties.',
    image: '/hero-bg.svg',
    features: [
      {
        title: 'Advanced Surveillance',
        description: 'State-of-the-art monitoring systems with AI-powered threat detection.'
      },
      {
        title: 'Secure Transport',
        description: 'Armored vehicle fleet and specialized teams for secure asset transportation.'
      },
      {
        title: 'Risk Assessment',
        description: 'Comprehensive vulnerability analysis and security planning.'
      },
      {
        title: 'Emergency Response',
        description: '24/7 rapid response teams strategically positioned for immediate action.'
      }
    ],
    benefits: [
      {
        title: 'Complete Protection',
        description: 'End-to-end security coverage for all your valuable assets.'
      },
      {
        title: 'Expert Teams',
        description: 'Highly trained professionals with extensive experience in asset protection.'
      },
      {
        title: 'Peace of Mind',
        description: 'Rest assured knowing your assets are protected by industry-leading security measures.'
      }
    ],
    process: [
      {
        title: 'Initial Consultation',
        description: 'Detailed assessment of your assets and security requirements.'
      },
      {
        title: 'Security Design',
        description: 'Custom security plan development tailored to your specific needs.'
      },
      {
        title: 'Implementation',
        description: 'Professional deployment of security measures and systems.'
      },
      {
        title: 'Ongoing Monitoring',
        description: 'Continuous surveillance and regular security assessments.'
      }
    ]
  },
  {
    id: 'high-value-asset',
    title: 'High-Value Asset Protection',
    description: 'Comprehensive security solutions for valuable assets, from art collections to luxury properties.',
    image: '/hero-bg.svg',
    features: [
      {
        title: 'Advanced Surveillance',
        description: 'State-of-the-art monitoring systems for continuous asset protection.'
      },
      {
        title: 'Secure Transport',
        description: 'Specialized vehicles and protocols for safe asset movement.'
      },
      {
        title: 'Risk Assessment',
        description: 'Thorough evaluation of potential threats and vulnerabilities.'
      },
      {
        title: 'Emergency Response',
        description: 'Rapid reaction protocols for security incidents.'
      }
    ],
    benefits: [
      {
        title: 'Peace of Mind',
        description: 'Know your valuable assets are protected by industry experts.'
      },
      {
        title: 'Comprehensive Coverage',
        description: 'End-to-end security solutions for all types of assets.'
      },
      {
        title: 'Professional Service',
        description: 'Experienced security personnel with specialized training.'
      }
    ],
    process: [
      {
        title: 'Initial Assessment',
        description: 'Detailed evaluation of security requirements.'
      },
      {
        title: 'Strategy Development',
        description: 'Creation of tailored security protocols.'
      },
      {
        title: 'Implementation',
        description: 'Deployment of security measures and personnel.'
      },
      {
        title: 'Ongoing Monitoring',
        description: 'Continuous surveillance and regular security updates.'
      }
    ]
  },
  {
    id: 'executive-protection',
    title: 'Executive Protection',
    description: 'Elite close protection services for VIPs, executives, and high-profile individuals, ensuring their safety and privacy worldwide.',
    image: '/hero-bg.svg',
    features: [
      {
        title: 'Personal Security Details',
        description: 'Highly trained close protection officers providing 24/7 security coverage.'
      },
      {
        title: 'Threat Assessment',
        description: 'Comprehensive risk analysis and proactive security planning.'
      },
      {
        title: 'Secure Transportation',
        description: 'Armored vehicles and trained security drivers for safe transit.'
      },
      {
        title: 'Event Security',
        description: 'Specialized protection for public appearances and private events.'
      }
    ],
    benefits: [
      {
        title: 'Peace of Mind',
        description: 'Focus on your objectives while we ensure your safety and security.'
      },
      {
        title: 'Global Coverage',
        description: 'Access to our worldwide network of security professionals.'
      },
      {
        title: 'Discreet Service',
        description: 'Maintain privacy while receiving top-tier protection.'
      }
    ],
    process: [
      {
        title: 'Initial Consultation',
        description: 'We assess your specific security needs and requirements.'
      },
      {
        title: 'Risk Assessment',
        description: 'Comprehensive analysis of potential threats and vulnerabilities.'
      },
      {
        title: 'Security Planning',
        description: 'Development of tailored protection strategies.'
      },
      {
        title: 'Implementation',
        description: 'Deployment of security measures and personnel.'
      }
    ]
  },
  {
    id: 'corporate-risk-management',
    title: 'Corporate Risk Management',
    description: 'Comprehensive security solutions for businesses, including risk assessment, crisis management, and strategic security planning.',
    image: '/hero-bg.svg',
    features: [
      {
        title: 'Risk Assessment',
        description: 'Thorough analysis of organizational vulnerabilities and threats.'
      },
      {
        title: 'Crisis Management',
        description: 'Emergency response planning and incident management protocols.'
      },
      {
        title: 'Security Consulting',
        description: 'Expert guidance on security infrastructure and policies.'
      },
      {
        title: 'Employee Training',
        description: 'Security awareness and emergency response training programs.'
      }
    ],
    benefits: [
      {
        title: 'Risk Mitigation',
        description: 'Proactive identification and management of security risks.'
      },
      {
        title: 'Business Continuity',
        description: 'Ensure operations continue smoothly during security incidents.'
      },
      {
        title: 'Regulatory Compliance',
        description: 'Meet industry security standards and regulations.'
      }
    ],
    process: [
      {
        title: 'Security Audit',
        description: 'Comprehensive review of existing security measures.'
      },
      {
        title: 'Strategy Development',
        description: 'Creation of tailored security and risk management plans.'
      },
      {
        title: 'Implementation',
        description: 'Deployment of security solutions and protocols.'
      },
      {
        title: 'Ongoing Support',
        description: 'Continuous monitoring and adjustment of security measures.'
      }
    ]
  },
  {
    id: 'luxury-travel',
    title: 'Luxury Travel Security',
    description: 'Premium security services for luxury travel and lifestyle experiences.',
    image: '/hero-bg.svg',
    features: [
      {
        title: 'Travel Planning',
        description: 'Comprehensive security arrangements for all travel aspects.'
      },
      {
        title: 'Personal Protection',
        description: 'Dedicated security personnel throughout your journey.'
      },
      {
        title: 'Asset Security',
        description: 'Protection for valuable items during transit.'
      },
      {
        title: 'Privacy Assurance',
        description: 'Maintaining confidentiality and discretion.'
      }
    ],
    benefits: [
      {
        title: 'Peace of Mind',
        description: 'Travel with confidence knowing security is handled.'
      },
      {
        title: 'Seamless Service',
        description: 'Security integrated with luxury travel experience.'
      },
      {
        title: 'Global Network',
        description: 'Access to security resources worldwide.'
      }
    ],
    process: [
      {
        title: 'Travel Assessment',
        description: 'Evaluation of security needs for your journey.'
      },
      {
        title: 'Planning',
        description: 'Detailed security arrangements for each location.'
      },
      {
        title: 'Implementation',
        description: 'Deployment of security measures and personnel.'
      },
      {
        title: 'Ongoing Support',
        description: '24/7 security assistance throughout travel.'
      }
    ]
  },
  {
    id: 'event-security',
    title: 'Event Security',
    description: 'Comprehensive security solutions for high-profile events, ensuring seamless protection for attendees, assets, and venues.',
    image: '/hero-bg.svg',
    features: [
      {
        title: 'Risk Assessment & Planning',
        description: 'Detailed event security planning and risk assessment to identify potential threats and vulnerabilities.'
      },
      {
        title: 'Access Control',
        description: 'Advanced access control systems and protocols to manage attendee flow and prevent unauthorized entry.'
      },
      {
        title: 'VIP Protection',
        description: 'Dedicated security details for VIP guests and performers, ensuring their safety throughout the event.'
      },
      {
        title: 'Emergency Response',
        description: 'Rapid response teams and emergency protocols to handle any security incidents or medical emergencies.'
      }
    ],
    benefits: [
      {
        title: 'Peace of Mind',
        description: 'Event organizers and attendees can focus on the experience, knowing security is handled by professionals.'
      },
      {
        title: 'Reputation Protection',
        description: 'Maintain your events reputation with professional, discreet security that enhances rather than disrupts.'
      },
      {
        title: 'Regulatory Compliance',
        description: 'Ensure your event meets all security and safety regulations with our comprehensive solutions.'
      }
    ],
    process: [
      {
        title: 'Initial Consultation',
        description: 'Discuss event details, requirements, and specific security concerns with our expert team.'
      },
      {
        title: 'Site Assessment',
        description: 'Thorough evaluation of the venue to identify security needs and optimal deployment strategies.'
      },
      {
        title: 'Security Plan Development',
        description: 'Creation of a comprehensive security plan tailored to your events unique requirements.'
      },
      {
        title: 'Implementation',
        description: 'Professional deployment of security personnel and systems according to the agreed plan.'
      }
    ]
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Advanced digital protection solutions to safeguard your sensitive data, systems, and online presence from cyber threats.',
    image: '/hero-bg.svg',
    features: [
      {
        title: 'Threat Detection',
        description: 'Advanced monitoring systems to identify and prevent potential cyber threats in real-time.'
      },
      {
        title: 'Data Protection',
        description: 'Comprehensive solutions to secure sensitive information and prevent unauthorized access.'
      },
      {
        title: 'Network Security',
        description: 'Robust network protection measures to safeguard against intrusion and data breaches.'
      },
      {
        title: 'Incident Response',
        description: 'Rapid response protocols to address and mitigate cybersecurity incidents effectively.'
      }
    ],
    benefits: [
      {
        title: 'Data Integrity',
        description: 'Ensure your sensitive information remains protected and uncompromised at all times.'
      },
      {
        title: 'Business Continuity',
        description: 'Maintain operations with minimal disruption through proactive cybersecurity measures.'
      },
      {
        title: 'Regulatory Compliance',
        description: 'Meet industry standards and regulatory requirements for data protection and privacy.'
      }
    ],
    process: [
      {
        title: 'Security Assessment',
        description: 'Comprehensive evaluation of your current digital security posture and vulnerabilities.'
      },
      {
        title: 'Strategy Development',
        description: 'Creation of a tailored cybersecurity strategy aligned with your business needs.'
      },
      {
        title: 'Implementation',
        description: 'Deployment of advanced security solutions and protocols to protect your digital assets.'
      },
      {
        title: 'Continuous Monitoring',
        description: 'Ongoing surveillance and updates to maintain optimal security levels.'
      }
    ]
  }
];

export function getAllServiceIds(): string[] {
  return services.map(service => service.id);
}

export function getServiceById(id: string): Service | undefined {
  return services.find(service => service.id === id);
}

export function getAllServices(): Service[] {
  return services;
} 