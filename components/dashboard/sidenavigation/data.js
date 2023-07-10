import HomeIcon from './icons/home';
import StatusIcon from './icons/status';
import CreditsIcon from './icons/credits';
import ArchivesIcon from './icons/archives';
import SettingsIcon from './icons/settings';
import { MdLogout } from 'react-icons/md';
import UserIcon from './icons/user';
import SharedIcon from './icons/share';
const data = [
  {
    title: 'Home',
    icon: <HomeIcon />,
    link: '/home',
  },
  {
    title: 'Droplet',
    icon: <CreditsIcon />,
    link: '/droplet',
  },
  {
    title: 'Shared with me',
    icon: <SharedIcon />,
    link: '/shared',
  },
  {
    title: 'Profile',
    icon: <UserIcon />,
    link: '/profile',
  },
  {
    title: 'Settings',
    icon: <SettingsIcon />,
    link: '/settings',
  },

];

export default data;
