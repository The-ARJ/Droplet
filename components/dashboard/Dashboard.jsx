import Overlay from "./provider/overlay";
import TopNavigation from "./topnavigation";
import SideNavigation from "./sidenavigation";
import DashboardProvider from "./provider/context";

const style = {
  container: `h-screen overflow-hidden relative`,
  mainContainer: `flex flex-col h-screen pl-0 w-full lg:pl-20 lg:space-y-4`,
  main: `h-screen overflow-auto pb-36 pt-4 px-2 md:pb-8 md:pt-4 lg:pt-0 lg:px-4`,
};
const backgroundImage = "./assets/doodle.png";
export default function DashboardLayout({ children }) {
  return (
    <DashboardProvider>
      <div className={style.container}>
        <div className="flex items-start">
          <Overlay />
          <SideNavigation mobilePosition="left" />
          <div className={style.mainContainer}>
            <TopNavigation />
            <main
              className={style.main}
              style={{
                // backgroundImage: `url(${backgroundImage})`,
                backgroundRepeat: "repeat",
                backgroundSize: "cover",
                /* Add any additional background-related CSS properties here */
              }}
            >
              {children}
            </main>
          </div>
        </div>
      </div>
    </DashboardProvider>
  );
}
