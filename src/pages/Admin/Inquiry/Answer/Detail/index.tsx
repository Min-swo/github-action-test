import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { InquiryDetail } from '@/types/inquiryDetail'; // 경로에 따라 수정
import { mockInquiryData } from '@/mock/adminInquiry';
import arrow_left from '../../../../../assets/icons/arrow_left.svg';
import CustomerInfo from '@/components/Admin/Inquiry/DetailCustomerInfo';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';

export function AnswerDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
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
  return (
    <div className='mx-auto h-[90%] max-w-[1300px]'>
      <button
        className='mb-[1rem] flex items-center text-gray-600 hover:text-gray-800'
        onClick={() => navigate(-1)}
      >
        <span className='mr-[0.1rem] flex justify-center text-[0.825rem]'>
          <img src={arrow_left} alt='점' className='h-[1.2rem] w-full' />
        </span>
        <span className='text-[1.2rem] font-bold text-[#464646]'>뒤로가기</span>
      </button>
      <CustomerInfo
        className='mb-[2rem] w-full rounded-[1.875rem] bg-[#f9f9f9] p-[1.5rem] shadow-[0_4px_10px_0_rgba(0,0,0,0.1)]'
        name={inquiryData.name}
        phoneNumber={inquiryData.phone_number}
        start_time={format(
          new Date(inquiryData.start_time),
          'MM월 dd일 HH시 mm분'
        )}
        end_time={format(new Date(inquiryData.end_time), 'MM월 dd일 HH시 mm분')}
      />
      <div className='mx-auto h-[80%] rounded-[1.875rem] bg-white p-[1.5rem] shadow-[0_4px_20px_0_rgba(0,0,0,0.1)]'>
        <div className='overflow-wrap break-word mb-3 text-left text-[1.5rem] font-extrabold text-[#464646]'>
          문의 내용
          <Badge
            variant='lightSolid'
            className='ml-4 rounded-full bg-teal-50 px-3 py-1 align-middle text-[1rem] font-light text-teal-600'
          >
            {inquiryData.category}
          </Badge>
        </div>

        <hr />
        <div className='mt-3 flex items-center'>
          <p className='font-semibold text-gray-800'>
            {Array.isArray(inquiryData.tags) &&
              inquiryData.tags.map((tag, idx) => (
                <Badge
                  key={idx}
                  variant='lightSolid'
                  className={`mr-2 h-[1.8rem] w-auto justify-center rounded-full bg-gray-500 px-3 py-0.5 text-sm font-medium text-white`}
                >
                  {'#' + tag}
                </Badge>
              ))}
          </p>
        </div>

        <div className='overflow-wrap break-word mb-[1rem] mt-[1rem] flex flex-wrap whitespace-pre-wrap text-left text-[1.2rem] font-medium text-[#666666]'>
          {inquiryData.content}
        </div>
        <div className='mb-[0.5rem] mt-[3.6rem] text-left text-[1.5rem] font-bold text-[#464646]'>
          답변 내용
          <span className='ml-3 text-[1rem] font-normal text-gray-400'>
            {inquiryData.recommended_entry_time
              ? format(new Date(inquiryData.end_time), 'MM월 dd일 HH시 mm분')
              : ''}
          </span>
        </div>
        <hr />
        <div className='overflow-wrap break-word whitespace-pre-wraptext-left mb-[1rem] mt-[1rem] flex flex-wrap text-left text-[1.2rem] font-medium text-[#666666]'>
          {inquiryData.reply_content}
        </div>
      </div>
    </div>
  );
  // return (
  //   <div className='mx-auto h-full w-[83%]'>
  //     <h1 className='text-xl font-bold'>{inquiryData.Title}</h1>
  //     <div className='text-gray-600'>
  //       {inquiryData.name} - {new Date(inquiryData.time).toLocaleString()}
  //     </div>
  //     <div className='mt-2'>{inquiryData.category}</div>
  //     <div className='mt-4'>{inquiryData.content}</div>
  //   </div>
  // );
}
