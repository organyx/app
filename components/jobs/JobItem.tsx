import { useRouter } from 'next/router';
import Card from '../ui/Card/Card';
import styles from './JobItem.module.scss';

type Props = {
    jobId: string;
    title: string;
    location: {
        name: string;
    }
}

const JobItem = ({ jobId, title, location }: Props) => {
    const router = useRouter();

    const showDetailsHandler = () => {
        router.push(`/${jobId}`);
    };

    return (
        <li className={styles.item}>
            <Card onClick={showDetailsHandler}>
                <div className={styles.content}>
                    <h3>{title}</h3>
                    <address>{location.name}</address>
                </div>
            </Card>
        </li>
    );
}

export default JobItem;