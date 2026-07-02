export interface Product {
  slug: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;          // Center image (main hero image)
  backgroundImage?: string;   // Background image (full width banner) - optional
  heroBackground: string;     // Background color
  heroFeatures: string[];
  keyPoints: string[];
  suitableFor: string[];
  relatedProducts: string[];
  theme: {
    border: string;
    bg: string;
    dot: string;
    accent: string;
    lightAccent: string;
    shadow: string;
    gradient: string;
    cardBg: string;
    textPrimary: string;
    textSecondary: string;
    textMuted: string;
    borderLight: string;
    hoverBg: string;
    badgeBg: string;
    badgeText: string;
    buttonBg: string;
    buttonHover: string;
  };
}