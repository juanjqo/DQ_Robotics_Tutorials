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

import example_code_python from '!!raw-loader!./example_code_python.txt';
import example_code_cpp    from '!!raw-loader!./example_code_cpp.txt';
import example_code_matlab from '!!raw-loader!./example_code_matlab.txt';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



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
    <header className={clsx('hero hero--primary', styles.always_dark)}>
      <div className="container">

      <section className={styles.always_dark}>     

                       <>                    
                       {/*<h1 className="hero__title" style= {{color:'#ff0048'}}>{siteConfig.title}</h1>*/}
                       <Container>
                      <Row  className="justify-content-md-center">
                      <Col  >
                           <div style={{textAlign: 'center', fontSize: '11px'}}>
                              <img alt="" src={useBaseUrl('https://img.shields.io/pypi/l/dqrobotics?color=blue')} />                           
                              <img alt="" src={useBaseUrl('https://img.shields.io/badge/official%20support-Ubuntu LTS-orange')} />
                              <img alt="" src={useBaseUrl('https://img.shields.io/badge/experimental-Windows-blue')} />
                              <img alt="" src={useBaseUrl('https://img.shields.io/badge/macOS-yellow')} />
                          
                              
                            </div> 
                         <>
                         <img alt=""  width="562" height="215" src={useBaseUrl('img/dqrobotics_logo_infinity.svg')} /> 
                         
                         </>
                         <div>&nbsp;&nbsp;</div>
                         {/* width="562" height="215" */}
                         {/*<img alt="" width="562" height="315" src={useBaseUrl('img/header_page.svg')} />*/}
                         <p className="hero__subtitle" style= {{color:'#61dafb'}}>{siteConfig.tagline}</p> 

                         <div>&nbsp;&nbsp;</div>
                         <div>&nbsp;&nbsp;</div>
                          {/*![PyPI - Python Version](https://img.shields.io/pypi/pyversions/dqrobotics)*/}

                  
                      </Col>
                      

                      </Row>
                      <Row  className="justify-content-md-center">
                      <Col >
                            <div style={{textAlign: 'left', fontSize: '11px'}}>
                              
                              {/* <img alt="" src={useBaseUrl('https://img.shields.io/pypi/pyversions/dqrobotics')} /> */}
                              <img alt="" src={useBaseUrl('https://img.shields.io/pypi/pyversions/dqrobotics/21.4.0a75')} />
                              <img alt="" src={useBaseUrl('https://img.shields.io/pypi/dm/dqrobotics')}/>
                            </div> 
                                

                            <div style={{textAlign: 'left', fontSize: '14px'}}>
                            <CodeBlock language="shell">{install_shell_python}</CodeBlock>
                            </div>


                            <div style={{textAlign: 'left', fontSize: '11px'}}>
                            <img alt="" src={useBaseUrl('https://img.shields.io/badge/matlab-toolbox-blue')} />
                            <img alt="" src={useBaseUrl('https://img.shields.io/github/downloads/dqrobotics/matlab/total')} />
                          </div> 
                          
                          <div style={{textAlign: 'left', fontSize: '11px'}}>
                          <a href="https://github.com/dqrobotics/matlab/releases" 
                            style= {{color:'#50fa7b', fontWeight:'bold'}}> 
                            <img alt="" src={useBaseUrl('https://img.shields.io/badge/-Click%20here-282a36')} width="100"/>
                            </a>
                            
                          </div>

                      </Col>
                      <Col >
                          <div style={{textAlign: 'left', fontSize: '11px'}}>
                              <img alt="" src={useBaseUrl('https://img.shields.io/badge/C%2B%2B-11-blue')} />
                              <img alt="" src={useBaseUrl('https://img.shields.io/badge/Ubuntu LTS-orange')} />
                            </div> 
                          <div style={{textAlign: 'left', fontSize: '11px'}}>
                            
                            
                          </div> 
                            <div style={{textAlign: 'left', fontSize: '14px'}}>
                                  <CodeBlock language="shell">{install_shell_cpp}</CodeBlock>
                            </div>
                      </Col>


                      </Row>




                      <Row  className="justify-content-md-center">
                      <Col >
                        <div className="container">
                        <div className={styles.buttons}>
                                      <Link
                                        
                                     
                                        className="button button--secondary button--lg"
                                        to="/docs/intro">
                                        Learn more
                                      
                                        
                                      </Link>
                          </div>

                        </div>




                      </Col>
                      </Row>
                      </Container>


                        </>  
      
       </section>
      </div>
    </header>
  );
}


