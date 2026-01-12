import SocialIconButton from '@/ui/social-icon-button';
import { FaGithub } from 'react-icons/fa';

const GITHUB_URL = 'https://github.com/NLuna19';

export default function GitHubButton() {
  return (
    <SocialIconButton
      href={GITHUB_URL}
      icon={FaGithub}
      label="GitHub"
      className="text-gray-900 hover:text-black focus-visible:ring-gray-900"
    />
  );
}
