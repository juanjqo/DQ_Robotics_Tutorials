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
                          <p className="hero__subtitle">{siteConfig.tagline}</p> 
                          
                          
                          <div className={styles.buttons}>
                            <Link
                              className="button button--secondary button--lg"
                              to="/docs/intro">
                              Getting Started
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


  <Tabs>
  <TabItem value="apple" label="Apple" default>
        <div style={{textAlign: 'left', fontSize: '14px'}}>
          <CodeBlock language="python">{example_code_python}</CodeBlock>
        </div>
  </TabItem>
  <TabItem value="orange" label="Orange">
    This is an orange 🍊
  </TabItem>
  <TabItem value="banana" label="Banana">
    This is a banana 🍌
  </TabItem>
</Tabs>



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



<iframe 
              src="https://www.youtube.com/embed/e8ajS3FVMUI" 
              title="YouTube video player" frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
       
              allowfullscreen>
                
              </iframe>