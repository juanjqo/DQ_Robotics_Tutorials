import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';
import CodeBlock from '@theme/CodeBlock';
import MyComponentSource from '!!raw-loader!./citation.mdx';
import MyMatlabCode from '!!raw-loader!./matlab_example.mdx';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';




function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title" style= {{color:'#ff0048'}}>{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p> 
        
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Getting Started
          </Link>
        </div>
    

      </div>
    </header>
  );
}

function HomepageFooter() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.features)}>
      <div className="container">
        
        <details open>
          <summary>How to cite us</summary>

         
          If you use DQ Robotics in your research, 
          please cite the  <a href="https://ieeexplore.ieee.org/document/9136790" style= {{color:'#FFFFFF', fontWeight:'bold' }}> DQ Robotics introductory paper (IEEE Robotics and Automation Magazine). </a> 
          You can also look at the 
          <a href="https://arxiv.org/abs/1910.11612" style= {{color:'#FFFFFF', fontWeight:'bold' }}> ArXiv version. </a> 
          
          <div style={{textAlign: 'left', fontSize: '12px'}}>
            <CodeBlock language="css">{MyComponentSource}</CodeBlock>
          </div>
        </details>
      </div>
    </header>
  );
}


function HomepageFooterVideo() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <section className={styles.heroBanner}>
      <div className="container">

          <p align="center">
          <a href="https://www.youtube.com/watch?v=e8ajS3FVMUI">
          <img width="1125" height="630"  src="https://user-images.githubusercontent.com/23158313/149566906-46c490dd-1e2f-4310-89c4-4a4c1abe3158.gif?raw=true"/>
          
          </a>
          </p>    
        
      </div>

    </section>
  );
}


const exampleMatlab = `v := Vertex{X: 1, Y: 2}`;

function HomepageCodeExamples() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <section className={styles.heroBanner}>
      <div className="container">

      

      <hr  style={{
          color: '#ececec',
          backgroundColor: '#ececec',
          height: 2,
          borderColor : '#ececec'
      }}/>

      <div id="cparent"> 
        <div class="col" style= {{fontWeight:'bold' }}>Matlab
            <div style={{textAlign: 'left', fontSize: '12px'}}>


                      <CodeBlock
                      language="matlab"
                      //title="Matlab"
                      showLineNumbers>
                                    {`a = 1 + E_*(1+k_)`}
                    </CodeBlock> 
                
              </div>
        </div> 

        <div class="col" style= {{fontWeight:'bold' }}>Python
        
                 <div style={{textAlign: 'left', fontSize: '12px'}}>

                  <CodeBlock
                  language="python"
                  //title="Python"
                  showLineNumbers>
                                {`def hello_world(): a = 1 + E_*(1+k_)`}
                  </CodeBlock> 

                  </div>

        </div> 


        <div class="col" style= {{fontWeight:'bold' }}>C++
                <div style={{textAlign: 'left', fontSize: '12px'}}>

                <CodeBlock
                language="cpp"
                //title="Python"
                showLineNumbers>
                              {` DQ a = 3;`}
                </CodeBlock> 

                </div>
        
        </div> 
      </div>

      <hr  style={{
          color: '#ececec',
          backgroundColor: '#ececec',
          height: 2,
          borderColor : '#ececec'
      }}/>


            
     
        
      </div>
      

    </section>
  );
}


export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
      <HomepageCodeExamples />
      <HomepageFooterVideo />
      <HomepageFooter />
    </Layout>
  );
}
