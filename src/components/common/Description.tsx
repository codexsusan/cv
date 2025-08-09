function Description({ children }: { children: React.ReactNode }) {
    return (
        <div className="text-xs sm:text-sm md:text-base">
            {children}
        </div>
    );
}

export default Description;