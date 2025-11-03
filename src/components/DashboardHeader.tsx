import { useClerk, useUser } from '@clerk/clerk-react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import {
  Bars3Icon,
  BellIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/20/solid';
import { useNavigate } from 'react-router-dom';

interface DashboardHeaderProps {
  setSidebarOpen: (open: boolean) => void;
}

export default function DashboardHeader({
  setSidebarOpen,
}: DashboardHeaderProps) {
  const { user } = useUser();
  const { signOut } = useClerk();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <div className="sticky top-0 z-50 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8 dark:border-white/10 dark:bg-gray-900 dark:shadow-none">
      <button
        type="button"
        onClick={() => setSidebarOpen(true)}
        className="-m-2.5 p-2.5 text-gray-700 lg:hidden dark:text-gray-400 dark:hover:text-white"
      >
        <span className="sr-only">Open sidebar</span>
        <Bars3Icon aria-hidden="true" className="size-6" />
      </button>

      <div
        aria-hidden="true"
        className="h-6 w-px bg-gray-200 lg:hidden dark:bg-white/10"
      />

      <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6 justify-end">
        <div className="flex items-center justify-end gap-x-4 lg:gap-x-6">
          <button
            type="button"
            className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500 dark:hover:text-white"
          >
            <span className="sr-only">View notifications</span>
            <BellIcon aria-hidden="true" className="size-6" />
          </button>

          <div
            aria-hidden="true"
            className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200 dark:lg:bg-white/10"
          />

          {/* Profile dropdown */}
          <Menu as="div" className="relative">
            <MenuButton className="relative flex items-center">
              <span className="absolute -inset-1.5" />
              <span className="sr-only">Open user menu</span>
              <img
                alt={user?.fullName || 'User'}
                src={user?.imageUrl}
                className="size-8 rounded-full bg-gray-50 dark:bg-gray-800"
              />
              <span className="hidden lg:flex lg:items-center">
                <span
                  aria-hidden="true"
                  className="ml-4 text-sm/6 font-semibold text-gray-900 dark:text-white"
                >
                  {user?.fullName || user?.username || 'User'}
                </span>
                <ChevronDownIcon
                  aria-hidden="true"
                  className="ml-2 size-5 text-gray-400 dark:text-gray-500"
                />
              </span>
            </MenuButton>
            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in dark:bg-gray-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10"
            >
              <MenuItem>
                <a
                  href="#"
                  className="block px-3 py-1 text-sm/6 text-gray-900 data-[focus]:bg-gray-50 dark:text-white dark:data-[focus]:bg-white/5"
                >
                  Your profile
                </a>
              </MenuItem>
              <MenuItem>
                <button
                  type="button"
                  onClick={handleSignOut}
                  className="block w-full text-left px-3 py-1 text-sm/6 text-gray-900 data-[focus]:bg-gray-50 dark:text-white dark:data-[focus]:bg-white/5"
                >
                  Sign out
                </button>
              </MenuItem>
            </MenuItems>
          </Menu>
        </div>
      </div>
    </div>
  );
}
