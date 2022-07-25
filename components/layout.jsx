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
          link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500;700&family=Montserrat:wght@400;700&family=Playfair+Display:ital,wght@0,400;0,700;1,500;1,700&family=Roboto:wght@400;700&display=swap"
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
  padding-top: 60px;
  height: 100vh;
  background: ${({ theme }) => theme.colors.contentBackground};
  display: flex;
  flex-direction: column;
  align-items: center;
`;
