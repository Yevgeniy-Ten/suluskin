export const Card = () => {
  return (
    <div
      className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
      <div className="relative">
        <img src="https://via.placeholder.com/400x400" alt="Косметика"
             className="w-full h-64 object-cover"/>
        <div
          className="absolute top-4 left-4 bg-[#ADBFAD] text-white text-sm font-bold px-3 py-1 rounded-full">
          Скидка 10%
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-[#333]">Крем для лица</h3>
        <p className="text-sm text-[#777] mt-2">Увлажняющий крем для всех типов кожи.</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-xl font-bold text-[#ADBFAD]">₸2999</span>
          <a href="#"
             className="bg-[#98a88a] text-white px-4 py-2 rounded-lg shadow-md hover:bg-[#88a77a] transition duration-300">
            Добавить
          </a>
        </div>
      </div>
    </div>
  );
};

