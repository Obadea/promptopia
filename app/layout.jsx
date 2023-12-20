import "@styles/globals.css";
import ScrollToTopButton from "@components/scrollToTop";

import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
      <link rel="icon" href="/assets/images/logo.svg" />
    </head>
    <body>
      <Provider>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
          <Nav />
          {children}
        </main>
        <ScrollToTopButton />
      </Provider>
      <footer className="text-center mt-10 mb-5 ">
        <p>
          Copyright © 2024 by{" "}
          <a
            className="underline"
            href="https://twitter.com/obadea0"
            target="_blank"
          >
            Obadea
          </a>
        </p>
      </footer>
    </body>
  </html>
);

export default RootLayout;
