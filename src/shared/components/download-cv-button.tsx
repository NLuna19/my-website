import SocialIconButton from '@/ui/social-icon-button';
import { FaFilePdf } from 'react-icons/fa';

const RESUME_URL = './NICOLAS_OMAR_LUNA_CV.pdf';

export default function DownloadCVButton() {
  return (
    <SocialIconButton
      href={RESUME_URL}
      icon={FaFilePdf}
      label="Resume"
      className="text-gray-800 hover:text-red-700 focus-visible:ring-gray-800"
    />
  );
}
