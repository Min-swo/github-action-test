import { CustomerInfo } from '@/components/Admin/Customer';
import InfoCard from '@/components/Admin/Infocard';
import Next from '@/components/Admin/Next';
import WaitingNumber from '@/components/Admin/WaitingNum';
import { useState } from 'react';

function CallPage() {
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
    <>
      <WaitingNumber numbers={numbers} angle={angle} displayNum={displayNum} />
      <div className='flex items-start justify-center'>
        <CustomerInfo
          customerCount={952}
          name='김삼순'
          phoneNumber='010-7330-9731'
          birthDate='1977년 8월 24일'
          inquiryCount={3}
        />
        <div className='ml-[2rem]'>
          <InfoCard waitingCount={2} estimatedTime={15} />
          <div className='mt-[2rem]'>
            <Next onClick={handleNext} />
          </div>
        </div>
      </div>
    </>
  );
}

export default CallPage;
