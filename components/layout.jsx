import Head from "next/head";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "@styles/globalStyles";
import { theme } from "@styles/theme";
import { NavBar } from "@components/nav-bar";

export const Layout = ({ children }) => {
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
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <NavBar />
          <ContentWrapper>{children}</ContentWrapper>
        </ThemeProvider>
      </main>
    </div>
  );
};

const ContentWrapper = styled.div`
  padding-top: 50px;
  height: 100vh;
  padding: 64px ${({ theme }) => theme.margin.medium};
  background: ${({ theme }) => theme.colors.contentBackground};
  display: flex;
  flex-direction: column;
  align-items: center;
`;
