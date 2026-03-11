export const SOCIAL_BUTTON_VARIANTS = {
  basic: 'text-gray-800 dark:text-slate-300 focus-visible:ring-gray-800',
};

/**
 * Animation helper classes that can be reused across components.
 * Right now we only have a gentle bounce.
 */
export const ANIMATION_CLASSES = {
  /**
   * Friendly bounce that triggers on hover.
   * The string is the Tailwind-style utility we expect to use, and
   * globals.css defines both the animation and a `hover:` variant
   * so it can be applied safely in className expressions.
   */
  bounceFriendly: 'hover:animate-bounce-friendly',
};
