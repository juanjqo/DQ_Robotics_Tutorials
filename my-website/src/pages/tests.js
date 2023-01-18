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

import RenderGithubMarkdown from '@site/src/components/_RenderGithubMarkdown'

const url = "https://raw.githubusercontent.com/dqrobotics/matlab/master/CONTRIBUTING.md"

export default function App() {
  return (
    RenderGithubMarkdown(url)
  );
}
