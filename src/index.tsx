import * as React from "react";
import { render } from "react-dom";
import QRCode from "react-qr-code";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    height: 100vh;
    background-image: linear-gradient(0deg, #f794a4 0%, #fdd6bd 100%);    
  }
`;

const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled(Center)`
  height: 100vh;
`;

const AppContainer = styled.div`
  font-family: sans-serif;
  text-align: center;

  ::before {
    backdrop-filter: red;
  }
`;

const QrCodeWrapper = styled.div`
  background: white;
  padding: 10px;
  padding-bottom: 5px;
  border-radius: 10px;
  margin-top: 10px;
`;

const App: React.FC = () => {
  return (
    <Container>
      <GlobalStyle />
      <AppContainer>
        <h1>Convert PIX</h1>
        <h2>Convert PIX Copy/Paste to QRCode</h2>
        <QrCodeWrapper>
          <QRCode
            size={100}
            level={"Q"}
            style={{ height: "auto", maxWidth: "100%", width: "200px" }}
            value={""}
            viewBox={`0 0 250 250`}
          />
        </QrCodeWrapper>
      </AppContainer>
    </Container>
  );
};

const rootElement = document.getElementById("root");
render(<App />, rootElement);
