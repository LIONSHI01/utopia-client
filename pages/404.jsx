import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Router from 'next/router';

import { Button } from '../components/index';

import {
  PageWrapper,
  LinkSection,
  ImageSection,
} from '../pages_styles/404.styles';

import ErrorImage from '../assets/image/error_image.png';

const ErrorPage = () => {
  return (
    <PageWrapper>
      <Head>
        <title>404 error | Utopia</title>
      </Head>
      <LinkSection>
        <div className="title">
          <h1>404</h1>
          <p>
            It looks like that page doesn&#39;t exist - May be you can find
            something helpful below.
          </p>

          <Button
            height="4.5rem"
            width="20rem"
            fonsSize="1.8rem"
            onClick={() => Router.push('/')}
          >
            Explore Our Site
          </Button>
        </div>
      </LinkSection>
      <ImageSection>
        <div className="image-container">
          <Image
            src={ErrorImage}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt="404"
          />
        </div>
      </ImageSection>
    </PageWrapper>
  );
};

export default ErrorPage;
