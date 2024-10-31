// VisitPage.tsx
import InfoCard from '@/components/Admin/Infocard';
import Next from '../../../components/Admin/Next';
import WaitingNumber from '@/components/Admin/WaitingNum';
import React, { useState } from 'react';

function VisitPage() {
  const [numbers, setNumbers] = useState([
    952, 953, 954, 955, 956, 957, 958, 951,
  ]);
  const [angle, setAngle] = useState(0);
  const [displayNum, setDisplayNum] = useState([7, 0, 1]);

  const rotateAngle = 360 / 8;

  const handleNext = () => {
    setNumbers((prevNumbers) => {
      if (prevNumbers.length === 0) return prevNumbers;
      const lastNumber = prevNumbers[prevNumbers.length - 1];
      return [lastNumber, ...prevNumbers.slice(0, prevNumbers.length - 1)];
    });
    setNumbers((prevNumbers) => {
      return prevNumbers.map((num) => num + 1);
    });
    setAngle((prev) => prev + rotateAngle);

    setDisplayNum((prevNumbers) =>
      prevNumbers.map((num) => (num + 1 > 7 ? 0 : num + 1))
    );
  };

  return (
    <div className='relative mx-auto w-full max-w-screen-lg'>
      <InfoCard waitingCount={2} estimatedTime={15} todayVisitors={72} />
      <div className='my-[2.5rem]'>
        <WaitingNumber
          numbers={numbers}
          angle={angle}
          displayNum={displayNum}
        />
      </div>
      <div className='absolute bottom-[-6.25rem] left-[15%] right-[15%]'>
        <Next onClick={handleNext} />
      </div>
    </div>
  );
}

export default VisitPage;
