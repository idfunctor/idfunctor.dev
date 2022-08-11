// import 'regenerator-runtime/runtime';
import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';
import type { DocumentInitialProps } from 'next/document';
import type { ReactElement } from 'react';
import { Helmet, HelmetData } from 'react-helmet';

const theme = 'light';

// eslint-disable-next-line import/no-default-export
export default class MyDocument extends Document<{
  css: string,
  ids: string[],
  helmet: HelmetData,
}> {
  static async getInitialProps(ctx: import('next/document').DocumentContext): Promise<DocumentInitialProps & { helmet: HelmetData }> {
    const initialProps = await Document.getInitialProps(ctx);
    const page = await ctx.renderPage();
    return { ...initialProps, ...page, helmet: Helmet.renderStatic()  };
  }

  get helmetHtmlAttrComponents() {
    return this.props.helmet.htmlAttributes.toComponent()
  }

  // should render on <body>
  get helmetBodyAttrComponents() {
    return this.props.helmet.bodyAttributes.toComponent()
  }

  // should render on <head>
  get helmetHeadComponents() {
    return Object.keys(this.props.helmet)
      .filter((el) => el !== 'htmlAttributes' && el !== 'bodyAttributes')
      .map((el) => this.props.helmet[el].toComponent())
  }

  render(): ReactElement {
    return (
      <Html {...this.helmetHtmlAttrComponents}>
        <Head>
          {/* <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="theme-color" content="#000" />
          <link rel="preconnect" href="https://fonts.gstatic.com" /> */}
          {/* <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;500;600&display=swap" rel="stylesheet" /> */}
          {/* <link rel="manifest" href="/manifest.json" /> */}
          {/* <link rel="apple-touch-icon" href="/apple-icon.png" /> */}
          {this.helmetHeadComponents}
        </Head>
        <body className={`theme-${theme} font-sans antialiased leading-normal tracking-wider bg-gray-200`} {...this.helmetBodyAttrComponents}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
