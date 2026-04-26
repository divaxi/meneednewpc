export default function WordLine({ reverse = false }: { reverse?: boolean }) {
    const text = "ME NEED NEW PC • ME NEED NEW PC • ME NEED NEW PC •"

    return (
        <div className="relative w-full overflow-hidden font-trimposter">
            <div className={`overflow-hidden ${reverse ? 'animate-slide-in-top' : 'animate-slide-in-bottom'}`}>
                <div
                    className={`inline-block bg-transparent overflow-hidden ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'
                        }`}
                >
                    <span className="whitespace-nowrap text-sm leading-none font-bold tracking-tight text-background md:text-lg lg:text-2xl">
                        {text}
                        {text}
                        {text}
                        {text}
                        {text}
                    </span>
                </div>
            </div>
        </div>
    )
}
