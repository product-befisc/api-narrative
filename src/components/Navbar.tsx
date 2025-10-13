import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary">
              <span className="text-lg font-bold text-white">API</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground">API Demo Portal</h1>
              <p className="text-xs text-muted-foreground">Digital Data Intelligence</p>
            </div>
          </Link>

          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-2 text-xs">
              <div className="flex items-center gap-1">
                <div className="h-2 w-2 rounded-full bg-success animate-pulse" />
                <span className="text-muted-foreground">APIs Online</span>
              </div>
              <div className="text-muted-foreground">|</div>
              <span className="text-muted-foreground">Latency: <span className="font-semibold text-foreground">23ms</span></span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
