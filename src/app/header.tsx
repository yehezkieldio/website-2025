import Link from "next/link";

export default function Header() {
    return (
        <header className="mb-8 flex items-center justify-between">
            <div>
                <Link href="/" className="font-medium text-black dark:text-white">
                    Yehezkiel Dio Sinolungan
                </Link>
                <p className="text-zinc-600 dark:text-zinc-500">Software Engineer</p>
            </div>
        </header>
    );
}
