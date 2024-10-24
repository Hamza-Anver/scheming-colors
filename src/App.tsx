import React, { useState } from 'react';
import './App.css';
import DemoPage from './demopage';
import { Container } from 'react-bootstrap';
import CollapsibleToolbar from './sidebar';

function App() {
  const [cssStylesheet, setCssStylesheet] = useState<string>('');

  // Function to update the CSS (this function will be passed to the child component)
  const updateCssStylesheet = (newCss: string) => {
    setCssStylesheet(newCss);
  };

  return (
    <Container fluid>
      <CollapsibleToolbar cssStylesheet={cssStylesheet} updateCss={updateCssStylesheet} />
      <DemoPage cssStylesheet={cssStylesheet} updateCss={updateCssStylesheet}/>
    </Container>
  );
}

export default App;
