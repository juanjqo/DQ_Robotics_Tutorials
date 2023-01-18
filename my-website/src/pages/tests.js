import React, { useState, useEffect, useDebugValue } from "react";

import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import clsx from 'clsx';
import rehypeRaw from 'rehype-raw'

import ReactMarkdown from "react-markdown";
import ReactDom from 'react-dom'
import remarkGfm from 'remark-gfm'

export default function App() {
  return (
    <div className="App">
      <PageComponent />
    </div>
  );
}

const markdown = `Just a link: https://reactjs.com.`


const PageComponent = () => {
  const [content, setContent] = useState("");
  
  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://raw.githubusercontent.com/dqrobotics/matlab/master/CONTRIBUTING.md"
      );
      const parsed = await response.text();
      setContent(parsed);
      
    })();
  }, []);


  return (

    <Layout> 
    <div className="container">
      <div style={{textAlign: 'left', fontSize: '15px'}}>
      <ReactMarkdown children={content} remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}/>
    </div>
    </div>
    </Layout>
  
  );
};


