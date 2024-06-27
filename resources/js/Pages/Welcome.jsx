import { Link, Head } from "@inertiajs/react";
import CountdownTimer from "@/Components/ppif/countdown/Countdown";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const targetDate = new Date("2024-08-15T00:00:00");
    return (
        <>
            <Head title="PPIF" />
            <div className="absolute min-h-screen w-screen bg-black">
                <div className="h-96 w-96 rounded-full bg-red-500 blur-3xl"></div>
            </div>
            <div className="flex h-screen flex-col items-center justify-center text-white">
                <header className="text-center">
                    <h1 className="mb-8 text-4xl font-bold">PPIF 2024</h1>
                    <CountdownTimer targetDate={targetDate} />
                </header>
            </div>
        </>
    );
}
