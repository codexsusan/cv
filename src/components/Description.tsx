function Description({ children }: { children: React.ReactNode }) {
    return (
        <div className=" font-light text-pretty text-base tracking-wider text-neutral-600">
            {children}
        </div>
    );
}

export default Description;