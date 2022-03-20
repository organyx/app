import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import JobList from '../components/jobs/JobList'
import LoadingSpinner from '../components/ui/LoadingSpinner/LoadingSpinner'

const Home: NextPage = () => {
  const [jobs, setJobs] = useState<[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchJobs = async () => {
      const res = await fetch('http://localhost:3002/api/get-jobs')

      if (!res.ok) {
        throw new Error('Something went wrong');
      }
      const data = await res.json()

      setJobs(data)
      setLoading(false)
    }

    try {
      fetchJobs()
    } catch (error) {

      setError(error)
    }
  }, [])
  return <>
    <Head>
      <title>Home of Jobs</title>
      <meta name="description" content="A list of jobs" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    {loading && <LoadingSpinner />}
    {!loading && !error && <JobList jobs={jobs} />}
    {error && <div>{error.message}</div>}
  </>
}

// export const getStaticProps = async () => {
//   const res = await fetch('http://localhost:3002/api/get-jobs')
//   const data = await res.json()

//   return {
//     props: {
//       jobs: data
//     }
//   }
// }

export default Home