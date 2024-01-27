import {
  ActiveIcon,
  ArrowrightIcon,
  BrightnessIcon,
  BrokenIcon,
  DashboardIcon,
  DiscountIcon,
  InfocircleIcon,
  Logo,
  LogoutIcon,
  MoonIcon,
  ProfileIcon,
  SettingsIcon,
  TrendupIcon,
} from ".";

const Sidebar = () => {

 
  return (
    <nav className="h-full sticky top-0 border-[1px] border-[#EBECF2] flex flex-col justify-between">
      <div className="flex flex-col items-center py-[20px] gap-[20px] relative">
        {/* active */}
        <div className="absolute top-[5rem] right-[1px]">
          <ActiveIcon />
        </div>
        {/* main */}
        <Logo />
        <DashboardIcon />
        <TrendupIcon />
        <BrokenIcon />
        <DiscountIcon />
        <ProfileIcon />
        <InfocircleIcon />
        <div className="flex flex-col items-center gap-[8px] p-[8px] bg-white rounded-full">
          <div className="rounded-full bg-[#34CAA5] p-2 flex items-center justify-center">
            <BrightnessIcon />
          </div>
          <MoonIcon />
        </div>
      </div>
      <div className=" flex flex-col items-center gap-[20px]">
        <ArrowrightIcon />
        <SettingsIcon />
        <LogoutIcon />
        <div className="py-7 w-full bg-white"></div>
      </div>
    </nav>
  );
};

export default Sidebar;
