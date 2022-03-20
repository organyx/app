import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'
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
  return {
    props: {
      jobs: [
        {
          id: '1',
          title: 'Software Engineer',
          location: {
            name: 'San Francisco, CA'
          },
          content: 'asd'
        },
        {
          id: '2',
          title: 'Software Engineer',
          location: {
            name: 'San Francisco, CA'
          },
          content: 'asd'
        },
        {
          id: '3',
          title: 'Software Engineer',
          location: {
            name: 'San Francisco, CA'
          },
          content: 'asd'
        }
      ]
    }
  }
}

export default Home