function HomepageHeaderFeatures() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.always_light)}>
      <div className="container">
        <section className={styles.always_light}>     
          <div>&nbsp;&nbsp;</div>                
                       <Container>
                       <Row  className="justify-content-md-center">
                       <Col  >
                        <div className="container">
                        
                          <p className="hero__subtitle" style= {{fontWeight:'bold', color:'#000000',  fontSize: '30px'}}>{'What is DQ Robotics?'}</p> 
                          <div>&nbsp;&nbsp;</div>
                          <div>&nbsp;&nbsp;</div>
                          <p style= {{color:'#000000', textAlign: 'center', fontSize: '20px'}}>{
                          
                          "DQ Robotics is a standalone open-source (LGPLv3) library for robot modelling and control. " +
                          "It provides dual quaternion algebra and kinematic calculation algorithms."
                          }</p> 
                           
                          

                         </div>

                      </Col>
                      <Col >
                        <div className="container">
                        <img alt=""  height="200" src={useBaseUrl('img/computer_intro.png')} />  
                        </div>

                      </Col>
                      </Row>
                      </Container>
          <div>&nbsp;&nbsp;</div>
       </section>
      </div>
    </header>
  );
}

function HomepageInstallDQRobotics() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.features_alternative)}>
      <div className="container">

      <section className={styles.features_alternative}>    
                       <>                    



                        <div className="container">
                        <h1 style= {{color:'#ffffff', textAlign: 'center', fontSize: '30px'}}>{"Install DQ Robotics"}</h1>

   
                         <div>&nbsp;&nbsp;</div>
                         <div>&nbsp;&nbsp;</div>
                        <Container>
                        <Row  className="justify-content-md-center">
                         <Col >  
                              
                              <h1 style= {{color:'#61dafb', textAlign: 'left', fontSize: '18px'}}>{""}
                              <a href="https://github.com/dqrobotics/python" style= {{color:'#61dafb', fontWeight:'bold', textAlign: 'left', fontSize: '18px' }}>Python3 </a>
                              <img alt="" src={useBaseUrl('https://github.com/dqrobotics/python/actions/workflows/python_package.yml/badge.svg')} />

                              <img alt="" src={useBaseUrl('https://badge.fury.io/py/dqrobotics.svg')} /> &nbsp;
                              <a href="https://github.com/dqrobotics/python/issues" style= {{color:'#ffbe00', fontWeight:'bold', textAlign: 'left', fontSize: '18px' }}>⚠️ Issue tracker </a>
                              </h1>

                              <h1 style= {{color:'#ffffff', textAlign: 'left', fontSize: '18px'}}>{"Open a terminal and run:"}</h1>
                                
                              <div style={{textAlign: 'left', fontSize: '18px'}}>
                                <CodeBlock language="shell">{install_shell_python}</CodeBlock>
                              </div>

                              <div>&nbsp;&nbsp;</div>
                              
                         </Col>  
                         <Col  >  
                                       
                                <h1 style= {{color:'#ff6fa1', textAlign: 'left', fontSize: '18px'}}>{""}     
                                <a href="https://github.com/dqrobotics/cpp" style= {{color:'#ff6fa1', fontWeight:'bold', textAlign: 'left', fontSize: '18px' }}>C++11 </a>  
                                <img alt="" src={useBaseUrl('https://github.com/dqrobotics/cpp/actions/workflows/cpp_build_ubuntu.yml/badge.svg?branch=master')} />&nbsp;
                                <a href="https://github.com/dqrobotics/cpp/issues" style= {{color:'#ffbe00', fontWeight:'bold', textAlign: 'left', fontSize: '18px' }}>⚠️ Issue tracker </a>
                                </h1>
                                
                                <h1 style= {{color:'#ffffff', textAlign: 'left', fontSize: '18px'}}>{"Open a terminal and run:"}</h1> 

                                <div style={{textAlign: 'left', fontSize: '18px'}}>
                                  <CodeBlock language="shell">{install_shell_cpp}</CodeBlock>
                                </div>

                                <div>&nbsp;&nbsp;</div>
                         </Col>
                          </Row>
                          <Row>
                          <Col > 

                          <div>&nbsp;&nbsp;</div>
                          <div style={{textAlign: 'center'}}>   
                            <h1 style= {{color:'#ffffff', textAlign: 'left', fontSize: '18px'}}>{""}
                                  <a href="https://github.com/dqrobotics/matlab" style= {{color:'#ffffff', fontWeight:'bold', textAlign: 'left', fontSize: '18px' }}>Matlab </a>
                                  <img alt="" src={useBaseUrl('https://github.com/dqrobotics/matlab/actions/workflows/matlab_test.yml/badge.svg?branch=master')} />&nbsp;
                                  <a href="https://github.com/dqrobotics/matlab/issues" style= {{color:'#ffbe00', fontWeight:'bold', textAlign: 'left', fontSize: '18px' }}>⚠️ Issue tracker </a>
                                  </h1>
                                  <h1 style= {{color:'#ffffff', textAlign: 'left', fontSize: '18px'}}>{"Download the most recent Matlab toolbox of DQ Robotics "}
                                    <a href="https://github.com/dqrobotics/matlab/releases/tag/20.04.0.1" style= {{color:'#50fa7b', fontWeight:'bold'}}>here. </a>
                                    Check this <a href="https://github.com/dqrobotics/learning-dqrobotics-in-matlab" style= {{color:'#61dafb', fontWeight:'bold'}}>course </a> 
                                    if you want to learn DQ Robotics in Matlab.
                                </h1> 
                                
                          </div>
                         </Col>
                          </Row>

                         </Container>
                         <div>&nbsp;&nbsp;</div>
                         <div>&nbsp;&nbsp;</div>
                                <div className={styles.buttons}>
                                                <Link
                                                  className="button button--secondary button--lg"
                                                  to="/docs/intro">
                                                  Get Started
                                                </Link>
                                </div>

                        </div>
          </>
      
      
        </section>
       </div>
      </header>
  );
}

