
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
           <iframe src="https://github.com/dqrobotics/matlab/blob/master/CONTRIBUTING.md" frameborder="0" allowfullscreen
             width={1000} height={500}>

          </iframe>

         
        </div>
      </section>

      </div>
      </Layout>
    
  );
}

