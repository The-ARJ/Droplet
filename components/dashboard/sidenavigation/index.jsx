"use client";
import SidenavItems from './items';
import { useToggle } from '../provider/context';

const style = {
  mobilePosition: {
    left: 'left-0 ',
    right: 'right-0 lg:left-0',
  },
  container: `pb-32 lg:pb-12`,
  close: `duration-700 ease-out hidden transition-all lg:w-24`,
  open: `absolute duration-500 ease-in transition-all w-8/12 z-40 sm:w-5/12 md:w-64`,
  default: `h-screen bg-[#8b5cf6] border-r border-gray-500 top-0 lg:absolute lg:block lg:z-40`,
  smallProfile: `lg:pt-2 lg:pr-2`,
};

export default function SideNavigation({ mobilePosition }) {
  const { open, ref } = useToggle();
  return (
    <aside
      ref={ref}
      className={`${style.default} ${style.mobilePosition[mobilePosition]} 
        ${open ? style.open : style.close} `}
    >
      <div className={style.container}>
        <div className={` flex items-center justify-center mb-6 pb-6 pt-10 sticky top-0 z-10 font-bold text-lg md:text-xl `}>
          <img src='./assets/logo.png' className=' h-14 mr-2' />
          <h1 className={` text-white ${open ? 'block' : ' hidden text-sm font-medium'}`}> Cardova</h1>
        </div>
        <SidenavItems />
      </div>
      <div className=" bottom-0">
      <div className={` rounded-lg   ${open ? '' : style.smallProfile}`}>
        <div className="flex items-center justify-center">
          <img
            src="./assets/user1.png"
            alt="User Profile"
            className={`rounded-full h-20 w-20 ${open ? '' : 'h-8 w-8'}`}
          />
        </div>
        <div className="text-center mt-4">
          <h3 className={`text-xl font-semibold text-white ${open ? '' : 'text-xs'}`}>John Doe</h3>
          <p className={`text-gray-200 text-sm ${open ? '' : 'text-[9px]'}`}>UX Designer</p>
        </div>
      </div>
      </div>
    </aside>
  );
}
