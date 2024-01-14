import MainContent from "@/modules/home/MainContent";
import SidebarLeftContent from "@/modules/home/SidebarLeftContent";
import SidebarRightContent from "@/modules/home/SidebarRightContent";

const HomePage = () => {
  return (
    <div className="flex-auto overflow-visible text-lg">
      <div>
        <div className="mx-auto my-0 grid w-full max-w-7xl grid-cols-layout-1 gap-2 p-0 text-base md:grid-cols-layout-2 md:p-2 lg:grid-cols-layout-3 lg:gap-4 lg:p-4">
          <SidebarLeftContent />
          <MainContent />
          <SidebarRightContent />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
