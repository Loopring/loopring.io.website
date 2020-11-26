import React, {useEffect} from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import Navigation from '../Wallet_zh/Navigation';
import FooterSection from '../Wallet_zh/FooterSection';
import Container from 'react-bulma-components/lib/components/container';
import './Legal.scss';

const WalletDesignPage = ({isChinese}) => {
  const privacyFile = isChinese ? 'wallet_design_zh.md' : 'wallet_design_en.md';

  const [markdown, updateMarkdown] = React.useState('');

  React.useEffect(function effectFunction() {
    fetch('/markdown/legal/' + privacyFile)
        .then((response) => response.text())
        .then((content) => {
          updateMarkdown(content);
        });
  }, []);

  return (
    <Container className="legal markdown has-text-black">
      <ReactMarkdown children={markdown} />
    </Container>
  );
};

export default WalletDesignPage;
