export default function Card({ icon, title, description }) {
  const isComponent = typeof icon === "function";

  return (
    <div className="bg-white rounded-lg shadow-md p-4 md:p-6 text-center hover:shadow-xl transition-all duration-300 h-full flex flex-col">
      <div className="text-2xl md:text-4xl mb-3 md:mb-4 flex justify-center flex-shrink-0">
        {isComponent ? (
          <icon className="w-8 h-8 md:w-12 md:h-12 text-[#D44E50]" />
        ) : (
          <img src={icon} alt={title} className="w-20 h-20 md:w-24 md:h-24 lg:w-30 lg:h-30 object-contain" />
        )}
      </div>
      <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2 md:mb-3">{title}</h3>
      <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed flex-grow">{description}</p>
    </div>
  );
}
