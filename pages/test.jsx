import React from 'react';

const test = ({ text }) => {
  console.log(text);
  return <div>test</div>;
};

export const getServerSideProps = async ({ params }) => {
  // Return Product Details Page Data

  const text = 'text';
  return {
    props: {
      text,
    },
  };
};

export default test;
