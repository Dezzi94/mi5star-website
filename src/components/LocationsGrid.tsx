'use client';

import { motion } from 'framer-motion';
import PremiumGlowEffect from './PremiumGlowEffect';

const locations = [
  {
    region: "Australia (HQ)",
    type: "headquarters",
    coordinates: { lat: -33.8688, lng: 151.2093 }
  },
  {
    region: "Hong Kong (HQ)",
    type: "headquarters",
    coordinates: { lat: 22.3193, lng: 114.1694 }
  },
  {
    region: "United Kingdom",
    type: "main",
    coordinates: { lat: 51.5074, lng: -0.1278 }
  },
  {
    region: "United States",
    type: "main",
    coordinates: { lat: 40.7128, lng: -74.0060 }
  },
  {
    region: "New Zealand",
    type: "operational",
    coordinates: { lat: -36.8485, lng: 174.7633 }
  },
  {
    region: "Singapore",
    type: "operational",
    coordinates: { lat: 1.3521, lng: 103.8198 }
  },
  {
    region: "China",
    type: "operational",
    coordinates: { lat: 39.9042, lng: 116.4074 }
  },
  {
    region: "India",
    type: "operational",
    coordinates: { lat: 28.6139, lng: 77.2090 }
  },
  {
    region: "Japan",
    type: "operational",
    coordinates: { lat: 35.6762, lng: 139.6503 }
  },
  {
    region: "Korea",
    type: "operational",
    coordinates: { lat: 37.5665, lng: 126.9780 }
  },
  {
    region: "Indonesia",
    type: "operational",
    coordinates: { lat: -6.2088, lng: 106.8456 }
  }
];

interface LocationsGridProps {
  className?: string;
  showAll?: boolean;
}

export default function LocationsGrid({ className = '', showAll = false }: LocationsGridProps) {
  const displayLocations = showAll ? locations : locations.filter(loc => loc.type !== 'operational');

  return (
    <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 ${className}`}>
      {displayLocations.map((location, index) => (
        <PremiumGlowEffect
          key={location.region}
          className="h-full"
          intensity="low"
          hover={true}
        >
          <motion.div
            className="relative h-full bg-black/90 backdrop-blur-sm p-6 rounded-xl border border-[var(--secondary)]/10 group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            {/* Hover background effect */}
            <motion.div
              className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: 'radial-gradient(circle at center, rgba(211, 171, 83, 0.1) 0%, transparent 100%)',
              }}
            />

            {/* Location marker */}
            <div className="relative z-10 flex items-start gap-3">
              <motion.div
                className="relative"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
              >
                <span className="absolute -top-1 -left-1 w-3 h-3 bg-[var(--secondary)]/20 rounded-full animate-ping" />
                <span className="relative block w-1 h-1 bg-[var(--secondary)] rounded-full" />
              </motion.div>
              
              <div>
                <motion.h3
                  className="text-lg font-semibold text-white group-hover:text-[var(--secondary)] transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  {location.region}
                </motion.h3>
                <motion.p
                  className="text-sm text-white/50 capitalize"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  {location.type}
                </motion.p>
              </div>
            </div>

            {/* Coordinates */}
            <motion.div
              className="absolute bottom-4 right-4 text-xs text-white/30 opacity-0 group-hover:opacity-100 transition-opacity"
              initial={{ y: 10 }}
              whileHover={{ y: 0 }}
            >
              {location.coordinates.lat.toFixed(2)}, {location.coordinates.lng.toFixed(2)}
            </motion.div>

            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-8 h-8">
              <motion.div
                className="absolute top-0 left-0 w-px h-8 bg-gradient-to-b from-[var(--secondary)]/30 to-transparent"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
              />
              <motion.div
                className="absolute top-0 left-0 h-px w-8 bg-gradient-to-r from-[var(--secondary)]/30 to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
              />
            </div>

            {/* Particle effects */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial="initial"
              whileHover="animate"
            >
              {[...Array(2)].map((_, i) => (
                <motion.span
                  key={i}
                  className="absolute w-1 h-1 bg-[var(--secondary)]"
                  variants={{
                    initial: { scale: 0, opacity: 0 },
                    animate: {
                      scale: [0, 1.5, 0],
                      opacity: [0, 1, 0],
                      x: [0, Math.random() * 50 - 25],
                      y: [0, Math.random() * -50],
                      transition: {
                        duration: 1,
                        repeat: Infinity,
                        repeatDelay: Math.random() * 0.5,
                      }
                    }
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </PremiumGlowEffect>
      ))}
    </div>
  );
} 