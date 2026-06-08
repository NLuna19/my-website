import { ANIMATION_CLASSES, SOCIAL_BUTTON_VARIANTS } from '@/constants/classes';
import { sectionIds } from '@/types/sections';
import SocialIconButton from '@/ui/social-icon-button';
import { useEffect, useState } from 'react';
import { FaArrowAltCircleDown } from 'react-icons/fa';

export default function ProjectsSectionButton() {
  const [hidden, setHidden] = useState<boolean>(false);

  const handleClick = () => {
    document.body.style.removeProperty('overflow');
  };

  useEffect(() => {
    const handleScroll = () => {
      setHidden(window.scrollY > 0);
    };

    handleScroll(); // valor inicial

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`flex ${hidden ? 'hidden' : ''}`}>
      <SocialIconButton
        href={`#${sectionIds.skills}`}
        icon={FaArrowAltCircleDown}
        className={
          SOCIAL_BUTTON_VARIANTS.basic + ' hover:text-sky-800 ' + ANIMATION_CLASSES.bounceFriendly
        }
        target="_top"
        onClick={handleClick}
      />
    </div>
  );
}
