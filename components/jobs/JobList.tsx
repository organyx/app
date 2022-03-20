import JobItem from './JobItem';
import styles from './JobList.module.scss';

const JobList = ({ jobs }: any) => {
    return (
        <ul className={styles.list}>
            {jobs.map((job: any) => (
                <JobItem
                    key={job.id}
                    jobId={job.id}
                    title={job.title}
                    location={job.location}
                />
            ))}
        </ul>
    );
}

export default JobList;