import HomeIcon from './icons/home';
import StatusIcon from './icons/status';
import CreditsIcon from './icons/credits';
import ArchivesIcon from './icons/archives';
import SettingsIcon from './icons/settings';
const data = [
  {
    title: 'Home',
    icon: <HomeIcon />,
    link: '/home',
  },
  {
    title: 'Card',
    icon: <CreditsIcon />,
    link: '/card',
  },
  {
    title: 'Shared with me',
    icon: <ArchivesIcon />,
    link: '/shared',
  },
  {
    title: 'Profile',
    icon: <StatusIcon />,
    link: '/profile',
  },
  {
    title: 'Settings',
    icon: <SettingsIcon />,
    link: '/settings',
  }
];

export default data;
