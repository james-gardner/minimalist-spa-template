import { SignInButton, SignUpButton, UserButton, useUser } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';

export default function Header() {
  const { isSignedIn } = useUser();

  return (
    <header className="navbar bg-base-100 shadow-lg">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          Minimalist SPA
        </Link>
      </div>
      <div className="flex-none gap-2">
        <nav className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          {isSignedIn && (
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          )}
        </nav>
        <div className="flex gap-2 items-center">
          {!isSignedIn ? (
            <>
              <SignInButton mode="modal">
                <button className="btn btn-ghost btn-sm">Sign In</button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="btn btn-primary btn-sm">Sign Up</button>
              </SignUpButton>
            </>
          ) : (
            <UserButton afterSignOutUrl="/" />
          )}
        </div>
      </div>
    </header>
  );
}
