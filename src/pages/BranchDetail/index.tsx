import { useNavigate, useParams } from 'react-router-dom';

import { ReactComponent as ArrowLeft } from '@/assets/icons/arrow_left.svg';
import { ReactComponent as Addrss } from '@/assets/icons/branch/address.svg';
import { ReactComponent as Hours } from '@/assets/icons/branch/business_hours.svg';
import { ReactComponent as Tel } from '@/assets/icons/branch/tel.svg';
import { ReactComponent as WaitPeople } from '@/assets/icons/branch/waitpeople.svg';
import { ReactComponent as Time } from '@/assets/icons/branch/walktime.svg';
import { ReactComponent as BankImg } from '@/assets/icons/branch/branch_img.svg';

// import branch from '@/assets/images/branch.png';

import Nav from '@/components/Nav/Nav';
import { Button } from '@/components/ui/button';
import { DirectionButton } from '@/components/ui/direction';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/hooks/use-toast';
import { BRANCH_STATE_MOCK } from '@/mock/branch_mock';
import { showToast } from '../Register/Call';
import { useEffect, useState } from 'react';
// import axios from 'axios';
import apiCall from '@/api/Api';

type BranchProps = {
  branchNum: string | null;
  branchName: string | null;
  branchType: string | null;
  xPosition: string | null;
  yPosition: string | null;
  address: string | null;
  tel: string | null;
  businessTime: string | null;
};

const defaultBranchDetail = {
  branchNum: '',
  branchName: '',
  branchType: '',
  xPosition: '',
  yPosition: '',
  address: '',
  tel: '',
  businessTime: '',
};

export function BranchDetailPage() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { id } = useParams();
  const [branch, setBranch] = useState<BranchProps>(defaultBranchDetail);

  useEffect(() => {
    const getBranchDetail = async () => {
      console.log(id);
      try {
        const response = await apiCall(`/branch/${id}`, 'get');
        // const response = await axios({
        //   method: 'get',
        //   url: 'http://localhost:8080/api/v1/branch/one',
        //   params: {
        //     branchId: id,
        //   },
        // });
        console.log(response);
        setBranch(response.data);
      } catch (error) {
        console.log('Api call error:', error);
      }
    };
    getBranchDetail();
  }, []);
  const { branchName, address, tel, businessTime }: BranchProps = branch;
  const state = BRANCH_STATE_MOCK.find((br) => br.id === id);
  const moveToReservation = () => {
    navigate(`/reservation/visit/${id}`);
  };

  const handleDirection = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    if (branch) {
      const { xPosition: longitude, yPosition: latitude } = branch;
      // TODO: startLat, startLon 현 위치로 수정
      navigate(
        `/direction?startLat=37.54463002278825&startLon=127.05656718408437&endLat=${latitude}&endLon=${longitude}&branchId=${id}`
      );
      showToast(toast, '길 안내를 시작합니다.');
    }
  };
  return (
    <div className='mx-auto overflow-hidden rounded-lg bg-white'>
      <header className='flex h-14 items-center justify-between border'>
        <ArrowLeft width={21} height={21} className='ml-4' />
        <div className='text-xl'>{branchName}</div>
        <div></div>
      </header>
      <main>
        <BankImg />
        {/* <img src={branch} alt='bank image' className='w-full' /> */}
        <div className='border-b p-8'>
          <div className='flex items-center justify-between'>
            <h2 className='text-xl font-bold'>기본정보</h2>
            <DirectionButton onClick={handleDirection} />
          </div>
          <ul className='list-none'>
            <li className='mt-4 flex items-center justify-start gap-2'>
              <Addrss width={20} height={23} className='relative' />
              <span className="font-['Inter'] text-base font-semibold text-[#464646]">
                {address}
              </span>
            </li>
            <li className='mt-4 flex items-center justify-start gap-2'>
              <Hours width={20} height={20} />
              <span className="font-['Inter'] text-base font-semibold text-[#464646]">
                {businessTime}
              </span>
            </li>
            <li className='mt-4 flex items-center justify-start gap-2'>
              <Tel width={16} height={20} />
              <span className="font-['Inter'] text-base font-semibold text-[#464646]">
                {tel}
              </span>
            </li>
          </ul>
        </div>
        <div className='h-2 w-full bg-[#eeeeee]'></div>
        <div className='p-8'>
          <h3 className='text-left text-xl font-bold'>대기 정보</h3>
          <div className='mt-8 grid grid-cols-2 gap-2 text-sm'>
            <div className='flex items-center gap-2'>
              <Time width={24} height={24} />
              <span className="font-['Inter'] text-base font-medium text-[#666666]">
                이동 소요 시간
              </span>
            </div>
            <span className="text-right font-['Inter'] text-lg font-bold text-[#464646]">
              15분
            </span>
            <div className='flex items-center gap-2'>
              <WaitPeople width={24} height={24} />
              <span className="font-['Inter'] text-base font-medium text-[#666666]">
                현재 대기 인원
              </span>
            </div>
            <span className="text-right font-['Inter'] text-lg font-bold text-[#464646]">
              {state?.waiting_number}명
            </span>
            <div className='flex items-center gap-2'>
              <Time width={24} height={24} />
              <span className="font-['Inter'] text-base font-medium text-[#666666]">
                예상 대기 시간
              </span>
            </div>
            <span className="text-right font-['Inter'] text-lg font-bold text-[#464646]">
              {state?.waiting_time}분
            </span>
          </div>
        </div>
        <div className='mt-16 flex items-center justify-center p-4'>
          <Button onClick={moveToReservation}>예약하기</Button>
        </div>
      </main>
      <footer>
        <Nav />
      </footer>
      <Toaster />
    </div>
  );
}
