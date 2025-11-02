import { useUser } from '@clerk/clerk-react';
import {
  CalendarIcon,
  ChartPieIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';
import DashboardLayout from '../components/DashboardLayout';

export default function Dashboard() {
  const { user } = useUser();

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Dashboard
          </h1>
          <p className="mt-2 text-sm text-gray-700 dark:text-gray-400">
            Welcome back, {user?.firstName || user?.username || 'User'}!
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="overflow-hidden rounded-lg bg-white shadow dark:bg-gray-800">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <UsersIcon
                    className="h-6 w-6 text-gray-400 dark:text-gray-500"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="truncate text-sm font-medium text-gray-500 dark:text-gray-400">
                      Email
                    </dt>
                    <dd className="text-lg font-medium text-gray-900 dark:text-white">
                      {user?.primaryEmailAddress?.emailAddress}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg bg-white shadow dark:bg-gray-800">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <CalendarIcon
                    className="h-6 w-6 text-gray-400 dark:text-gray-500"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="truncate text-sm font-medium text-gray-500 dark:text-gray-400">
                      Account Created
                    </dt>
                    <dd className="text-lg font-medium text-gray-900 dark:text-white">
                      {user?.createdAt
                        ? new Date(user.createdAt).toLocaleDateString()
                        : 'N/A'}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg bg-white shadow dark:bg-gray-800">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <ChartPieIcon
                    className="h-6 w-6 text-gray-400 dark:text-gray-500"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="truncate text-sm font-medium text-gray-500 dark:text-gray-400">
                      User ID
                    </dt>
                    <dd className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      {user?.id}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg bg-white shadow dark:bg-gray-800">
          <div className="p-6">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">
              Recent Activity
            </h2>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              No recent activity to display.
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
