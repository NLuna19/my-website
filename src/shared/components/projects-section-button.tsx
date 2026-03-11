import { ANIMATION_CLASSES, SOCIAL_BUTTON_VARIANTS } from '@/constants/classes';
import { sectionIds } from '@/types/sections';
import SocialIconButton from '@/ui/social-icon-button';
import { FaArrowAltCircleDown } from 'react-icons/fa';

export default function ProjectsSectionButton() {
  return (
    <SocialIconButton
      href={`#${sectionIds.projects}`}
      icon={FaArrowAltCircleDown}
      className={
        SOCIAL_BUTTON_VARIANTS.basic + ' hover:text-sky-800 ' + ANIMATION_CLASSES.bounceFriendly
      }
      target="_top"
    />
  );
}
