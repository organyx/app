import styles from './JobDetail.module.scss';

type Props = {
    title: string;
    location: {
        name: string;
    };
    content: any;
}

const JobDetail = ({ title, location, content }: Props) => {
    return (
        <section className={styles.detail}>
            <h1>{title}</h1>
            <address>{location.name}</address>
            {/* <div dangerouslySetInnerHTML={{ __html: content }}></div> */}
        </section>
    );
};

export default JobDetail;