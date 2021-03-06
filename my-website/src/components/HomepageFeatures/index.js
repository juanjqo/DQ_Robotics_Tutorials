import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'What is DQ Robotics?',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        DQ Robotics is a standalone open-source (LGPLv3) library for robot modelling and control. 
        It provides dual quaternion algebra and kinematic calculation algorithms.
      </>
    ),
  },
  {
    title: 'Available in Matlab, C++11 and Python',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Test your ideas fast while having convenient visualization tools using the Matlab version. Use Python 
        for easy and computationally efficient (C++ code runs under the hood for fast performance) implementations.
        Use the C++11 version for real-time high-performance applications and if you are not afraid of pointers.
      </>
    ),
  },
  {
    title: 'Requirements',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        We offer official support on a voluntary basis for active Ubuntu LTS versions. However, builds
        are available for Windows and MacOS as well.
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
