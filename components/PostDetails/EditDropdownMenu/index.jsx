import React from 'react';
import { useRouter } from 'next/router';

import { MenuWrapper, ContentWrapper } from './index.styles';

const EditDropdownMenu = ({ showup, setShowup, post }) => {
  const router = useRouter();
  const toEditPageHandler = () => {
    router.push(`/edit-post/${post?._id}`);
  };

  return (
    <MenuWrapper showup={showup}>
      <ContentWrapper showup={showup}>
        <ul>
          <li className="list-item" onClick={toEditPageHandler}>
            Edit
          </li>
          <li className="list-item">Delete</li>
        </ul>
      </ContentWrapper>
    </MenuWrapper>
  );
};

export default EditDropdownMenu;
