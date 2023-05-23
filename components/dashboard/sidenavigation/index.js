"use client";
import SidenavItems from './items';
import { useToggle } from '../provider/context';

const style = {
  mobilePosition: {
    left: 'left-0 ',
    right: 'right-0 lg:left-0',
  },
  container: `pb-32 lg:pb-12 border `,
  close: `duration-700 ease-out hidden transition-all lg:w-24`,
  open: `absolute duration-500 ease-in transition-all w-8/12 z-40 sm:w-5/12 md:w-64`,
  default: `h-screen  border-2 border-gray-300  top-0 lg:absolute bg-white lg:block lg:z-40`,
};

export default function SideNavigation({ mobilePosition }) {
  const { open, ref } = useToggle();
  return (
    <aside
      ref={ref}
      className={`${style.default} ${style.mobilePosition[mobilePosition]} 
        ${open ? style.open : style.close} `}
    >
      <div className="{style.container}">
        <div className="bg-white flex items-center justify-center mb-6 pb-6 pt-10 sticky top-0 z-10 font-bold text-lg md:text-xl">
          Cardova
        </div>
        <SidenavItems />
      </div>
    </aside>
  );
}
