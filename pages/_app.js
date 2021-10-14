import global from "../src/styles/global";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>
        {global}
      </style>
    </>
  );
}

export default MyApp;
