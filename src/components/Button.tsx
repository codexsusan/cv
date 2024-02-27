function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="hover:bg-white p-1.5 rounded-lg border border-gray-100 hover:border-gray-300">
      {children}
    </button>
  );
}

export default Button;
