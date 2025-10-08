export default function Card({ icon, title, description }) {
  const isComponent = typeof icon === "function";

  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition">
      <div className="text-4xl mb-4 flex justify-center">
        {isComponent ? (
          
          <icon className="w-12 h-12 text-[#D44E50]" />
        ) : (
          
          <img src={icon} alt={title} className="w-30 h-30  object-contain" />
        )}
      </div>
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-xl text-gray-600">{description}</p>
    </div>
  );
}
