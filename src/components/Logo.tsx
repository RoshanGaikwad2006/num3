
const Logo = ({ className = "h-12", color = "text-[hsl(var(--gold))]" }: { className?: string, color?: string }) => {
    return (
        <div className={`flex items-center gap-3 ${className}`}>
            {/* Geometric Symbol */}
            <svg viewBox="0 0 100 100" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 5 L90 85 H10 L50 5Z" stroke="currentColor" strokeWidth="3" className={color} />
                <circle cx="50" cy="55" r="12" stroke="currentColor" strokeWidth="3" className={color} />
                <path d="M50 25 L50 43" stroke="currentColor" strokeWidth="3" className={color} />
                <path d="M50 85 L50 67" stroke="currentColor" strokeWidth="3" className={color} />
                <path d="M30 45 L50 55 L70 45" stroke="currentColor" strokeWidth="2.5" className={color} opacity="0.8" />
            </svg>
            {/* Wordmark */}
            <div className="flex flex-col justify-center">
                <span className={`font-serif font-bold leading-none tracking-tight ${color} text-2xl`}>
                    Numeris
                </span>
                <span className={`text-[0.6rem] uppercase tracking-[0.2em] opacity-70 ${color} font-sans mt-0.5`}>
                    Strategy & Intuition
                </span>
            </div>
        </div>
    );
};

export default Logo;
