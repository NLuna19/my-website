import SocialIconButton from '@/ui/social-icon-button';
import { FaLinkedin } from 'react-icons/fa';

export default function LinkedInIcon() {
  return (
    <SocialIconButton
      href="https://www.linkedin.com/in/nluna190898/"
      icon={FaLinkedin}
      label="LinkedIn"
      className="text-gray-800 hover:text-[#0A66C2] focus-visible:ring-gray-800"
    />
  );
}
