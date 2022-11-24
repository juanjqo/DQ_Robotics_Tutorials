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
import useBaseUrl from '@docusaurus/useBaseUrl';


function Heading({text}) {
  return <h2 className="Heading">{text}</h2>;
}

function TextColumn({title, text, moreContent}) {
  return (
    <>
      <Heading text={title} />
      <div dangerouslySetInnerHTML={{__html: text}} />
      {moreContent}
    </>
  );
}

export function Section({
  element = 'section',
  children,
  className,
  background = 'light',
}) {
  const El = element;
  return (
    <El
      className={
        className
          ? `Section ${className} ${background}`
          : `Section ${background}`
      }>
      {children}
    </El>
  );
}

function TwoColumns({columnOne, columnTwo, reverse}) {
  return (
    <div className={`TwoColumns ${reverse ? 'reverse' : ''}`}>
      <div className={`column first ${reverse ? 'right' : 'left'}`}>
        {columnOne}
      </div>
      <div className={`column last ${reverse ? 'left' : 'right'}`}>
        {columnTwo}
      </div>
    </div>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">

      <Section background="dark" className="HeaderHero">
      <TwoColumns
        reverse
        columnOne={
          <>

          <img alt="" src={useBaseUrl('img/header_page.svg')} />
          </>
        }
        columnTwo={
          <>
                        {/*<h1 className="hero__title" style= {{color:'#ff0048'}}>{siteConfig.title}</h1>*/}
                        <img alt="" src={useBaseUrl('img/dqrobotics_logo_header.svg')} />
                        <p className="hero__subtitle" style= {{color:'#61dafb'}}>{siteConfig.tagline}</p> 
                        
                        
                        <div className={styles.buttons}>
                          <Link
                            className="button button--secondary button--lg"
                            to="/docs/intro">
                            Get Started
                          </Link>
                        </div>
          </>
        }
      />
    </Section>
    

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
  //const {siteConfig} = useDocusaurusContext();
  return (
    <div>
    <Section className="VideoContent" background="light">
      <br />
      <TwoColumns
        columnOne={
          <TextColumn
            title="IROS 2021 Video"
            text={"textContent.talks"}
          />
           
        
        }
        columnTwo={
          <div className="vidWrapper">

            <iframe 
            src="https://www.youtube.com/embed/e8ajS3FVMUI" 
            title="YouTube video player" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
          </div>
        }
      />
      <br />
    </Section>
  </div>
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
      title={`${siteConfig.title}`}
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
