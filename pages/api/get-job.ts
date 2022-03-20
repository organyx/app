import { NextApiRequest, NextApiResponse } from 'next/types';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { jobId } = req.query
    console.log('handler', jobId);
    const response = await fetch(`https://boards-api.greenhouse.io/v1/boards/unity3d/job/${jobId}}`);
    console.log('response', response);
    if (!response.ok) {
        res.status(response.status).end();
    }

    const data = await response.json();

    console.log('data', data);

    res.status(200).json(data);
};

export default handler;
