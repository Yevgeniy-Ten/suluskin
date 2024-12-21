import {toast} from "react-toastify";

export const CategoryItem = ({setModal, category, refetch,deleteRequest}) => {
  const deleteCategory = async () => {
    await deleteRequest(category.id)
    refetch()
    toast.success('Категория успешно удалена')
  }
  return (
    <li
      onClick={() => setModal(true, category)}
      className={"text-lg font-semibold bg-red-400 px-3 relative py-1.5 text-white  cursor-pointer  transition"}
    >
      {category.name}
      <button
        onClick={(e) => {
          e.stopPropagation()
          deleteCategory()
        }}
        className={"bg-red-700 absolute -top-3 -right-2"}>
        <img src="/icons8-close.svg" className={" w-5"} alt=""/>
      </button>
    </li>
  );
};

