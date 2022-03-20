import { NextApiRequest, NextApiResponse } from 'next/types';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const response = await fetch('https://boards-api.greenhouse.io/v1/boards/unity3d/jobs');

    if (!response.ok) {
        res.status(response.status).end();
    }

    const data = await response.json();

    res.status(200).json(data.jobs);
};

export default handler;
