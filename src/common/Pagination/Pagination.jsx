export const Pagination = ({ currentPage, totalPages, setPage }) => {
  // Функция для обработки изменения страницы
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setPage(page);
    }
  };

  // Генерация списка страниц с учетом скрытых страниц через троеточие
  const getPageNumbers = () => {
    let pages = [];

    if (totalPages <= 5) {
      // Если страниц 5 или меньше, показываем все
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Если страниц больше 5, показываем первую, последнюю и соседние
      pages.push(1);

      if (currentPage > 3) pages.push('...');

      for (let i = Math.max(currentPage - 1, 2); i <= Math.min(currentPage + 1, totalPages - 1); i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 2) pages.push('...');

      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="flex justify-center w-full items-center space-x-2 py-4">
      {/* Кнопка предыдущей страницы */}
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 disabled:opacity-50"
      >
        &laquo; Пред
      </button>

      {/* Номера страниц */}
      {getPageNumbers().map((page, index) => (
        <button
          key={index}
          onClick={() => (typeof page === 'number' ? handlePageChange(page) : null)}
          className={`px-4 py-2 rounded-md ${
            typeof page === 'number'
              ? currentPage === page
                ? 'bg-green-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-blue-200'
              : 'text-gray-500'
          }`}
        >
          {page}
        </button>
      ))}

      {/* Кнопка следующей страницы */}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 disabled:opacity-50"
      >
        След &raquo;
      </button>
    </div>
  );
};
