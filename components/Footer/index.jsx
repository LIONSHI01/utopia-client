import React, { useState } from 'react';
import Link from 'next/link';
import { useMutation } from 'react-query';

import { SiMinutemailer } from '../ReactIcons';

import {
  categories,
  footerAboutLinks,
  footerSocialLinks,
} from '../../assets/constants';
import {
  FooterContainer,
  MasterFramworkWrapper,
  LogoColWrapper,
  CategoriesColWrapper,
  BusinessColWrapper,
  SocialsColWrapper,
  EmailBarContainer,
} from './index.styles';
import { createSubscription } from '../../utils/apiData/subscriptionRequres';
import { toast } from 'react-toastify';

const Footer = () => {
  const [email, setEmail] = useState('');

  const onSubmitHandler = (e) => {
    e.preventDefault();
    mutateSubscrib(email);
  };

  const onChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const { mutate: mutateSubscrib } = useMutation(createSubscription, {
    onSuccess: () => {
      setEmail('');
      toast.success('You have subscribe our newsletter! See you soon!');
    },
    onError: (err) => {
      toast.error(`${err?.response.data?.data?.message}`);
    },
  });

  return (
    <FooterContainer>
      <MasterFramworkWrapper>
        <LogoColWrapper>
          <p className="logo">Utopia</p>
        </LogoColWrapper>
        <CategoriesColWrapper>
          <h4 className="category_col_heading">Category</h4>
          <div className="category_col_links">
            {categories?.map(({ category, link }) => (
              <Link href={link}>
                <a className="category_col_link">{category}</a>
              </Link>
            ))}
          </div>
        </CategoriesColWrapper>
        <BusinessColWrapper>
          <h4 className="about_col_heading">About</h4>
          <div className="about_col_links">
            {footerAboutLinks?.map(({ title, link }) => (
              <Link href={link}>
                <a className="about_col_link">{title}</a>
              </Link>
            ))}
          </div>
        </BusinessColWrapper>
        <SocialsColWrapper>
          <EmailBarContainer>
            <form onSubmit={onSubmitHandler}>
              <input
                value={email}
                type="email"
                placeholder="example@gmail.com"
                onChange={onChangeHandler}
              />
              <button className="btn_container" type="submit">
                <SiMinutemailer size={20} className="icon" />
              </button>
            </form>
          </EmailBarContainer>
          <div className="socials_col_links">
            {footerSocialLinks?.map(({ link, icon }, i) => (
              <a
                key={i}
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                className="socials_col_link"
              >
                <div className="socials_col_icon_box">{icon}</div>
              </a>
            ))}
          </div>
        </SocialsColWrapper>
      </MasterFramworkWrapper>
    </FooterContainer>
  );
};

export default Footer;
