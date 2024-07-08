import { Link } from "@inertiajs/react";

export default function Navbar() {
    return (
        <nav className="fixed mt-8 flex space-x-16 rounded-xl bg-white bg-opacity-20 px-12 py-4 text-white shadow-[0px_0px_10px_0px_rgba(255,255,255,1)] backdrop-blur-lg">
            <Link>Home</Link>
            <Link>About IF</Link>
            <Link>About PPIF</Link>
            <Link>Timeline</Link>
            <Link>Contact</Link>
        </nav>
    );
}