function HomepageFooter() {
  // This functon defines the footer, which the instrucctions of installation are shown.
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.features)}>
      <div className="container">

        <h1 style= {{color:'#ffffff', textAlign: 'center', fontSize: '25px'}}>{"Give it a try"}</h1>

      

        <h1 style= {{color:'#ffffff', textAlign: 'left', fontSize: '18px'}}>{"Matlab"}
        <img alt="" src={useBaseUrl('https://github.com/dqrobotics/matlab/actions/workflows/matlab_test.yml/badge.svg?branch=master')} />
        </h1>
        <h1 style= {{color:'#ffffff', textAlign: 'left', fontSize: '15px'}}>{"Download the most recent Matlab toolbox of DQ Robotics "}
           <a href="https://github.com/dqrobotics/matlab/releases/tag/20.04.0.1" style= {{color:'#50fa7b', fontWeight:'bold'}}>here.</a>
        </h1> 
        


        
       <div>&nbsp;&nbsp;</div>
       <div>&nbsp;&nbsp;</div>
       <div>&nbsp;&nbsp;</div>
      
        
        <h1 style= {{color:'#61dafb', textAlign: 'left', fontSize: '18px'}}>{"Python3"}
        <img alt="" src={useBaseUrl('https://github.com/dqrobotics/python/actions/workflows/python_package.yml/badge.svg')} />
        
        <img alt="" src={useBaseUrl('https://badge.fury.io/py/dqrobotics.svg')} />
        </h1>

        <h1 style= {{color:'#ffffff', textAlign: 'left', fontSize: '15px'}}>{"Open a terminal and run:"}</h1>
          
        <div style={{textAlign: 'left', fontSize: '18px'}}>
          <CodeBlock language="shell">{install_shell_python}</CodeBlock>
        </div>

        <div>&nbsp;&nbsp;</div>
        <div>&nbsp;&nbsp;</div>
        <div>&nbsp;&nbsp;</div>

          <h1 style= {{color:'#ff6fa1', textAlign: 'left', fontSize: '18px'}}>{"C++11"}         
          <img alt="" src={useBaseUrl('https://github.com/dqrobotics/cpp/actions/workflows/cpp_build_ubuntu.yml/badge.svg?branch=master')} />
          </h1>
          
          <h1 style= {{color:'#ffffff', textAlign: 'left', fontSize: '15px'}}>{"Open a terminal and run:"}</h1> 

          <div style={{textAlign: 'left', fontSize: '18px'}}>
            <CodeBlock language="shell">{install_shell_cpp}</CodeBlock>
          </div>

    

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
  const {siteConfig} = useDocusaurusContext();
  return (

      <header className={clsx('hero hero--primary', styles.features_alternative)}>
      <div className="container">

      <section className={styles.features_alternative}>   

            <>

            <Container>
            <Row  className="justify-content-md-center">
            <Col  >
              {/*<h1 style= {{color:'#000000', textAlign: 'left', fontSize: '20px'}}>{"How to cite"}</h1> */}
              <h1 style= {{color:'#ffffff', textAlign: 'left', fontSize: '20px'}}>{"How to cite"}</h1> 

              If you use DQ Robotics in your research, 
              please cite the  <a href="https://ieeexplore.ieee.org/document/9136790" style= {{color:'#ff6fa1', fontWeight:'bold' }}> DQ Robotics introductory paper (IEEE Robotics and Automation Magazine). </a> 
              You can also look at the 
              <a href="https://arxiv.org/abs/1910.11612" style= {{color:'#ff6fa1', fontWeight:'bold' }}> ArXiv version. </a> 
              
              <div style={{textAlign: 'left', fontSize: '11px'}}>
                <CodeBlock language="css">{MyComponentSource}</CodeBlock>
              </div>

             

            </Col>
            <Col >
              {/*<h1 style= {{color:'#000000', textAlign: 'left', fontSize: '20px'}}>{"IROS 2021 Video"}</h1>  */}
              <h1 style= {{color:'#ffffff', textAlign: 'left', fontSize: '20px'}}>{"IROS 2021 Video"}</h1> 
              
              <div className="video-responsive">
              <iframe
                width="853"
                height="480"
                src={`https://www.youtube.com/embed/e8ajS3FVMUI`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              />
             </div>

            </Col>
            </Row>
            </Container>
           
            </>
            
            </section>
       </div>
      </header>


  
  );
}


