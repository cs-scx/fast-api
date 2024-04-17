"use client";

import { useState } from "react";

export default function Home() {
    const [input, setInput] = useState<string>("");
    return (
        <main className="h-screen w-screen grainy">
            <div className="flex flex-col gap-6 items-center pt-32 duration-500 animate-in animate fade-in-5 slide-in-from-bottom-2.5">
                <h1 className="text-5xl tracking-tight font-bold">SpeedSearch ⚡</h1>
                <p className="text-zinc-600 text-lg max-w-prose text-center">
                    A high-performance API built with Hono, Next.js and Cloudflare. <br />{" "}
                    Type a query below and get your results in miliseconds.
                </p>
                <div className="max-w-md w-full">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                </div>
            </div>
        </main>
    );
}
