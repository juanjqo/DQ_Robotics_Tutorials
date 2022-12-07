import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import CodeBlock from '@theme/CodeBlock';


const FeatureList = [
  {
    title: 'What is DQ Robotics?',
    Svg: require('@site/static/img/ad_dq.svg').default,
    description: (
      <>
        DQ Robotics is a standalone open-source (LGPLv3) library for robot modelling and control. 
        It provides dual quaternion algebra and kinematic calculation algorithms.
      </>
    ),
  },
  {
    title: 'Interface Packages',
    Svg: require('@site/static/img/ad_dq.svg').default,
    description: (
      <>
        We offer interface packages for third-party software 
        such as <a href="https://www.coppeliarobotics.com/" style= {{color:"#277148", fontWeight:'bold' }}>CoppeliaSim</a>, 
        <a href="https://www.ibm.com/products/ilog-cplex-optimization-studio" style= {{color:"#277148", fontWeight:'bold' }}> CPLEX</a>,
        <a href="https://github.com/coin-or/qpOASES" style= {{color:"#277148", fontWeight:'bold' }}> qpOASES</a>, and 
        <a href="https://github.com/dropbox/json11/tree/2df9473fb3605980db55ecddf34392a2e832ad35" style= {{color:"#277148", fontWeight:'bold' }}> Json11.</a>
        
      </>
    ),
  },
  {
    title: 'Requirements',
    Svg: require('@site/static/img/requirements.svg').default,
    description: (
      <>
        We offer official support on a voluntary basis for active Ubuntu LTS versions. However, builds
        are available for Windows and MacOS (Intel & Apple Silicon) as well.
      </>
    ),
  }, 
  { 
    title: 'Available in Matlab',
    Svg: require('@site/static/img/computer_matlab.svg').default,
    description: (
      <>
        Test your ideas fast while having convenient visualization tools using the Matlab version. 
      </>
    ),
  },
  {
    title: 'Available in Python',
    Svg: require('@site/static/img/computer_python.svg').default,
    description: (
      <>
        Use Python for easy and computationally efficient 
        (C++ code runs under the hood for fast performance) implementations.
        
      </>
    ),
  },
  {
    title: 'Available in C++11',
    Svg: require('@site/static/img/computer_cpp.svg').default,
    description: (
      <>
        Use the C++11 version for real-time high-performance applications 
        and if you are not afraid of pointers.
      </>
    ),
  }, 

];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>

        
      </div>

    </section>
  );
}
