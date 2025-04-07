import Image from 'next/image';
import { connection } from 'next/server';

export default async function Home() {
    const timeOnServer = new Date().toLocaleTimeString('en-US');
    await connection();

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            Time on the server {timeOnServer}
        </main>
    );
}
