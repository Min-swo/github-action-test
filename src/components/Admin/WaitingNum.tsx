import { useEffect, useState } from 'react';
// import './YourStyles.css';

type WaitingNumberProps = {
  numbers: number[];
  angle: number;
  displayNum: number[];
};

function WaitingNumber({ numbers, angle, displayNum }: WaitingNumberProps) {
  const [isRow] = useState(false);
  const rotateAngle = 360 / 8;
  const radian = (rotateAngle / 2) * (Math.PI / 180);
  const colTz = Math.round(210 / 2 / Math.tan(radian));
  const rowTz = Math.round(140 / 2 / Math.tan(radian));

  useEffect(() => {
    const carouselCards = document.querySelectorAll('.carousel-card');
    carouselCards.forEach((el, idx) => {
      (el as HTMLElement).style.transform = isRow
        ? `rotateX(${rotateAngle * idx}deg) translateZ(${rowTz}px)`
        : `rotateY(${rotateAngle * idx}deg) translateZ(${colTz}px)`;
    });
  }, [rotateAngle]);

  useEffect(() => {
    console.log(...numbers);
  }, [numbers]);

  return (
    <div className='mt-10 flex w-full flex-col items-center rounded-lg bg-white pb-[4.25rem]'>
      <div className='mb-[-5rem] flex w-full max-w-xl justify-between px-2 md:px-8'>
        <span className='text-sm text-gray-400 md:text-lg'>이전 대기번호</span>
        <span className='pt-2 text-sm text-gray-400 md:text-lg'>
          현재 대기번호
        </span>
        <span className='text-sm text-gray-400 md:text-lg'>다음 대기번호</span>
      </div>
      <div className='relative w-full max-w-xl pl-[0.8rem]'>
        <div
          className='scene relative mx-auto h-[140px] w-[210px]'
          style={{
            perspective: '1200px',
          }}
        >
          <div
            className='carousel transform-style-preserve-3d absolute h-full w-full transition-transform duration-500'
            style={{
              transform: `rotateY(${-angle}deg)`,
            }}
          >
            {numbers.map((number, idx) => (
              <div
                key={idx}
                className='carousel-card absolute flex h-[120px] w-[190px] flex-col items-center justify-center bg-white opacity-90 transition-all duration-500'
              >
                {/* <span className='text-sm text-gray-400 md:text-lg'></span> */}
                <span
                  className={`text-4xl font-bold text-gray-600 md:text-6xl ${displayNum.includes(idx) ? '' : 'hidden'}`}
                >
                  {number}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WaitingNumber;
