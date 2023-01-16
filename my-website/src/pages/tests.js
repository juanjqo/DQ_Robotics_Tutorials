import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Layout from '@theme/Layout';

import styles from './index.module.css';
export default function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://api.semanticscholar.org/graph/v1/paper/6fe5d5713b626139f880925188980ec95a82a631?fields=title,citationCount,citations.title,citations.authors,citations.year,citations.publicationTypes,citations.venue,citations.url,citations.openAccessPdf"
      );
      const parsed = await response.json();
      setData(parsed);
    })();
  }, []);

  return (
    <Layout>
      <div className="container">
         <section className={styles.always_light}>   
            <h1>Conference/Journal papers that used DQ Robotics</h1>
              <iframe src="https://bibbase.org/show?bib=dqrobotics.github.io%2Fimages%2Fdqrobotics.bib" frameborder="0" allowfullscreen
                 width={1000} height={500}>

              </iframe>
        <div>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
        </section>
      </div>
    </Layout>
  );
}

