"use client";
import { useToggle } from './context';

const style = {
  overlay: `bg-zinc-700 fixed h-screen left-0 opacity-20 top-0 w-screen z-30 lg:bg-transparent duration-500 ease-in transition-all `,
};

// The overlay will only be visible on small screens to emphasize the focus on the side navigation when it is open.
export default function Overlay() {
  const { open } = useToggle();
  return <div className={open ? style.overlay : ''} />;
}
