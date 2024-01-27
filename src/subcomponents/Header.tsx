import { Drawer, ScrollArea } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { BiSearch } from "react-icons/bi"
import { ActiveIcon, ArrowdownIcon, ArrowrightIcon, BrightnessIcon, BrokenIcon, CalendarIcon, DashboardIcon, DiscountIcon, InfocircleIcon, Logo, LogoutIcon, MoonIcon, NotIcon, ProfileIcon, SettingsIcon, TrendupIcon } from ".";
import { RxHamburgerMenu } from "react-icons/rx";
import ProfileImg from '../assets/profile.png'

const Header = () => {
  const [opened, { open, close }] = useDisclosure();

  return (
    <header className="md:p-[18px] p-[12px] border-[1px] border-[#EBECF2]">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-[12px]">
          <RxHamburgerMenu
            className="text-[1.5rem] lg:hidden cursor-pointer"
            onClick={open}
          />
          <h3 className="md:text-[20px] text-[16px]">Dashboard</h3>
          {/* drawer */}
          <Drawer
            position="left"
            size={200}
            opened={opened}
            onClose={close}
            withCloseButton={true}
            hiddenFrom="lg"
            title={
              <div className="text-center w-full relative ">
                <Logo />
              </div>
            }
            scrollAreaComponent={ScrollArea.Autosize}
          >
            <nav className="h-full flex flex-col justify-between pt-7">
              <div className="flex flex-col items-center gap-[20px]">
                <div className="absolute right-[1px]">
                  <ActiveIcon />
                </div>
                <DashboardIcon />
                <TrendupIcon />
                <BrokenIcon />
                <DiscountIcon />
                <ProfileIcon />
                <InfocircleIcon />
                <div className="flex flex-col items-center gap-[8px] p-[8px] bg-[#F7F8FA] rounded-full">
                  <div className="rounded-full bg-[#34CAA5] p-2 flex items-center justify-center">
                    <BrightnessIcon />
                  </div>
                  <MoonIcon />
                </div>
              </div>
              <div className="mt-20 sticky top-0 flex flex-col items-center gap-[20px]">
                <ArrowrightIcon />
                <SettingsIcon />
                <LogoutIcon />
              </div>
            </nav>
          </Drawer>
        </div>
        <div className="flex items-center md:gap-[20px] gap-[10px]">
          {/* search */}
          <div className="relative font-[int] max-lg:hidden">
            <BiSearch className="text-[18px] absolute top-[11px] left-[16px] text-gray-400" />
            <input
              type="text"
              className="w-[21rem] bg-white p-2 pl-[2.6rem] rounded-full text-gray-400 focus:ring-0 focus:outline-0 "
              placeholder="Search..."
            />
          </div>
          {/* search icon */}
          <BiSearch className="text-[20px]" />
          {/* calendar */}
          <div className="flex items-center gap-[10px]">
            <CalendarIcon />
            <h4 className="text-[14px] max-md:hidden">November 15, 2023</h4>
          </div>
          {/* notification */}
          <button className="sm:p-[11px] sm:p-[8px] rounded-full sm:border-[0.769px] sm:border-[#DADDDD]">
            <NotIcon />
          </button>
          {/* profile */}
          <div className="flex justify-center items-center gap-[12px] sm:py-[6px] sm:px-[8px]  rounded-full border-[1px] border-[#DADDDD]">
            <img src={ProfileImg} alt="profile" />
            <div className="flex flex-col max-xlg:hidden">
              <h3 className="text-[16px]">Justin Bergson</h3>
              <h3 className="text-[14px]">Justin@gmail.com</h3>
            </div>
            <div className="max-md:hidden">
              <ArrowdownIcon />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header
