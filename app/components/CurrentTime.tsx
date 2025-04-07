'use client';

import { useEffect, useState } from 'react';

export function CurrentTimeFromAPI() {
    const [apiResponse, setApiResponse] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log('fetch start');
        fetch('/api/currentTime')
            .then((res) => res.json())
            .then((data) => {
                console.log('data', data);
                setApiResponse(data.message);
                setLoading(false);
            });
    }, []);

    return (
        <div className="pt-4">
            The message from the API is: <strong>{apiResponse}</strong>
        </div>
    );
}
