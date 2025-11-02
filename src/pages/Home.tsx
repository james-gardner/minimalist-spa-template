export default function Home() {
  return (
    <div className="hero min-h-[calc(100vh-200px)]">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Welcome!</h1>
          <p className="py-6">
            This is a minimalist single-page application built with Vite, React,
            Clerk, DaisyUI, and Tailwind CSS.
          </p>
          <div className="flex gap-4 justify-center">
            <div className="stat bg-base-100 rounded-lg shadow">
              <div className="stat-title">Built with</div>
              <div className="stat-value text-primary text-2xl">Vite</div>
            </div>
            <div className="stat bg-base-100 rounded-lg shadow">
              <div className="stat-title">UI Library</div>
              <div className="stat-value text-secondary text-2xl">React</div>
            </div>
          </div>
          <div className="flex gap-4 justify-center mt-4">
            <div className="stat bg-base-100 rounded-lg shadow">
              <div className="stat-title">Auth Provider</div>
              <div className="stat-value text-accent text-2xl">Clerk</div>
            </div>
            <div className="stat bg-base-100 rounded-lg shadow">
              <div className="stat-title">Styling</div>
              <div className="stat-value text-success text-2xl">DaisyUI</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
