import type { NextPage } from 'next'
import Head from 'next/head'
import JobList from '../components/jobs/JobList'

const Home: NextPage = ({ jobs }: any) => {
  return <>
    <Head>
      <title>Home of Jobs</title>
      <meta name="description" content="A list of jobs" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <JobList jobs={jobs} />
  </>
}

export const getStaticProps = async () => {
  const res = await fetch('https://boards-api.greenhouse.io/v1/boards/unity3d/jobs')
  const data = await res.json()


  return {
    props: {
      jobs: data.jobs
    }
  }
}

export default Home