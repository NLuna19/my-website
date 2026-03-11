import { ANIMATION_CLASSES, SOCIAL_BUTTON_VARIANTS } from '@/constants/classes';
import SocialIconButton from '@/ui/social-icon-button';
import { FaLinkedin } from 'react-icons/fa';

export default function LinkedInIcon() {
  return (
    <SocialIconButton
      href="https://www.linkedin.com/in/nluna190898/"
      icon={FaLinkedin}
      label="LinkedIn"
      className={
        SOCIAL_BUTTON_VARIANTS.basic + ' hover:text-[#0A66C2] ' + ANIMATION_CLASSES.bounceFriendly
      }
    />
  );
}
