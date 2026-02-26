import { sectionIds } from '@/types/sections';
import SocialIconButton from '@/ui/social-icon-button';
import { FaArrowAltCircleDown } from 'react-icons/fa';

export default function ProjectsSectionButton() {
  return (
    <SocialIconButton
      href={`#${sectionIds.projects}`}
      icon={FaArrowAltCircleDown}
      className="text-gray-800 hover:text-sky-800 focus-visible:ring-gray-800"
      target="_top"
    />
  );
}
