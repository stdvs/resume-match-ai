import { ThemeConfig, ThemePreset } from '../types';

export const THEME_PRESETS: Record<ThemePreset, ThemeConfig> = {
  auto: {
    name: 'Auto (Score-Based)',
    accent: '#6366F1',
    accent2: '#8B5CF6',
    glow: 'rgba(99, 102, 241, 0.40)',
    blob1: 'rgba(99, 102, 241, 0.45)',
    blob2: 'rgba(139, 92, 246, 0.40)',
    blob3: 'rgba(6, 182, 212, 0.35)',
    badge: 'Dynamic',
  },
  aurora: {
    name: 'Aurora',
    accent: '#10B981',
    accent2: '#8B5CF6',
    glow: 'rgba(16, 185, 129, 0.40)',
    blob1: 'rgba(16, 185, 129, 0.45)',
    blob2: 'rgba(139, 92, 246, 0.40)',
    blob3: 'rgba(6, 182, 212, 0.35)',
    badge: 'Emerald & Violet',
  },
  sunset: {
    name: 'Sunset',
    accent: '#F43F5E',
    accent2: '#F97316',
    glow: 'rgba(244, 63, 94, 0.40)',
    blob1: 'rgba(244, 63, 94, 0.45)',
    blob2: 'rgba(249, 115, 22, 0.40)',
    blob3: 'rgba(245, 158, 11, 0.35)',
    badge: 'Rose & Amber',
  },
  ocean: {
    name: 'Ocean',
    accent: '#06B6D4',
    accent2: '#3B82F6',
    glow: 'rgba(6, 182, 212, 0.40)',
    blob1: 'rgba(6, 182, 212, 0.45)',
    blob2: 'rgba(59, 130, 246, 0.40)',
    blob3: 'rgba(99, 102, 241, 0.35)',
    badge: 'Cyan & Blue',
  },
  forest: {
    name: 'Forest',
    accent: '#059669',
    accent2: '#84CC16',
    glow: 'rgba(5, 150, 105, 0.40)',
    blob1: 'rgba(5, 150, 105, 0.45)',
    blob2: 'rgba(132, 204, 22, 0.35)',
    blob3: 'rgba(13, 148, 136, 0.40)',
    badge: 'Emerald & Lime',
  },
};

/**
 * Returns dynamic theme config based on score if preset is 'auto',
 * or returns the preset's fixed palette.
 */
export function getActiveTheme(
  preset: ThemePreset,
  matchScore: number | null
): ThemeConfig {
  if (preset !== 'auto') {
    return THEME_PRESETS[preset];
  }

  // If auto and no score yet, return calm indigo / violet / cyan default
  if (matchScore === null) {
    return THEME_PRESETS.auto;
  }

  // 0-49: red / orange / magenta palette (Needs Work)
  if (matchScore < 50) {
    return {
      name: 'Needs Work (Score: ' + matchScore + ')',
      accent: '#EF4444',
      accent2: '#F97316',
      glow: 'rgba(239, 68, 68, 0.45)',
      blob1: 'rgba(239, 68, 68, 0.50)',
      blob2: 'rgba(249, 115, 22, 0.42)',
      blob3: 'rgba(236, 72, 153, 0.38)',
      badge: 'Critical Gaps',
    };
  }

  // 50-74: amber / gold / coral palette (Good Match)
  if (matchScore < 75) {
    return {
      name: 'Good Match (Score: ' + matchScore + ')',
      accent: '#F59E0B',
      accent2: '#EA580C',
      glow: 'rgba(245, 158, 11, 0.45)',
      blob1: 'rgba(245, 158, 11, 0.48)',
      blob2: 'rgba(234, 88, 12, 0.40)',
      blob3: 'rgba(251, 146, 60, 0.36)',
      badge: 'Moderate Alignment',
    };
  }

  // 75-100: emerald / teal / cyan palette (Strong Match)
  return {
    name: 'Strong Match (Score: ' + matchScore + ')',
    accent: '#10B981',
    accent2: '#14B8A6',
    glow: 'rgba(16, 185, 129, 0.45)',
    blob1: 'rgba(16, 185, 129, 0.50)',
    blob2: 'rgba(20, 184, 166, 0.42)',
    blob3: 'rgba(6, 182, 212, 0.38)',
    badge: 'High Alignment',
  };
}
