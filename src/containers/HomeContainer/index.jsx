import React, { useState, useEffect } from 'react';
import Cosmic from 'cosmicjs';

import SiteNavigation from '../../components/SiteNavigation';
import Container from '../../components/Container';
import PageTitle from '../../components/PageTitle';

function HomeContainer() {
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    const client = new Cosmic();
    const bucket = client.bucket({
      slug: process.env.BUCKET_SLUG,
      read_key: process.env.READ_KEY
    });

    bucket.getObject({
      slug: 'velkommen-til-min-hjemmeside', // Merk! Denne slugen er bare et eksempel - endre den!
      props: 'title,content'
    })
      .then(data => {
        setPageData(data.object);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  function renderSkeleton() {
    return (
      <p>Laster data...</p>
    );
  }

  function renderPage() {
    return (
      <>
        <SiteNavigation />
        <Container as="main">
          <PageTitle>{pageData.title}</PageTitle>
          <div dangerouslySetInnerHTML={{__html: pageData.content}} />
        </Container>
      </>
    )
  }

  return (
    <>
      {(pageData === null) ? renderSkeleton() : renderPage()}
    </>
  )
};

export default HomeContainer;