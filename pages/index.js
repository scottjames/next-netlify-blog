import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>computercsi blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my Blog" />
        <p className="description">
          <code>Some day soon...</code>
        </p>
      </main>

      <Footer />
    </div>
  );
}
