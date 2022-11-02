import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { AiFillStar } from 'react-icons/ai';
import { BsThreeDotsVertical } from 'react-icons/bs';

import {
  UserIcon,
  Button,
  BUTTON_TYPES,
  IconButton,
  ICON_BUTTON_TYPES,
} from '../../index';
import EditDropdownMenu from '../EditDropdownMenu';
import { BoxWrapper } from './index.styles';

const SellerInfoBox = ({ seller, isAuthenticated, post }) => {
  // CONFIGURATION
  const ref = useRef();

  // STATE MANAGEMENT
  const [showEditDropdown, setShowEditDropdown] = useState(false);

  useEffect(() => {
    const checkIfClickOutside = (e) => {
      if (showEditDropdown && !ref.current.contains(e.target)) {
        setShowEditDropdown(false);
      }
    };
    window.addEventListener('mousedown', checkIfClickOutside, true);

    return () => {
      window.removeEventListener('mousedown', checkIfClickOutside, true);
    };
  }, [showEditDropdown]);

  return (
    <BoxWrapper>
      <div className="upperBox">
        <Link href={`/users/${seller?._id}`}>
          <a className="seller-info">
            <UserIcon user={seller} />
            <span>{seller?.name}</span>
          </a>
        </Link>

        <Button size="x" buttonType={BUTTON_TYPES.outlineGrey}>
          Follow
        </Button>

        {isAuthenticated && (
          <div className="editing-btn" ref={ref}>
            <IconButton
              size="x"
              buttonType={ICON_BUTTON_TYPES.hoverBackground}
              onClick={() => setShowEditDropdown((prev) => !prev)}
            >
              <BsThreeDotsVertical size={22} />
            </IconButton>
            <EditDropdownMenu
              post={post}
              showup={showEditDropdown}
              setShowup={setShowEditDropdown}
            />
          </div>
        )}
      </div>
      <div className="lowerBox">
        <div className="sales">98 sales</div>
        <div className="rates">
          {[1, 2, 3, 4, 5].map((item, i) => (
            <AiFillStar key={i} size={15} />
          ))}
        </div>
      </div>
    </BoxWrapper>
  );
};

export default SellerInfoBox;
