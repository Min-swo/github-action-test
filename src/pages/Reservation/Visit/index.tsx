import { ReservationPage } from '..';
import { useNavigate } from 'react-router-dom';
import { VISIT_MOCK } from '@/mock/visit_mock';

export function ReservationVisitPage() {
  const visitNum = VISIT_MOCK;
  const navigate = useNavigate();
  if (!visitNum) {
    return <ReservationPage />;
  }
  const moveToDetail = (id: string) => {
    navigate(`/reservation/visit/${id}`);
  };
  return (
    <div className='h-full w-full overflow-auto pb-[5.5rem]'>
      <hr />
      <div className=''>
        {visitNum.map(({ id, my_num, name, waiting_number, waiting_time }) => (
          <div key={id}>
            <button
              onClick={() => moveToDetail(my_num)}
              className='mt-[1.4375rem] w-full px-2'
            >
              <div className='mx-2 flex justify-between'>
                <div className='text-2xl font-bold text-[#464646]'>{name}</div>
                <div className='text-3xl font-[1000] text-[#008485]/80'>
                  {my_num}
                </div>
              </div>
              <div className='mx-2 mt-4 flex justify-between'>
                <div className='text-lg font-medium text-[#666666]'>
                  현재 대기 인원
                </div>
                <div className='text-xl font-bold text-[#464646]'>
                  {waiting_number}명
                </div>
              </div>
              <div className='mx-2 mt-4 flex justify-between'>
                <div className='text-lg font-medium text-[#666666]'>
                  예상 대기 시간
                </div>
                <div className='text-xl font-bold text-[#464646]'>
                  {waiting_time}분
                </div>
              </div>
            </button>
            <hr className='mt-[1.4375rem]' />
          </div>
        ))}
      </div>
    </div>
  );
}
