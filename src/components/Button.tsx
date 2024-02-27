function Button({ children }: { children: React.ReactNode }) {
  return (
    <div className="hover:bg-white p-1.5 pt-2 rounded-lg border border-gray-100 hover:border-gray-300 flex justify-center items-center">
      {children}
    </div>
  );
}

export default Button;
