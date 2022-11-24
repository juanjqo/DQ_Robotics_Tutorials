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