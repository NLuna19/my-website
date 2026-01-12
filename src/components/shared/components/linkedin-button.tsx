import SocialIconButton from '@/components/ui/social-icon-button';
import { FaLinkedin } from 'react-icons/fa';

export default function LinkedInIcon() {
  return (
    <SocialIconButton
      href="https://www.linkedin.com/in/tu-perfil"
      icon={FaLinkedin}
      label="LinkedIn"
      className="text-[#0A66C2] hover:text-[#004182]"
    />
  );
}