function HomepageFeaturesModeling() {
  // This function shows the videos in the main page
  const {siteConfig} = useDocusaurusContext();
  return (
    
    <header className={clsx('hero hero--primary', styles.always_gray)}>
    
    <div className="container">
    
    <section className={styles.always_gray}>      
          {/* <div>&nbsp;&nbsp;</div> */}             
          <h1 style= {{color:'#000000', textAlign: 'center', fontSize: '25px'}}>{"Robot Modeling"}</h1>
          
          <img alt=""  height="auto" src={useBaseUrl('img/geometricPrimitives.png')} />          
          
          </section>
       </div>
      </header>
    

  );
}



function HomepageAnimation() {
  // This function shows the videos in the main page
  const {siteConfig} = useDocusaurusContext();
  return (
    
    <header className={clsx('hero hero--primary', styles.always_light)}>
    
    <div className="container">
    
    <section className={styles.always_light}>      
          {/* <div>&nbsp;&nbsp;</div> */}             
          {/* <h1 style= {{color:'#000000', textAlign: 'center', fontSize: '25px'}}>{"Dual Quaternions in DQ Robotics"}</h1> */} 
          <div>&nbsp;&nbsp;</div>
          <div className="video-responsive">
              <video
                    muted
                    autoPlay
                    loop
                    playsInline
                    src={useBaseUrl(`img/dqrobotics_animation.mp4`)}
                    width={"75%"}                
                />             
          </div>
          </section>
       </div>
      </header>
    

  );
}

function HomepageCodeExamples() {
  // This function shows the example with CoppeliaSim using Matlab, Python and C++
  const {siteConfig} = useDocusaurusContext();
  return (

    <header className={clsx('hero hero--primary', styles.always_gray)}>
    <div className="container">

    <section className={styles.always_gray}>      
          <>
                          
          <h1 style= {{color:'#000000', textAlign: 'center', fontSize: '25px'}}>{"Similar style between the languages"}</h1>
          <Container>
          <Row  className="justify-content-md-center">
          <Col  >
          
                    <Tabs>
                    <TabItem value="python" label="Python" attributes={{className: styles.python_tab_color}}>
                          <div style={{textAlign: 'left', fontSize: '12px'}}>
                            <CodeBlock language="cpp">{example_code_python}</CodeBlock>
                          </div>
                    </TabItem>
                    <TabItem value="cpp" label="C++"  attributes={{className: styles.cpp_tab_color}}>
                          <div style={{textAlign: 'left', fontSize: '12px'}}>
                            <CodeBlock language="cpp">{example_code_cpp}</CodeBlock>
                          </div>
                    </TabItem>
                    <TabItem value="matlab" label="Matlab"  attributes={{className: styles.matlab_tab_color}}>
                          <div style={{textAlign: 'left', fontSize: '12px'}}>
                            <CodeBlock language="cpp">{example_code_matlab}</CodeBlock>
                          </div>
                    </TabItem>
              </Tabs>
           
          </Col>
          <Col >
          <div>&nbsp;&nbsp;</div>
          <div>&nbsp;&nbsp;</div>
          <div>&nbsp;&nbsp;</div>
          <div className="video-responsive">
              <video
                    muted
                    autoPlay
                    loop
                    playsInline
                    src={useBaseUrl(`img/website1.mp4`)}
                    width={"100%"}
                        
                />
          </div>    
          
          <div className="video-responsive">    
              <video
                    muted
                    autoPlay
                    loop
                    playsInline
                    src={useBaseUrl(`img/website2.mp4`)}
                    width={"100%"}
                    
                />
          </div>


          </Col>      
          </Row>
          </Container>
           
          </>
     
          </section>
       </div>
      </header>
    

  );
}


export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />


      {/* <HomepageHeaderFeatures/> */}
      <HomepageCodeExamples />
      {/*
      <main>
        <HomepageFeatures />
      </main>
      */}


      
      {/* <hr  style={{color: '#ececec',backgroundColor: '#ececec',height: 1,borderColor : '#ececec'}}/> */}

      {/*  <HomepageAnimation /> */}
      {/* <HomepageFeaturesModeling /> */}
      
      {/* <HomepageInstallDQRobotics/> . */}
      <HomepageFooterVideo />
      {/*<HomepageFooter /> */}
    </Layout>
  );
}
