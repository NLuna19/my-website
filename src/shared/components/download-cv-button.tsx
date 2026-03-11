import { ANIMATION_CLASSES, SOCIAL_BUTTON_VARIANTS } from '@/constants/classes';
import SocialIconButton from '@/ui/social-icon-button';
import { FaRegFilePdf } from 'react-icons/fa';

const RESUME_URL = './NICOLAS_OMAR_LUNA_CV.pdf';

export default function DownloadCVButton() {
  return (
    <SocialIconButton
      href={RESUME_URL}
      icon={FaRegFilePdf}
      label="Resume"
      className={
        SOCIAL_BUTTON_VARIANTS.basic + ' hover:text-red-700 ' + ANIMATION_CLASSES.bounceFriendly
      }
    />
  );
}
