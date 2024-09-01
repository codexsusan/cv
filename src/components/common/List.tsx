function List({ children }: { children: string }) {
    return (
        <div className="flex items-start gap-x-2 pt-1 pb-0.5 px-2 rounded-md">
            <p>•</p>
            <p className="">{children}</p>
        </div>
    );
}

export default List;
