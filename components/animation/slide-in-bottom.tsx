export default function SlideInBottom({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative overflow-hidden">
            <div className="overflow-hidden animate-slide-in-bottom">
                <div className="inline-block">
                    {children}
                </div>
            </div>
        </div>
    )
}