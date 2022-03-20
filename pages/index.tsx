import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return <>
    <Head>
      <title>Home of Jobs</title>
      <meta name="description" content="A list of jobs" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    Job List
  </>
}

export default Home