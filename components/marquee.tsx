export default function Marquee() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background overflow-hidden">
            <div className="relative w-full overflow-hidden">
                <div className="animate-marquee flex w-max">
                    {Array.from({ length: 20 }).map((_, i) => (
                        <span key={i} className="text-6xl font-bold text-foreground mx-8 whitespace-nowrap">
                            hello
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}