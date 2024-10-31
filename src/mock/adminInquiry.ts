// mockInquiryData.ts

import { InquiryDetail } from '@/types/inquiryDetail';

export const mockInquiryData: InquiryDetail[] = [
  {
    id: 1,
    title: '안녕하세요 문의드리려고 합니다',
    name: '이규호',
    time: 12,
    category: '예적금',
    status: '답변대기',
    content:
      '안녕하세요 좀 궁금한게 있는데 어떤게 궁금한지는 잘 모르겠어서 생각 좀 해보고 다시 문의드릴게요 감사합니다.',
    reply_content: '',
  },
  {
    id: 2,
    title: '예금 관련 문의',
    name: '김지현',
    time: 1,
    category: '예적금',
    status: '답변완료',
    content: '예금 상품에 대해 설명해주실 수 있나요?',
    reply_content: '예금 상품은 혼자 검색해보시고 잘 알아보세요~',
  },
  {
    id: 3,
    title: '대출 상담 요청',
    name: '박민수',
    time: 15,
    category: '대출',
    status: '답변대기',
    content: '대출에 대한 상담을 받고 싶습니다. 가능한 시간 알려주세요.',
    reply_content: '',
  },
  {
    id: 4,
    title: '인터넷 뱅킹 문제',
    name: '이현수',
    time: 142,
    category: '인터넷뱅킹',
    status: '답변대기',
    content: '인터넷 뱅킹 로그인 오류가 발생합니다. 해결 방법이 있나요?',
    reply_content: '',
  },
  {
    id: 5,
    title: '안녕하세요 문의드리려고 했다가 말다가 고민입니다.',
    name: '이주호',
    time: 12,
    category: '예적금',
    status: '답변완료',
    content:
      '안녕하세요 좀 궁금한게 있는데 어떤게 궁금한지는 잘 모르겠어서 생각 좀 해보고 다시 문의드릴게요 감사합니다.',
    reply_content:
      '문의를 할까 말까 고민이시군요! 주저하지 마시고 언제든지 편하게 문의 주시면 성실히 답변드리도록 하겠습니다. 감사합니다.',
  },
  {
    id: 6,
    title: '안녕하세요 펀드 상품 문의드리려고 합니다',
    name: '김민호',
    status: '답변완료',
    time: 18,
    category: '펀드',
    content:
      '안녕하세요 좀 궁금한게 있는데 어떤게 궁금한지는 잘 모르겠어서 생각 좀 해보고 다시 문의드릴게요 감사합니다.',
    reply_content: '고객님께서 문의하신 펀드상품은 어쩌구저쩌구~~',
  },
  {
    id: 7,
    title: '안녕하세요 문의드리려고 합니다',
    name: '호날두',
    status: '답변대기',
    time: 14,
    category: '외환',
    content:
      '한쿸말 잘 모태요우. 킴치 마쉬써. 지난 번엔 노쇼해서 정말 죄송합니다.',
    reply_content: '',
  },
  {
    id: 8,
    title: '안녕하세요 문의드리려고 합니다',
    name: '일론머스크',
    status: '답변완료',
    time: 7,
    category: '마이데이터',
    content:
      '안녕하세요 좀 궁금한게 있는데 어떤게 궁금한지는 잘 모르겠어서 생각 좀 해보고 다시 문의드릴게요 감사합니다.',
    reply_content: '천천히 생각해보시고 문의 부탁드립니다.',
  },
  {
    id: 9,
    title: '안녕하세요 문의드리려고 합니다',
    name: '강능요',
    status: '답변대기',
    time: 43,
    category: '모바일',
    content:
      '안녕하세요 좀 궁금한게 있는데 어떤게 궁금한지는 잘 모르겠어서 생각 좀 해보고 다시 문의드릴게요 감사합니다.',
    reply_content: '',
  },
];
