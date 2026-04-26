export default function SlideInTop({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative overflow-hidden">
            <div className="overflow-hidden animate-slide-in-top">
                <div className="inline-block">
                    {children}
                </div>
            </div>
        </div>
    )
}