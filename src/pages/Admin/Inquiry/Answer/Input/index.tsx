import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
// import { useToast } from '@/hooks/use-toast';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { InquiryDetail } from '@/types/inquiryDetail';
import { mockInquiryData } from '@/mock/adminInquiry';
import dot from '../../../../../assets/icons/dot.svg';

export function AnswerInput() {
  // const { toast } = useToast();
  const [answer, setAnswer] = useState('');
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [inquiryData, setInquiryData] = useState<InquiryDetail | null>(null);
  useEffect(() => {
    const fetchInquiryDetail = () => {
      const inquiry = mockInquiryData.find((item) => item.id === Number(id)); // ID로 데이터 찾기
      setInquiryData(inquiry || null);
    };

    fetchInquiryDetail();
  }, [id]);

  if (!inquiryData) {
    return <div>Loading...</div>;
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!answer.trim()) {
      alert('답변을 입력하세요');
      // toast({
      //   title: '답변을 입력하세요.',
      // });
      return;
    }

    console.log('답변:', answer);
    setAnswer('');
  };

  const handleCancel = () => {
    return navigate('/admin/inquiry');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='mx-auto h-[90%] w-[83%] rounded-[1.875rem] bg-white p-[1.5rem] shadow-[0_4px_20px_0_rgba(0,0,0,0.1)]'
    >
      <div className='overflow-wrap break-word text-left text-[1.5rem] font-bold text-[#464646]'>
        {inquiryData.title}
      </div>
      <div className='mt-[1rem] flex items-center'>
        <span className='text-[0.9rem] font-medium text-[#b3b3b3]'>
          {inquiryData.name}
        </span>
        <span className='mx-1 text-[0.65rem] text-[#b3b3b3]'>
          <img src={dot} alt='점' className='h-full w-full' />
        </span>
        <span className='text-[0.9rem] font-medium text-[#b3b3b3]'>
          {inquiryData.time}분 전
        </span>
        <span className='mx-1 text-[0.65rem] text-[#b3b3b3]'>
          <img src={dot} alt='점' className='h-full w-full' />
        </span>
        <span className='text-[0.9rem] font-medium text-[#b3b3b3]'>
          {inquiryData.category}
        </span>
      </div>
      <div className='overflow-wrap break-word mb-[1rem] mt-[1rem] flex flex-wrap whitespace-pre-wrap text-left text-[1rem] font-medium text-[#666666]'>
        {inquiryData.content}
      </div>
      <hr />
      <div className='mb-[0.5rem] mt-[0.75rem] text-left text-[0.9rem] font-bold text-[#464646]'>
        답변 입력
      </div>
      <Textarea
        className='h-[55%] w-full resize-none rounded-[1.875rem] border border-[#d9d9d9] p-[1rem]'
        placeholder='답변을 입력하세요...'
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        aria-label='답변 입력'
      />
      <div className='mt-[1rem] flex justify-end'>
        <Button
          className='inline-flex h-[2.5rem] w-[6.5rem] items-center justify-center gap-[0.625rem] rounded-[1.25rem] bg-white px-[3.8125rem] py-[0.625rem] shadow-[0_4px_10px_0_rgba(0,0,0,0.1)] hover:bg-[#F8F8F8]'
          onClick={handleCancel}
          type='button'
        >
          <div className="font-['Inter'] text-[1rem] font-bold text-[#464646]">
            취소
          </div>
        </Button>
        <Button
          type='submit'
          className='ml-[1rem] inline-flex h-[2.5rem] w-[6.5rem] items-center justify-center gap-[0.625rem] rounded-[1.25rem] bg-[#464646] px-[3.8125rem] py-[0.625rem] shadow-[0_4px_10px_0_rgba(0,0,0,0.1)] hover:bg-[#343434]'
        >
          <div className="font-['Inter'] text-[1rem] font-bold text-white">
            등록
          </div>
        </Button>
      </div>
    </form>
  );
}
