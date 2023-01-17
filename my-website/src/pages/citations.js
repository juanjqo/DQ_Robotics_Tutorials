import React, { useState, useEffect, useDebugValue } from "react";
import ReactDOM from "react-dom";
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const myComponent = {
  height: '800px',
  overflowX: 'hidden',
  overflowY: 'scroll'
};

export default function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://api.semanticscholar.org/graph/v1/paper/6fe5d5713b626139f880925188980ec95a82a631?fields=venue,year,title,authors.name,citationCount,citations.title,citations.authors,citations.year,citations.publicationTypes,citations.venue,citations.url,citations.openAccessPdf,citations.externalIds"
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
            <h1 style= {{color:'#000000', textAlign: 'center', fontSize: '20px'}}>
            <a href="https://ieeexplore.ieee.org/document/9136790" style= {{color:'#1777bc', fontWeight:'bold', textAlign: 'center', fontSize: '35px'}}>{data.title}</a>
            
            <p style= {{color:'#000000', textAlign: 'center', fontSize: '20px'}}>{data.venue}, {data.year}</p>
            <p style= {{color:'#000000', textAlign: 'center', fontSize: '15px'}}>{GetPaperAuthors(data.authors)[0]}, {GetPaperAuthors(data.authors)[1]}</p>
            </h1>
            <hr />
            
            <h1 style= {{color:'#000000', textAlign: 'center', fontSize: '25px'}}>
            <p style= {{color:'#000000', textAlign: 'center', fontSize: '15px'}}>Data provided by </p>
            <a href="https://api.semanticscholar.org/6fe5d5713b626139f880925188980ec95a82a631">
            <img alt=""  width="300" height="45" src={useBaseUrl('img/semantic_scholar2.svg')} />
            </a>
            <p style= {{color:'#000000', textAlign: 'center', fontSize: '15px'}}> Citations: {data.citationCount}</p>
            </h1>

            <hr />
            
            <div style={{ height: '800px' }}>
                  <div style={myComponent}>
                      { data.citations?.map((value, index) => {
                          return (

                            <div key={index}>

                              <section className={ index%2 ? styles.always_gray : styles.always_light}>  
                              <Container>
                              <Row  className="justify-content-md-center">
                              <Col  >
                              <a href={value.url} style= {{color:'#1777bc', fontWeight:'bold', textAlign: 'center', fontSize: '15px'}}>{value.title}
                              
                              </a>
                              
                              <a href={value.url}>
                              <img alt=""  width="300" height="15" src={useBaseUrl('img/semantic_scholar.svg')} />
                              </a>

                              <p style= {{color:'#000000', textAlign: 'center', fontSize: '15px'}}>{}</p>

                              </Col>

                              <Col  >
                              <p style= {{color:'#000000', textAlign: 'center', fontSize: '15px'}}>{value.venue}</p>
                              </Col>

                              <Col  >
                              <a href={value.url} style= {{color:'#000000', fontWeight:'bold', textAlign: 'center', fontSize: '15px'}}>{value.year}</a>
                              </Col>


                              

                              </Row>
                              </Container>
                              </section>
                              </div>


                            
                          );
                        })}

                  </div>  
              </div>
                    

              <section className={styles.always_light}>   
                    <h1 style= {{color:'#000000', textAlign: 'center', fontSize: '25px'}}> Conference/Journal papers that used DQ Robotics</h1>
                    
                      <div >
                        <iframe src="https://bibbase.org/show?bib=dqrobotics.github.io%2Fimages%2Fdqrobotics.bib" frameborder="0" allowfullscreen
                          width={1000} height={500}>

                        </iframe>

                      </div>
               </section>
      
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

function GetPaperDoi(data)
{
  var doi = new Array();
  { data?.map((value, index) => {( doi[index] = value.DOI);})}
  return doi;
}


