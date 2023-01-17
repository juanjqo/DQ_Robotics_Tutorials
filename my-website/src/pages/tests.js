import React, { useState, useEffect, useDebugValue } from "react";
import ReactDOM from "react-dom";
import Layout from '@theme/Layout';

import styles from './index.module.css';
export default function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://api.semanticscholar.org/graph/v1/paper/6fe5d5713b626139f880925188980ec95a82a631?fields=venue,year,title,authors.name,citationCount,citations.title,citations.authors,citations.year,citations.publicationTypes,citations.venue,citations.url,citations.openAccessPdf"
      );
      const parsed = await response.json();
      setData(parsed);
      
    })();
  }, []);
  var authors = JSON.stringify(data.authors, null, 2);
  return (
    
    <Layout> 
      <div className="container">
         <section className={styles.always_light}> 
            <h1 style= {{color:'#000000', textAlign: 'center', fontSize: '25px'}}>
            <a href="https://ieeexplore.ieee.org/document/9136790" style= {{color:'#1777bc', fontWeight:'bold', textAlign: 'center', fontSize: '35px'}}>{data.title}</a>
            
            <p style= {{color:'#000000', textAlign: 'center', fontSize: '30px'}}>{data.venue}, {data.year}</p>
            <p style= {{color:'#000000', textAlign: 'center', fontSize: '25px'}}>{GetPaperAuthors(data.authors)[0]}, {GetPaperAuthors(data.authors)[1]}</p>
            </h1>
            <hr />
            <h1 style= {{color:'#000000', textAlign: 'center', fontSize: '25px'}}>Citations: {data.citationCount}</h1>

            <hr />

            { data.citations?.map((value, index) => {
                return (
                  <div key={index}>
                    <h2>{value.title} {index}</h2>
              
                    {/* <hr /> */} 
                  </div>
                );
              })}
  
        <div>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
        </section>
      </div>
    </Layout>
  );
}

function GetPaperAuthors(data){
  var authors = new Array();
  { data?.map((value, index) => {( authors[index] = value.name);})}
  return authors;
}


