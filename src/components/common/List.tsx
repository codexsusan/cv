function List({ children }: { children: string }) {
    return (
        <div className="flex items-start gap-x-1.5 sm:gap-x-2 pt-1 pb-0.5 px-1.5 sm:px-2 rounded-md text-xs sm:text-sm md:text-base">
            <p>•</p>
            <p className="">{children}</p>
        </div>
    );
}

export default List;
