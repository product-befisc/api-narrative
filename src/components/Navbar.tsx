import { Link } from 'react-router-dom';
import logo from '@/assets/BeFiSc_New_Logo.svg';

const Navbar = () => {
  return (
    <nav className="border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="BeFiSc" className="h-10" />
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
