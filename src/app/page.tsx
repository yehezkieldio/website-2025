import Link from "next/link";

export default function Home() {
    return (
        <div className="flex min-h-screen w-full flex-col">
            <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-20">
                <header className="mb-8 flex items-center justify-between">
                    <div>
                        <Link href="/" className="text-[#e0def4] text-lg font-medium">
                            Yehezkiel Dio Sinolungan
                        </Link>
                        <p className="text-[#809f9d]">Software Engineer</p>
                    </div>
                </header>
            </div>
        </div>
    );
}
