import { SOCIAL_BUTTON_VARIANTS } from '@/constants/classes';
import SocialIconButton from '@/ui/social-icon-button';
import { FaGithub } from 'react-icons/fa';

const GITHUB_URL = 'https://github.com/NLuna19';

export default function GitHubButton() {
  return (
    <SocialIconButton
      href={GITHUB_URL}
      icon={FaGithub}
      label="GitHub"
      className={SOCIAL_BUTTON_VARIANTS.basic + ' light:hover:text-black dark:hover:text-white'}
    />
  );
}
