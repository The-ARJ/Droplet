import { useRouter } from 'next/navigation';
import data from './data';
import { useToggle } from '../provider/context';
import { usePathname } from "next/navigation";

const style = {
  title: `mx-4 text-sm`,
  active: `bg-purple-900 rounded-full`,
  link: `flex items-center justify-start my-1 p-3 w-full`,
  close: `lg:duration-700 lg:ease-out lg:invisible lg:opacity-0 lg:transition-all`,
  open: `lg:duration-500 lg:ease-in lg:h-auto lg:opacity-100 lg:transition-all lg:w-auto`,
  activeTitle: `bg-purple-900`,
  activeDiv: `bg-[#111827] text-white rounded-3xl`,
};

export default function SidenavItems() {
  const { asPath } = useRouter();
  const { open } = useToggle();
  const pathname = usePathname();

  return (
    <>
      <ul className="md:p-2">
        <li>
          {data.map((item) => (
            <div key={item.title} className={`${item.link === pathname ? style.activeDiv : ''} mr-2`}>
              <a href={item.link} className={`${style.link}`}>
                <div className={`p-2`}>
                  <span>{item.icon}</span>
                </div>
                <span className={`${style.title} ${open ? style.open : style.close}`}>
                  {item.title}
                </span>
              </a>
            </div>
          ))}
        </li>
      </ul>
    </>
  );
}
