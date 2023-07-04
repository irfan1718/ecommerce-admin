/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import { useEffect } from 'react';

import { useStoreModal } from '@/hooks/use-store-modal';

const setUpPage = () => {

const onOpen = useStoreModal((state) => state.onOpen);
const isOpen = useStoreModal((state) => state.isOpen);


  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [onOpen, isOpen]);

  return <div className='p-4'>Protected Route</div>;
};

export default setUpPage;
