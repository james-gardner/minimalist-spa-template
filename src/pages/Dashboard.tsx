import { useUser } from '@clerk/clerk-react';

export default function Dashboard() {
  const { user } = useUser();

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <p className="text-lg mt-2">
          Welcome back, {user?.firstName || user?.username || 'User'}!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Profile</h2>
            <div className="space-y-2">
              <p>
                <strong>Email:</strong>{' '}
                {user?.primaryEmailAddress?.emailAddress}
              </p>
              <p>
                <strong>User ID:</strong> {user?.id}
              </p>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Stats</h2>
            <div className="stat">
              <div className="stat-title">Account Created</div>
              <div className="stat-value text-primary text-xl">
                {user?.createdAt
                  ? new Date(user.createdAt).toLocaleDateString()
                  : 'N/A'}
              </div>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Quick Actions</h2>
            <div className="space-y-2">
              <button
                type="button"
                className="btn btn-primary btn-sm btn-block"
              >
                Action 1
              </button>
              <button
                type="button"
                className="btn btn-secondary btn-sm btn-block"
              >
                Action 2
              </button>
              <button type="button" className="btn btn-accent btn-sm btn-block">
                Action 3
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Recent Activity</h2>
          <p>No recent activity to display.</p>
        </div>
      </div>
    </div>
  );
}
