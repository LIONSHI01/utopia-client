import React from 'react';
import { searchPostsRequest } from '../../utils/postRequest';
import Head from 'next/head';
import { DisplayList } from '../../components';
import {
  SearchPageContainer,
  FrameworkContainer,
} from '../../pages_styles/search.styles';

const SearchPage = ({ searchPosts, searchWords }) => {
  return (
    <SearchPageContainer>
      <Head>
        <title>Search results | Utopia</title>
      </Head>
      <FrameworkContainer>
        <div className="search-words">
          <span className="results-number">{searchPosts?.length}</span>
          <p>search results for</p>
          <span>{`" ${searchWords} "`}</span>
        </div>
        <DisplayList posts={searchPosts} isLoading={false} />
      </FrameworkContainer>
    </SearchPageContainer>
  );
};

export const getServerSideProps = async ({ query }) => {
  const searchWords = query.query[0];
  const data = await searchPostsRequest(searchWords);
  const searchPosts = data.data.filteredPosts;

  return {
    props: { searchPosts, searchWords },
  };
};

export default SearchPage;
