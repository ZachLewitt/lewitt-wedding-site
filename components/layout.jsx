import Head from "next/head";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "@styles/globalStyles";
import { theme } from "@styles/theme";
import { NavBar } from "@components/nav-bar";
import { Footer } from "@components/footer";

export const Layout = ({ children, hideFooter }) => {
  return (
    <div>
      <Head>
        <title>Lewitt Wedding</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        
      </Head>

      <main>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <PageContainer>
            <NavBar />
            <ContentWrapper>{children}</ContentWrapper>
            {!hideFooter && <Footer />}
          </PageContainer>
        </ThemeProvider>
      </main>
    </div>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  max-width: 100vw;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  padding-top: 60px;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.contentBackground};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
