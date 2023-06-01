import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
// import clsx from 'clsx';
// import Link from '@docusaurus/Link';
import HomepageFeatures from '../components/HomepageFeatures';

// import styles from './index.module.css';
// import Tabs from '@theme/Tabs';
// import TabItem from '@theme/TabItem';

// function HomepageHeader() {
//   const { siteConfig } = useDocusaurusContext();

//   return (
//     <header className={clsx('hero hero--primary', styles.heroBanner)}>
//       <div className="container">
//         <h1 className="hero__title">{siteConfig.title}</h1>
//         <p className="hero__subtitle">{siteConfig.tagline}</p>
//         <div className={styles.buttons}>
//           <Link className="button button--secondary button--lg" to="/intro">
//             Get started
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />"
    >
      {/* <HomepageHeader /> */}

      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
