import Head from "next/head";

export default function Home(props) {
  return <h1>index</h1>;
}

export async function getStaticProps() {
  const response = await fetch("http://localhost:3333/episodes");
  const data = await response.json();
  console.log(data);

  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8,
  };
}
