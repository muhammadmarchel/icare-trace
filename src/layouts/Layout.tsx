import { useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Map as MapIcon, 
  PackageSearch, 
  ShieldAlert, 
  BarChart3, 
  Settings,
  Bell,
  Search,
  Menu,
  X,
  LogOut,
  QrCode
} from 'lucide-react';
import clsx from 'clsx';

const navItems = [
  { group: 'MAIN' },
  { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
  { name: 'Farms & Farmers', path: '/farms', icon: Users },
  { name: 'Map', path: '/map', icon: MapIcon },
  { name: 'Batches', path: '/batches', icon: PackageSearch },
  { name: 'QR Trace', path: '/qr-trace', icon: QrCode },
  { group: 'QUALITY' },
  { name: 'Rejections', path: '/rejections', icon: ShieldAlert },
  { group: 'ANALYTICS' },
  { name: 'Rejection Analysis', path: '/analytics', icon: BarChart3 },
  { group: 'SYSTEM' },
  { name: 'Settings', path: '/settings', icon: Settings },
];

export default function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="flex h-screen bg-slate-50 font-sans">
      {/* Sidebar for Desktop */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r border-slate-200">
        <div className="h-16 flex items-center px-6 border-b border-slate-200">
          <span className="text-xl font-bold text-primary-dark tracking-tight">ICARE TRACE</span>
        </div>
        <div className="flex-1 overflow-y-auto py-4">
          <nav className="space-y-1 px-3">
            {navItems.map((item, index) => {
              if (item.group) {
                return (
                  <div key={index} className="pt-4 pb-1 px-3">
                    <span className="text-xs font-semibold text-slate-400 tracking-wider">
                      {item.group}
                    </span>
                  </div>
                );
              }
              const Icon = item.icon!;
              return (
                <NavLink
                  key={item.path}
                  to={item.path!}
                  className={({ isActive }) =>
                    clsx(
                      'group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors',
                      isActive
                        ? 'bg-primary/10 text-primary-dark'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    )
                  }
                >
                  <Icon className="mr-3 h-5 w-5 flex-shrink-0" />
                  {item.name}
                </NavLink>
              );
            })}
          </nav>
        </div>
        <div className="p-4 border-t border-slate-200 text-sm text-slate-500 flex justify-between items-center">
          <span>ICARE • Indramayu</span>
          <button onClick={handleLogout} className="text-slate-400 hover:text-red-500">
             <LogOut size={16} />
          </button>
        </div>
      </aside>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 flex">
          <div className="fixed inset-0 bg-slate-600 bg-opacity-75" onClick={() => setMobileMenuOpen(false)}></div>
          <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
            <div className="absolute top-0 right-0 -mr-12 pt-2">
              <button
                className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="h-6 w-6 text-white" />
              </button>
            </div>
            <div className="h-16 flex items-center px-6 border-b border-slate-200">
              <span className="text-xl font-bold text-primary-dark">ICARE TRACE</span>
            </div>
            <div className="flex-1 h-0 overflow-y-auto pt-5 pb-4">
              <nav className="px-2 space-y-1">
                 {navItems.map((item, index) => {
                  if (item.group) {
                    return (
                      <div key={index} className="pt-4 pb-1 px-3">
                        <span className="text-xs font-semibold text-slate-400 tracking-wider">
                          {item.group}
                        </span>
                      </div>
                    );
                  }
                  const Icon = item.icon!;
                  return (
                    <NavLink
                      key={item.path}
                      to={item.path!}
                      onClick={() => setMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        clsx(
                          'group flex items-center px-3 py-2 text-base font-medium rounded-md',
                          isActive
                            ? 'bg-primary/10 text-primary-dark'
                            : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                        )
                      }
                    >
                      <Icon className="mr-4 h-6 w-6" />
                      {item.name}
                    </NavLink>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm border-b border-slate-200 z-10">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <button
                  className="md:hidden p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <Menu className="h-6 w-6" />
                </button>
                <div className="hidden md:flex flex-1 items-center bg-slate-100 rounded-md px-3 py-1.5 ml-4">
                  <Search className="h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search farms, batches..."
                    className="ml-2 bg-transparent border-none focus:ring-0 text-sm w-64 placeholder-slate-400 outline-none"
                  />
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button className="text-slate-400 hover:text-slate-500 relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
                </button>
                <div className="flex items-center space-x-2">
                  <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">
                    A
                  </div>
                  <span className="text-sm font-medium text-slate-700 hidden sm:block">Admin</span>
                </div>
              </div>
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-auto bg-slate-50/50">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
