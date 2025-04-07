import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiGlobe } from "react-icons/ci";
import { IoChevronDownSharp, IoChevronUpOutline, IoMenuOutline, IoCloseOutline } from "react-icons/io5";

const menu: string[] = [
  'Home',
  'Our Services',
  'About us',
  'Carreers',
  'FAQ',
  'Gallery',
  'Announcements',
];

// Mapping titles to their routes
const routeMap: { [key: string]: string } = {
  'Home': '/',
  'About us': '/about',
  'Carreers': '/careers',
  'FAQ': '/faq',
  'Gallery': '/gallery',
  'Announcements': '/announcements',
  'Ayushman Cowfit': '/ourServices/ayushman-cowfit',
  'Cowfit Studio': '/ourServices/cowfit-studio'
};

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-black text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:px-28">
        <div>
          <img src="/cowfit-logo.svg" alt="Logo" className="w-28 h-auto" />
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-x-7">
          {menu.map((item, i) => (
            <NavbarMenu key={i} title={item} />
          ))}
          <div className="flex gap-x-2 items-center cursor-pointer">
            <CiGlobe size={20} className="!mt-[2px] text-gray-300" />
            <p className="text-lg font-semibold">En</p>
          </div>
          <Link to="/contact">
            <button className="px-4 py-2 font-medium rounded-md bg-yellow-400 text-black">
              Contact us
            </button>
          </Link>
        </nav>
        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu}>
            {mobileMenuOpen ? (
              <IoCloseOutline size={28} />
            ) : (
              <IoMenuOutline size={28} />
            )}
          </button>
        </div>
      </div>
      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-black px-4 pt-2 pb-4">
          <ul className="flex flex-col gap-y-4">
            {menu.map((item, i) => (
              <li key={i}>
                <MobileNavbarMenu title={item} />
              </li>
            ))}
            <li className="flex gap-x-2 items-center cursor-pointer">
              <CiGlobe size={20} className="!mt-[2px] text-gray-300" />
              <p className="text-lg font-semibold">En</p>
            </li>
            <li>
              <Link to="/contact">
                <button className="w-full px-4 py-2 font-medium rounded-md bg-yellow-400 text-black">
                  Contact us
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

interface NavbarMenuProps {
  title: string;
}

const NavbarMenu: React.FC<NavbarMenuProps> = ({ title }) => {
  const [dropDown, setDropDown] = useState<boolean>(false);

  const handleClick = () => {
    if (title === 'Our Services') {
      setDropDown(!dropDown);
    }
  };

  return (
    <div
      className="relative flex items-center cursor-pointer gap-x-1"
      onClick={handleClick}
    >
      {title !== 'Our Services' ? (
        <Link to={routeMap[title] || '#'} className="font-medium">
          {title}
        </Link>
      ) : (
        <span className="font-medium">{title}</span>
      )}
      {title === 'Our Services' && (
        <button>
          {dropDown ? (
            <IoChevronUpOutline size={19} className="!mt-[4px]" />
          ) : (
            <IoChevronDownSharp size={19} className="!mt-[5px]" />
          )}
        </button>
      )}
      {dropDown && title === 'Our Services' && <DropDown />}
    </div>
  );
};

const DropDown: React.FC = () => {
  return (
    <div className="absolute top-7 left-0 z-50 w-44 p-3 bg-black rounded-lg flex flex-col gap-y-3">
      <Link to={routeMap['Ayushman Cowfit']}>
        <p className="font-medium">Ayushman Cowfit</p>
      </Link>
      <Link to={routeMap['Cowfit Studio']}>
        <p className="font-medium">Cowfit Studio</p>
      </Link>
    </div>
  );
};

interface MobileNavbarMenuProps {
  title: string;
}

const MobileNavbarMenu: React.FC<MobileNavbarMenuProps> = ({ title }) => {
  const [dropDown, setDropDown] = useState<boolean>(false);

  const handleClick = () => {
    if (title === 'Our Services') {
      setDropDown(!dropDown);
    }
  };

  return (
    <div className="flex flex-col">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={handleClick}
      >
        {title !== 'Our Services' ? (
          <Link to={routeMap[title] || '#'} className="font-medium">
            {title}
          </Link>
        ) : (
          <span className="font-medium">{title}</span>
        )}
        {title === 'Our Services' && (
          <button>
            {dropDown ? (
              <IoChevronUpOutline size={19} />
            ) : (
              <IoChevronDownSharp size={19} />
            )}
          </button>
        )}
      </div>
      {dropDown && title === 'Our Services' && (
        <div className="mt-2 pl-4 flex flex-col gap-y-2">
          <Link to={routeMap['Ayushman Cowfit']}>
            <p className="font-medium">Ayushman Cowfit</p>
          </Link>
          <Link to={routeMap['Cowfit Studio']}>
            <p className="font-medium">Cowfit Studio</p>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
