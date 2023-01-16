
import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';


export default function MyReactPage() {
  
  return (
 
    <Layout>
      <div className="container">

      <section className={styles.always_light}>   
      <h1>Conference/Journal papers that used DQ Robotics</h1>
      
         <div >
           <iframe src="https://bibbase.org/show?bib=dqrobotics.github.io%2Fimages%2Fdqrobotics.bib" frameborder="0" allowfullscreen
             width={1000} height={500}>

          </iframe>

          <iframe src="https://www.semanticscholar.org/paper/DQ-Robotics%3A-A-Library-for-Robot-Modeling-and-Adorno-Marinho/6fe5d5713b626139f880925188980ec95a82a631#citing-papers"
      frameborder="0" allowfullscreen
      width={1000} height={500}>

   </iframe>
        </div>
      </section>

      </div>
      </Layout>
    
  );
}

{/* 
<div style="position:relative;padding-top:56.25%;">
  <iframe src="https://bibbase.org/show?bib=dqrobotics.github.io%2Fimages%2Fdqrobotics.bib" frameborder="0" allowfullscreen
    style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe>
</div>

*/}
{/* </Layout> */}
    {/*<Layout> */}
