'use client';

import * as React from 'react';
import { useEffect, useState, useRef } from 'react';
import { HouseIcon, InboxIcon, ZapIcon, ChevronDownIcon, PhoneIcon } from 'lucide-react';
import { SiSocialblade } from "react-icons/si";
import PersonalBtn from '@/components/personal_btn/personal_btn';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import MyIcon from '@/assets/IM.png';

// Logo
const Logo = (props: React.SVGAttributes<SVGElement>) => (
  <img src={MyIcon} alt="icon" className="h-[8vh]" />
);

// User Menu
const UserMenu = ({
  userName = 'John Doe',
  userEmail = 'john@example.com',
  userAvatar,
  onItemClick
}: {
  userName?: string;
  userEmail?: string;
  userAvatar?: string;
  onItemClick?: (item: string) => void;
}) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="ghost" className="h-9 py-0 hover:bg-accent hover:text-accent-foreground">
        <Avatar className="h-7 w-7">
          <AvatarImage src={userAvatar} alt={userName} />
          <AvatarFallback className="text-xs">
            {userName.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
        <ChevronDownIcon className="h-3 w-3 ml-1" />
        <span className="sr-only">User menu</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" className="w-56">
      <DropdownMenuLabel>
        <div className="flex flex-col space-y-1">
          <p className="text-sm font-medium leading-none">{userName}</p>
          <p className="text-xs leading-none text-muted-foreground">{userEmail}</p>
        </div>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem onClick={() => onItemClick?.('profile')}>Profile</DropdownMenuItem>
      <DropdownMenuItem onClick={() => onItemClick?.('settings')}>Settings</DropdownMenuItem>
      <DropdownMenuItem onClick={() => onItemClick?.('billing')}>Billing</DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem onClick={() => onItemClick?.('logout')}>Log out</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

// Types
export interface Navbar10NavItem {
  href?: string;
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string; 'aria-hidden'?: boolean }>;
  active?: boolean;
}

export interface Navbar10Props extends React.HTMLAttributes<HTMLElement> {
  logo?: React.ReactNode;
  logoHref?: string;
  navigationLinks?: Navbar10NavItem[];
  upgradeText?: string;
  userName?: string;
  userEmail?: string;
  userAvatar?: string;
  onNavItemClick?: (href: string) => void;
  onUpgradeClick?: (href: string) => void;
  onUserItemClick?: (item: string) => void;
}

const defaultNavigationLinks: Navbar10NavItem[] = [
  { href: '#', label: 'Home', icon: HouseIcon, active: true },
  { href: '#', label: 'Inbox', icon: InboxIcon },
  { href: '#', label: 'Insights', icon: ZapIcon },
];

export const Navbar10 = React.forwardRef<HTMLElement, Navbar10Props>(
  (
    {
      className,
      logo = <Logo />,
      logoHref = '#',
      navigationLinks = defaultNavigationLinks,
      upgradeText = 'Marketing Services',
      userName = 'John Doe',
      userEmail = 'john@example.com',
      userAvatar,
      onNavItemClick,
      onUpgradeClick,
      onUserItemClick,
      ...props
    },
    ref
  ) => {
    const [isMobile, setIsMobile] = useState(false);
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
      const checkWidth = () => {
        if (containerRef.current) setIsMobile(containerRef.current.offsetWidth < 768);
      };
      checkWidth();
      const resizeObserver = new ResizeObserver(checkWidth);
      if (containerRef.current) resizeObserver.observe(containerRef.current);
      return () => resizeObserver.disconnect();
    }, []);

    const combinedRef = React.useCallback((node: HTMLElement | null) => {
      containerRef.current = node;
      if (typeof ref === 'function') ref(node);
      else if (ref) ref.current = node;
    }, [ref]);

    return (
      <header
        ref={combinedRef}
        className={cn(
          'h-[8vh] sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 [&_*]:no-underline',
          className
        )}
        {...props}
      >
        <div className="mx-auto bg-[#2f2f2f] flex h-[9vh] items-center justify-between gap-4 border-b border-black">
          {/* Left side */}
          <div className="flex flex-1 items-center">
            {isMobile ? (
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    size="sm"
                    className="h-[8vh] py-0 px-3 hover:bg-gray-200 hover:text-gray-900 flex items-center gap-2 border-none shadow-none outline-none focus:outline-none"
                  >
                    <PhoneIcon size={18} />
                    <span className="sr-only">Mobile Menu</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent align="start" className="w-40">
                  <NavigationMenu className="max-w-none">
                    <NavigationMenuList className="relative flex-col items-start gap-0">
                      <PersonalBtn />
                    </NavigationMenuList>
                  </NavigationMenu>
                </PopoverContent>
              </Popover>
            ) : (
              <NavigationMenu className="flex">
                <PersonalBtn />
              </NavigationMenu>
            )}
          </div>

          {/* Middle: Logo */}
          <div className="flex items-center">
            <button
              onClick={(e) => e.preventDefault()}
              className="text-primary hover:text-primary/90 transition-colors cursor-pointer"
            >
              {logo}
            </button>
          </div>

          {/* Right: Upgrade button */}
          <div className="flex flex-1 items-center justify-end gap-4">
            <Button
              size="sm"
              className="text-[16px] h-[8vh] flex items-center gap-2 border-none shadow-none outline-none focus:outline-none
                         transition-colors duration-200 hover:cursor-pointer hover:text-[#f8ffc5ff] hover:fill-[#f8ffc5ff]"
              onClick={() => {
                if (onUpgradeClick) onUpgradeClick("https://influencemeweb.vercel.app/");
                else window.open("https://influencemeweb.vercel.app/", "_blank");
              }}
            >
              <SiSocialblade className="mr-2 transition-colors duration-200" size={20} aria-hidden />
              <span className="hidden sm:inline">{upgradeText}</span>
              <span className="sm:hidden sr-only">{upgradeText}</span>
            </Button>
          </div>
        </div>
      </header>
    );
  }
);

Navbar10.displayName = 'Navbar10';

export { Logo, UserMenu };
