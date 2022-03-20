import Head from 'next/head'
import JobDetail from '../../components/jobs/JobDetail';

type Props = {
    jobData: {
        id: string;
        title: string;
        location: {
            name: string;
        },
        content: any
    };
}

const JobDetailPage = ({ jobData }: Props) => {
    return <>
        <Head>
            <title>{jobData.title}</title>
            <meta name="description" content="Generated by create next app" />
        </Head>
        <JobDetail location={jobData.location} content={jobData.content} title={jobData.title} />
    </>
}

export const getStaticProps = async (context: any) => {
    const jobId = context.params.jobId;

    const res = await fetch(`https://boards-api.greenhouse.io/v1/boards/unity3d/jobs/${jobId}`);
    const data = await res.json();

    return {
        props: {
            jobData: data
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch('https://boards-api.greenhouse.io/v1/boards/unity3d/jobs');
    const data = await res.json();

    const paths = data.jobs.map((job: any) => {
        return {
            params: {
                jobId: `${job.id}`
            }
        }
    });

    return {
        paths,
        fallback: false
    }
}

export default JobDetailPage;