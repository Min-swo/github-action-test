import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';
import hanaLogo from '../../assets/icons/hanaLogo.svg';

function Header() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname.startsWith(path);

  return (
    <div className='fixed z-50 h-[13%] w-full bg-[#464646] py-[1rem] pl-[1.5rem] text-left shadow-[0_4px_50px_10px_rgba(0,0,0,0.07)]'>
      <nav className='p-1rem flex h-full items-center justify-between text-lg'>
        <div className='ml-[4.5rem] flex items-center space-x-2'>
          <img src={hanaLogo} alt='하나은행 로고' className='h-full w-full' />
        </div>

        <ul className='flex space-x-[3.125rem] text-[1.25rem]'>
          <li
            className={cn('text-[#969696] hover:text-white', {
              'text-[#FFFFFF]': isActive('/admin/call'),
            })}
          >
            <Link to='/admin/call'>전화 문의 목록</Link>
          </li>
          <li
            className={cn('text-[#969696] hover:text-white', {
              'text-[#FFFFFF]': isActive('/admin/inquiry'),
            })}
          >
            <Link to='/admin/inquiry'>1:1 문의 목록</Link>
          </li>
          <li
            className={cn('text-[#969696] hover:text-white', {
              'text-[#FFFFFF]': isActive('/customer-management'),
            })}
          >
            <Link to='/customer-management'>고객 관리</Link>
          </li>
          <li
            className={cn('text-[#969696] hover:text-white', {
              'text-[#FFFFFF]': isActive('admin/mypage'),
            })}
          >
            <Link to='/admin/adminmypage'>마이페이지</Link>
          </li>
        </ul>

        {/* Right Section: User Info */}
        <div className='mr-[4.6875rem] text-right'>
          <span className='font-semibold'>강능요 사원 [11]</span>
        </div>
      </nav>
    </div>
  );
}

export default Header;
