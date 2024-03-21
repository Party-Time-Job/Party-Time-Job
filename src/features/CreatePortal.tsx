'use client';

import React from 'react';
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

const CreatePortal = ({ id, children }: CreatePortalInterface) => {
  if (typeof window !== 'object') {
    return null;
  }
  const element = document.getElementById(id) as HTMLElement;
  return createPortal(children, element);
};

export default CreatePortal;
