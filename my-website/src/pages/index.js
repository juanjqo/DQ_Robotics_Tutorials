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
import install_shell_python from '!!raw-loader!./install_shell_python.mdx';
import install_shell_cpp from '!!raw-loader!./install_shell_cpp.mdx';
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

          
          <img  width="800" src="https://user-images.githubusercontent.com/23158313/149566906-46c490dd-1e2f-4310-89c4-4a4c1abe3158.gif?raw=true"/>
          
          </>
        }
        columnTwo={
          <>
                       
                       {/*<h1 className="hero__title" style= {{color:'#ff0048'}}>{siteConfig.title}</h1>*/}
                        <img alt="" src={useBaseUrl('img/dqrobotics_logo_header.svg')} />
                        {/*<img alt="" width="562" height="315" src={useBaseUrl('img/header_page.svg')} />*/}
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
  // This funciton defines the footer
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.features)}>
      <div className="container">

        <h1 style= {{color:'#ffffff', textAlign: 'center', fontSize: '25px'}}>{"Give it a try"}</h1>

        <h1 style= {{color:'#ffffff', textAlign: 'left', fontSize: '25px'}}>{"1. Install"}</h1>
        <h1 style= {{color:'#ffffff', textAlign: 'left', fontSize: '20px'}}>{"open a terminal and run:"}</h1>
        
        <h1 style= {{color:'#ffffff', textAlign: 'left', fontSize: '18px'}}>{"Python version: "}</h1>

          
          <div style={{textAlign: 'left', fontSize: '18px'}}>
            <CodeBlock language="shell">{install_shell_python}</CodeBlock>
          </div>

          <h1 style= {{color:'#ffffff', textAlign: 'left', fontSize: '18px'}}>{"C++ version:"}</h1>

          <div style={{textAlign: 'left', fontSize: '18px'}}>
            <CodeBlock language="shell">{install_shell_cpp}</CodeBlock>
          </div>

        <h1 style= {{color:'#ffffff', textAlign: 'left', fontSize: '25px'}}>{"2. Read this"}</h1>

        <div className={styles.buttons}>
                          <Link
                            className="button button--secondary button--lg"
                            to="/docs/intro">
                            Get Started
                          </Link>
                        </div>

      </div>
    </header>
  );
}


function HomepageFooterVideo() {
  // This function defines the "How to cite" and IROS 2021 video
  return (
    <div>
    <Section className="VideoContent" background="light">
      <br />
      <TwoColumns
        columnOne={
          <div className="VideoContent">
        
        <TextColumn
            title={"How to cite"}
          />
  
           
            If you use DQ Robotics in your research, 
            please cite the  <a href="https://ieeexplore.ieee.org/document/9136790" style= {{color:'#ff6fa1', fontWeight:'bold' }}> DQ Robotics introductory paper (IEEE Robotics and Automation Magazine). </a> 
            You can also look at the 
            <a href="https://arxiv.org/abs/1910.11612" style= {{color:'#ff6fa1', fontWeight:'bold' }}> ArXiv version. </a> 
            
            <div style={{textAlign: 'left', fontSize: '11px'}}>
              <CodeBlock language="css">{MyComponentSource}</CodeBlock>
            </div>
            
          
        </div>
           
        
        }
        columnTwo={
          <div className="vidWrapper">
              <TextColumn
              title={"IROS 2021 Video"}
              />

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
