import { Button } from '../ui/button';
import next from '../../assets/icons/next.svg';

type NextProps = {
  onClick: () => void;
};

export default function Next({ onClick }: NextProps) {
  return (
    <Button
      onClick={onClick}
      className='inline-flex h-[4.5rem] w-[12rem] items-center justify-center gap-2 rounded-[30rem] bg-main/80 px-[1.5rem] py-[1.5rem]'
    >
      <div className='text-[1.75rem] font-extrabold text-white'>다음으로</div>
      <div className='relative flex h-[1.5rem] w-[1.5rem] items-center justify-center'>
        <img src={next} alt='다음 아이콘' className='h-full w-full' />
      </div>
    </Button>
  );
}
