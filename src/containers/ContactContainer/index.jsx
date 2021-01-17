import React, { useState, useEffect } from 'react';
import Cosmic from 'cosmicjs';

import SiteNavigation from '../../components/SiteNavigation';

function ContactContainer() {
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    const client = new Cosmic();
    const bucket = client.bucket({
      slug: process.env.BUCKET_SLUG,
      read_key: process.env.READ_KEY
    });

    bucket.getObject({
      slug: 'kontakt-meg', // Merk! Denne slugen er bare et eksempel - endre den!
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
        <main>
          <h1>{pageData.title}</h1>
          <div dangerouslySetInnerHTML={{__html: pageData.content}} />
        </main>
      </>
    )
  }

  return (
    <>
      {(pageData === null) ? renderSkeleton() : renderPage()}
    </>
  )
};

export default ContactContainer;