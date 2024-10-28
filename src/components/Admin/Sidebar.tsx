import { Link, useLocation } from 'react-router-dom';

function Sidebar() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  return (
    <div className='font-inter flex h-screen w-52 flex-col bg-gray-800 font-bold leading-normal text-white'>
      <ul className='m-auto flex w-full list-none flex-col items-center space-y-2 p-0'>
        <li className={`w-full ${isActive('/admin') ? 'bg-gray-700' : ''}`}>
          <Link
            to='/admin'
            className={`block p-3 text-center no-underline ${
              isActive('/admin') ? 'text-white' : 'text-gray-400'
            }`}
          >
            방문상담 관리
          </Link>
        </li>
        <li
          className={`w-full ${isActive('/admin/inquiry') ? 'bg-gray-700' : ''}`}
        >
          <Link
            to='/admin/inquiry'
            className={`block p-3 text-center no-underline ${
              isActive('/admin/inquiry') ? 'text-white' : 'text-gray-400'
            }`}
          >
            1:1 문의 관리
          </Link>
        </li>
        <li
          className={`w-full ${isActive('/admin/call') ? 'bg-gray-700' : ''}`}
        >
          <Link
            to='/admin/call'
            className={`block p-3 text-center no-underline ${
              isActive('/admin/call') ? 'text-white' : 'text-gray-400'
            }`}
          >
            전화 문의 관리
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
