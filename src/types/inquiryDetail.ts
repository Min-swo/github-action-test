import { ActiveTab } from './inquiry';

/**
 * 문의 세부 사항 타입
 */
export type InquiryDetail = {
  /** 고유 식별자 */
  id: number;
  /** 문의 제목 */
  title: string;
  /** 문의한 사람의 이름 */
  name: string;
  /** 문의 시간 (타임스탬프 형식) */
  time: number;
  /** 문의 카테고리 */
  category: string;
  /** 문의 상태 */
  status: ActiveTab;
  /** 문의 내용 */
  content: string;
  /** 답변 내용 */
  reply_content: string;
};
