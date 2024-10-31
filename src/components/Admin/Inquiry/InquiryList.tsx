import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '../../ui/accordion';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';
import FilterAndSearch from './FilterAndSearch';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { InquiryDetail } from '@/types/inquiryDetail';
import { ActiveTab } from '@/types/inquiry';
import rightArrow from '../../../assets/icons/right_arrow.svg';

type InquiryListProps = {
  activeTab: ActiveTab;
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  inquiries: InquiryDetail[];
}

function InquiryList({
  activeTab,
  activeCategory,
  setActiveCategory,
  inquiries, 
}: InquiryListProps) {
  const formattedInquiries = inquiries.map(({ id, title, status, category, time, content, name }) => ({
    id: String(id),
    title: title,
    status: status as ActiveTab,
    category: category,
    time: `${time}분 전`,
    content: content,
    name: name,
  }));

  const filteredInquiries = formattedInquiries.filter(
    ({ status, category }) =>
      status === activeTab &&
      (activeCategory === '전체' || category === activeCategory)
  );

  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const navigate = useNavigate();

  return (
    <div className='font-inter mx-auto max-w-3xl rounded-lg border-gray-200 bg-white p-6 text-[1.25rem] font-bold leading-normal shadow-lg'>
      <div className='font-inter mb-0 flex items-center justify-between border-b pb-4 font-normal leading-normal'>
        <h2 className='text-[1.125rem] font-bold text-gray-800'>
          총{' '}
          <span className='text-[1.4rem] font-extrabold text-teal-600'>
            {filteredInquiries.length}
          </span>
          건
        </h2>
        <FilterAndSearch setActiveCategory={setActiveCategory} />
      </div>

      <Accordion type='single' collapsible>
        {filteredInquiries.map(
          ({ id, title, status, category, time, content, name }, index) => (
            <AccordionItem key={id} value={id}>
              <div className='font-inter flex items-center justify-between py-4 font-normal leading-normal'>
                <div className='flex items-center space-x-2'>
                  <span className='ml-5 mr-5 font-medium text-gray-700'>
                    {index + 1}
                  </span>
                  <span className='font-semibold text-gray-800'>
                    {title.length <= 15
                      ? title
                      : `${title.substring(0, 15)}...`}
                  </span>
                  <Badge
                    variant='lightSolid'
                    className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                      status === '답변대기'
                        ? 'bg-teal-50 text-teal-600'
                        : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {category}
                  </Badge>
                </div>
                {status === '답변완료' ? (
                  <span
                    className='mr-6 flex cursor-pointer items-center pb-[1.05rem] pt-[1rem] text-sm font-normal text-black'
                    onClick={() => navigate(`/admin/inquiry/${id}`)}
                  >
                    상세보기
                    <img
                      src={rightArrow}
                      alt='Go'
                      className='ml-0 inline-block'
                    />
                  </span>
                ) : (
                  <AccordionTrigger
                    className='mr-5 flex items-center text-[0.875rem] font-normal text-black'
                    onClick={() =>
                      setExpandedItem(expandedItem === id ? null : id)
                    }
                  >
                    {expandedItem === id ? '접기' : '펼쳐보기'}
                  </AccordionTrigger>
                )}
              </div>
              <AccordionContent className='-mb-4 mt-0 bg-gray-50'>
                <div className='mt-2 rounded-md border-t p-4'>
                  <div className='mb-1 flex items-center justify-between'>
                    <p className='font-semibold text-gray-800'>{title}</p>
                    {status === '답변대기' && (
                      <Button
                        variant='default'
                        className='h-[2.4375rem] w-[7.5rem] rounded-full bg-main px-4 py-1 text-sm text-white'
                        onClick={() =>
                          navigate('/admin/inquiry/register/' + id)
                        }
                      >
                        답변하기
                      </Button>
                    )}
                  </div>
                  <p className='mb-2 text-left text-[0.85rem] font-medium text-gray-400'>
                    {name} · {time} · {category}
                  </p>
                  <p className='text-left text-[1rem] font-medium leading-normal text-gray-700'>
                    {content}
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          )
        )}
      </Accordion>
    </div>
  );
}

export default InquiryList;
