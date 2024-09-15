import { Html, Head, Main, NextScript } from "next/document";

export const metadata = {
  title: "Hearth",
  description: "Where you find your next home.",
};

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
