


export default function Card2({ children, className = "" }) {
  return (
    <div className={`border dark:border-gray-700 rounded-lg p-4 shadow-md py-4 bg-[#F0F0F0] dark:bg-card transition-colors duration-300 ${className}`}>
      {children}
    </div>
  );
}