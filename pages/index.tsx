import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next/Tailwind Scaffold</title>
        <meta
          name="description"
          content="Basic Next app scaffold with personal preferences"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex justify-center w-full p-64">
        <h1 className="text-4xl font-bold">Next/Tailwind Scaffold</h1>
      </main>
    </div>
  );
}
