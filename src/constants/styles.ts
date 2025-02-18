// Copier toutes les constantes de page.tsx
export const COLORS = {
  primary: {
    light: '#1a73e8',
    DEFAULT: '#4285f4',
    dark: '#8ab4f8'
  }
} as const;

export const GRADIENTS = {
  TEXT: `bg-clip-text text-transparent bg-gradient-to-r from-[${COLORS.primary.light}] via-[${COLORS.primary.DEFAULT}] to-[${COLORS.primary.dark}] dark:from-[${COLORS.primary.dark}] dark:via-[${COLORS.primary.DEFAULT}] dark:to-[${COLORS.primary.light}] animate-gradient bg-[length:200%_200%]`,
  BG_SECTION: "bg-gradient-to-b from-gray-50/50 via-white/0 to-white/0 dark:from-black/[0.2] dark:via-black/0 dark:to-black/0",
  BG_CARD: `bg-gradient-to-br from-[${COLORS.primary.light}]/[0.06] dark:from-[${COLORS.primary.dark}]/[0.06] to-transparent`,
  BADGE_BG: `bg-[${COLORS.primary.light}]/[0.05] dark:bg-[${COLORS.primary.dark}]/[0.05]`,
  BG_DECORATIVE: `bg-gradient-to-br from-[${COLORS.primary.light}]/[0.03] via-[${COLORS.primary.DEFAULT}]/[0.02] to-transparent`,
  HOVER_EFFECT: `hover:bg-[${COLORS.primary.light}]/[0.08] dark:hover:bg-[${COLORS.primary.dark}]/[0.08]`,
  BLOG_AI: "from-blue-500/20 to-purple-500/20 dark:from-blue-500/10 dark:to-purple-500/10",
  BLOG_CLOUD: "from-emerald-500/20 to-cyan-500/20 dark:from-emerald-500/10 dark:to-cyan-500/10",
  BLOG_SECURITY: "from-orange-500/20 to-red-500/20 dark:from-orange-500/10 dark:to-red-500/10"
} as const;

export const ANIMATIONS = {
  hover: "transition-all duration-300 hover:scale-[1.03]",
  rotate: "transition-transform duration-300 group-hover:-rotate-3",
  fadeIn: "animate-fade-in",
  gradient: "animate-gradient bg-[length:200%_200%]",
  slideUp: "transition-all duration-500 hover:-translate-y-1",
  groupHover: "transition-transform duration-300 group-hover:scale-110",
  cardHover: "transition-all duration-500 hover:shadow-xl hover:-translate-y-1",
  iconHover: "transition-all duration-300 group-hover:scale-110 group-hover:rotate-3",
  linkHover: "transition-transform duration-300 group-hover:translate-x-1",
  imageHover: "transition-transform duration-500 group-hover:scale-105",
  contentHover: "transition-transform duration-500 group-hover:translate-y-[-5px]",
  backgroundHover: "transition-all duration-500 group-hover:from-[#1a73e8]/[0.05] dark:group-hover:from-[#8ab4f8]/[0.05]",
  fadeUp: "translate-y-0 transition-all duration-500 group-hover:translate-y-[-5px]",
  scaleHover: "transition-transform duration-500 hover:scale-[1.01]",
  shine: "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/[0.05] before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700",
} as const;

export const COMMON_CLASSES = {
  badge: `inline-block text-[${COLORS.primary.light}] dark:text-[${COLORS.primary.dark}] text-sm font-medium px-4 py-2 rounded-full ${GRADIENTS.BADGE_BG} mb-6 animate-fade-in`,
  gradientText: `block py-2 ${GRADIENTS.TEXT}`,
  sectionBg: `py-24 md:py-32 px-4 ${GRADIENTS.BG_SECTION}`,
  cardHover: `group-hover:text-[${COLORS.primary.light}] dark:group-hover:text-[${COLORS.primary.dark}] transition-colors`,
  primaryButton: `group px-8 py-4 rounded-full bg-[${COLORS.primary.light}] hover:bg-[#1557b0] text-white transition-all duration-300 text-[17px] font-medium hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[${COLORS.primary.light}]`,
  secondaryButton: `group px-8 py-4 rounded-full bg-gray-100 dark:bg-white/[0.08] hover:bg-gray-200 dark:hover:bg-white/[0.12] text-gray-700 dark:text-gray-300 transition-all duration-300 text-[17px] font-medium hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400`,
  card: "group relative p-8 rounded-[32px] bg-white dark:bg-white/[0.02] hover:bg-gray-50 dark:hover:bg-white/[0.03] transition-all duration-500 border border-gray-200 dark:border-white/[0.1] hover:shadow-xl hover:-translate-y-1",
  cardContainer: "grid grid-cols-1 md:grid-cols-3 gap-8",
  iconContainer: `flex-shrink-0 w-14 h-14 rounded-2xl bg-[${COLORS.primary.light}]/[0.05] dark:bg-[${COLORS.primary.dark}]/[0.05] flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 group-hover:bg-[${COLORS.primary.light}]/[0.08] dark:group-hover:bg-[${COLORS.primary.dark}]/[0.08] transition-all duration-300`,
  sectionContainer: "max-w-[1200px] mx-auto",
  sectionHeader: "text-center mb-32",
  sectionTitle: "text-4xl md:text-5xl leading-[1.2] font-medium tracking-[-0.02em] mb-6",
  sectionDescription: "text-xl text-gray-600 dark:text-gray-400 max-w-[640px] mx-auto leading-relaxed",
  textContainer: "text-gray-600 dark:text-gray-400 leading-relaxed",
  cardWrapper: `
    rounded-[32px] 
    bg-white dark:bg-white/[0.02] 
    border border-gray-200 dark:border-white/[0.1] 
    overflow-hidden 
    hover:shadow-xl 
    transition-all duration-500 
    h-full 
    hover:-translate-y-1
  `,
  contactCard: "bg-gradient-to-b from-white to-gray-50/50 dark:from-white/[0.02] dark:to-white/[0.01] rounded-[48px] border border-gray-100 dark:border-white/[0.1] p-8 md:p-16 shadow-[0_0_80px_-15px_rgba(26,115,232,0.03)] transition-all duration-500 hover:shadow-[0_0_100px_-15px_rgba(26,115,232,0.05)]",
  focusRing: `focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[${COLORS.primary.light}] dark:focus:ring-[${COLORS.primary.dark}]`,
} as const; 