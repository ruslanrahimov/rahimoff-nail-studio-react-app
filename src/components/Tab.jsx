const Tab = ({ onClick, children }) => {
  return (
    <button
      className="bg-platinum-400 hover:bg-platinum-200 transition border border-platinum-800 px-2 py-1 cursor-pointer"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Tab;
