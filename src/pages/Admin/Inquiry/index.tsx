import InquiryList from '@/components/Admin/Inquiry/InquiryList';
import ReplyState from '@/components/Admin/Inquiry/ReplyState';
import { mockInquiryData } from '@/mock/adminInquiry';
import { useState } from 'react';

function InquiryPage() {
  const [activeTab, setActiveTab] = useState<'답변대기' | '답변완료'>(
    '답변대기'
  );
  const [activeCategory, setActiveCategory] = useState<string>('전체');

  return (
    <>
      <div className='mb-10 mt-6 flex flex-col items-center'>
        <ReplyState activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      <InquiryList
        activeTab={activeTab}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        inquiries={mockInquiryData} // mockInquiryData 전달
      />
    </>
  );
}

export default InquiryPage;
