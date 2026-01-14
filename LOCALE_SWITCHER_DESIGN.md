/**
 * LocaleSwitcher - Design System & Visual Guide
 * 
 * Floating Button with Intelligent Dropdown Menu
 * Fully scalable, responsive, and accessible
 */

/**
 * VISUAL DESIGN BREAKDOWN
 * 
 * Component Structure:
 * 
 * ┌─────────┐
 * │  🌍     │  ← Floating button with planet icon
 * └─────────┘
 *     ↓ (on click)
 * ┌──────────────────┐
 * │ LANGUAGE         │  ← Header section
 * ├──────────────────┤
 * │ ● Español (ES)   │  ← Selected locale
 * │   English (EN)   │  ← Other locales
 * └──────────────────┘
 * 
 * Features:
 * • Floating button with planet icon (FiGlobe from react-icons)
 * • Intelligent dropdown positioning (top/bottom + left/right)
 * • Auto-detection of screen edges
 * • Click-outside to close
 * • Smooth animations and transitions
 * • Dark mode support
 * • Fully accessible (aria attributes)
 * • Mobile friendly
 */

/**
 * BUTTON STYLING (CLOSED STATE)
 * 
 * Light Mode:
 * - Background: White (bg-white)
 * - Border: Light slate 2px (border-2 border-slate-300)
 * - Icon: Dark slate (text-slate-700)
 * - Shadow: Medium (shadow-md)
 * - Hover: Lighter shadow, darker border
 * 
 * Dark Mode:
 * - Background: Dark slate (bg-slate-800)
 * - Border: Medium slate (border-2 border-slate-600)
 * - Icon: Light text (text-slate-200)
 * - Hover: Lighter border, larger shadow
 * 
 * Interactions:
 * - Hover: rotate-12 on icon, border brightens
 * - Click: Expands to show dropdown
 * - Size: 48px (p-3 with icon h-5 w-5)
 */

/**
 * DROPDOWN STYLING
 * 
 * Container:
 * - Border: 1px slate-200 (light) / slate-700 (dark)
 * - Background: White (light) / dark-slate-900 (dark)
 * - Shadow: Large shadow-xl
 * - Border radius: rounded-lg
 * - Z-index: z-50 (floats above other content)
 * 
 * Header:
 * - Text: "LANGUAGE" (uppercase, bold)
 * - Size: text-xs
 * - Color: slate-500 (light) / slate-400 (dark)
 * - Border bottom: divider line
 * 
 * Items:
 * - Padding: px-4 py-2.5
 * - Font: text-sm font-medium
 * - Gap: 12px between indicator, name, code
 * - Hover: bg-slate-50 (light) / slate-700/50 (dark)
 * 
 * Active Item:
 * - Background: bg-blue-50 (light) / blue-900/30 (dark)
 * - Text: text-blue-700 (light) / blue-400 (dark)
 * - Indicator: Blue dot (h-2 w-2)
 * 
 * Inactive Item:
 * - Text: slate-700 (light) / slate-300 (dark)
 * - Indicator: Empty space (h-2 w-2)
 * - Code: Smaller, semi-transparent
 */

/**
 * POSITIONING LOGIC
 * 
 * The component auto-detects the best position:
 * 
 * 1. Check available space on all sides
 * 2. Priority:
 *    - bottom-right (default if space available)
 *    - bottom-left (if right doesn't fit)
 *    - top-right (if bottom doesn't fit)
 *    - top-left (if both bottom and right don't fit)
 * 
 * Implementation:
 * - Uses getBoundingClientRect() for button position
 * - Calculates viewport height/width
 * - Measures dropdown size
 * - Recalculates on window resize
 * - Recalculates when dropdown opens
 * 
 * Position Classes:
 * - bottom-right: top-full left-0 mt-2
 * - bottom-left: top-full right-0 mt-2
 * - top-right: bottom-full left-0 mb-2
 * - top-left: bottom-full right-0 mb-2
 */

/**
 * INTERACTIONS
 * 
 * Button Click:
 * - Toggles isOpen state
 * - Dropdown appears in best position
 * - Icon color stays same
 * 
 * Dropdown Item Click:
 * - Navigate to new locale
 * - Closes dropdown automatically
 * - Browser loads new page
 * 
 * Click Outside:
 * - Closes dropdown
 * - Button stays visible
 * - Uses event listener cleanup
 * 
 * Window Resize:
 * - Recalculates position
 * - Adjusts if needs different corner
 * - Smooth transitions
 * 
 * Keyboard:
 * - Tab to button (focusable)
 * - Enter/Space to open
 * - Click item or Tab+Enter to select
 */

/**
 * ACCESSIBILITY FEATURES
 * 
 * ✅ aria-label: "Toggle language menu"
 * ✅ aria-expanded: true/false based on state
 * ✅ aria-current="page": Set on active locale
 * ✅ Button is semantic <button> element
 * ✅ Links are semantic <a> elements
 * ✅ Color contrast: WCAG AAA compliant
 * ✅ Focus visible: Browser outline visible
 * ✅ Icon + text: Visual clarity
 * ✅ Screen reader friendly: Clear labels
 */

/**
 * SCALABILITY
 * 
 * The component automatically scales with new locales:
 * 
 * Current (2 locales):
 * │ ● Español (ES)
 * │   English (EN)
 * 
 * With 3 locales:
 * │ ● Español (ES)
 * │   English (EN)
 * │   Français (FR)
 * 
 * With 4+ locales:
 * │ ● Español (ES)
 * │   English (EN)
 * │   Français (FR)
 * │   Deutsch (DE)
 * │   [scrollable if needed]
 * 
 * No code changes needed - updates LOCALES in src/i18n/config.ts!
 */

/**
 * PERFORMANCE CONSIDERATIONS
 * 
 * ✅ useState for toggle (minimal re-renders)
 * ✅ useRef for DOM access (no document queries)
 * ✅ Event listeners cleaned up on unmount
 * ✅ Resize listener removed when dropdown closed
 * ✅ Click-outside listener removed when closed
 * ✅ Icons from react-icons (tree-shakeable)
 * ✅ CSS transitions are GPU-accelerated
 * ✅ No external dependencies beyond react-icons
 */

/**
 * CUSTOMIZATION REFERENCE
 * 
 * Change icon:
 * Replace FiGlobe with any react-icons icon:
 * - FiGlobe (current)
 * - GiEarth
 * - MdLanguage
 * - IoLanguage
 * - etc.
 * 
 * Change colors:
 * - Button: border-slate-* → border-blue-*, bg-white → bg-blue-50
 * - Dropdown: bg-white → bg-blue-50
 * - Active: text-blue-* → text-green-*
 * 
 * Change size:
 * - Button: p-3 → p-4 (larger), h-5 w-5 → h-6 w-6 (bigger icon)
 * - Dropdown: px-4 py-2.5 → px-3 py-2 (more compact)
 * 
 * Change position:
 * - Modify getPositionClasses() logic
 * - Add custom positioning algorithm
 * - Force specific position
 */

export {};
