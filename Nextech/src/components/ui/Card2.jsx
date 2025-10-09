


export default function Card2({ children, className = "" }) {
  return (
    <div className={`border rounded-lg p-4  shadow-md bg-[#F0F0F0] transition-shadow hover:shadow-lg h-full ${className}`}>
      {children}
    </div>
  );
}