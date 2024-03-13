'use client';

import { createPortal } from 'react-dom';

/**
 * @param {string} id 렌더링 대상 DOM 요소의 id
 * @param {ReactNode} children 외부 DOM에 렌더링할 요소
 * @return 외부 DOM에 렌더링
 */

export interface CreatePortalInterface {
  id: string;
  children: React.ReactNode;
}

// 로딩이 완료되었는지 확인이 필요하다함
// 따라서 브라우저 환경에서 우선 실행되는지 파악
const CreatePortal = ({ id, children }: CreatePortalInterface) => {
  if (typeof window !== 'object') {
    return null;
  }
  const element = document.getElementById(id) as HTMLElement;
  return createPortal(children, element);
};

export default CreatePortal;
