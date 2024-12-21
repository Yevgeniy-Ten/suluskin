'use client'

import {useEffect, useState} from "react";
import {service} from "@/src/api/api";
import {Button} from "@/src/common/Button";
import {CategoryModal} from "@/src/modules/EditCategory/CategoryModal";
import {useModal} from "@/src/common/hooks/useModal";
import {CategoryItem} from "@/app/adminsuluskinkzkama/CategoryItem";
import {toast} from "react-toastify";
import {EditProductModal} from "@/src/modules/EditProduct/EditProductModal";
import {EditSubCategoryModal} from "@/src/modules/EditSubCategory/EditSubCategoryModal";
import {EditBrands} from "@/src/modules/EditBrands/EditBrands";

const AdminPage = () => {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [subCategories, setSubCategories] = useState([])
  const [brands, setBrands] = useState([])
  const [categoryFilter, setCategoryFilter] = useState(null)
  const categoryModal = useModal(false)
  const productsModal = useModal(false)
  const subCModal = useModal(false)
  const brandModal = useModal(false)
  const fetchCategories = () => {
    service.getAllCategories().then(res => {
      setCategories(res)
    })
  }
  const fetchBrands = () => {
    service.getAllBrands().then(res => {
      setBrands(res)
    })
  }
  const fetchSubCategories = () => {
    service.getAllSubCategories().then(res => {
      setSubCategories(res)
    })
  }
  const fetchProducts = () => {
    service.getAllProducts(categoryFilter).then(res => {
      setProducts(res)
    })
  }
  const deleteProduct = async (id) => {
    await service.deleteProduct(id)
    setTimeout(() => {
      fetchProducts()
      toast.success("Товар удален")
    }, 1000)
  }
  useEffect(() => {
    fetchCategories()
    fetchSubCategories()
    fetchBrands()
  }, []);
  useEffect(() => {
    fetchProducts()
  }, [categoryFilter]);
  return <div className={"container mx-auto"}>
    <div className={"flex gap-3"}>
      <Button
        onClick={() => productsModal.setModal(true)}
      >
        Добавить товар
      </Button>
      <Button
        onClick={() => categoryModal.setModal(true)}
      >
        Добавить категорию
      </Button>
      <Button
        onClick={() => subCModal.setModal(true)}
      >
        Добавить подкатегорию
      </Button>
      <Button
        onClick={() => brandModal.setModal(true)}
      >
        Добавить бренд
      </Button>
    </div>
    <div className={"my-10"}>
      <div className={"flex items-center gap-3 mb-5"}>
        <h3 className={"text-xl font-medium"}>Категории</h3>
        <select
          onChange={(e) => {
            setCategoryFilter(e.target.value)
          }}
          className={"border border-gray-300 rounded-md p-2 ml-3"}>
          <option value={null}>Все</option>
          {
            categories.map((category) => {
              return <option key={category.id} value={category.id}>{category.name}</option>
            })
          }
        </select>
      </div>
      <ul className={"flex flex-wrap gap-5 mt-3"}>
        {
          categories.map((category) => {
            return <CategoryItem
              deleteRequest={service.deleteCategory}
              refetch={fetchCategories} key={category.id} category={category}
              setModal={brandModal.setModal}/>
          })
        }
      </ul>
    </div>
    <div className={"my-10"}>
      <h3 className={"text-xl font-medium"}>Бренды</h3>
      <ul className={"flex flex-wrap gap-5 mt-3"}>
        {
          (brands || []).map((category) => {
            return <CategoryItem
              deleteRequest={service.deleteBrand}
              refetch={fetchBrands} key={category.id} category={category}
              setModal={brandModal.setModal}/>
          })
        }
      </ul>
    </div>
    <div className={"my-10"}>
      <h3 className={"text-xl font-medium"}>Подкатегории</h3>
      <ul className={"flex flex-wrap gap-5 mt-3"}>
        {
          (subCategories || []).map((category) => {
            return <CategoryItem
              deleteRequest={service.deleteSubCategory}
              refetch={fetchSubCategories} key={category.id} category={category}
              setModal={subCModal.setModal}/>
          })
        }
      </ul>
    </div>
    <div className={"flex flex-wrap gap-6"}>

      {
        (products || []).map((product, index) => {
          return <div
            key={product.id}
            className="w-3/12 bg-white border relative rounded-lg shadow-md">
            <button
              onClick={(e) => {
                e.preventDefault()
                deleteProduct(product.id)
              }}
              className={"bg-red-700 absolute -top-3 -right-2"}>
              <img src="/icons8-close.svg" className={" w-5"} alt=""/>
            </button>
            <img
              src={product.img}
              alt=""
              className="w-full h-48 object-contain"
            />

            <div className="p-4">
              <h2
                dangerouslySetInnerHTML={{__html: product.name}}
                className="text-lg font-semibold text-gray-800">
              </h2>
              Бренд: {product.brand?.name}
              <p className="text-xl font-bold text-blue-600 mt-2">{product.price} тг</p>

              <button
                onClick={() => productsModal.setModal(true, product)}
                className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
              >
                Редактировать
              </button>
            </div>
          </div>
        })
      }
    </div>
    <CategoryModal
      refetch={fetchCategories}
      payload={categoryModal.payload} changeOpen={categoryModal.setModal}
      open={categoryModal.isOpen}/>
    <EditSubCategoryModal
      refetch={fetchSubCategories}
      payload={subCModal.payload} changeOpen={subCModal.setModal}
      open={subCModal.isOpen}/> <EditBrands
    refetch={fetchBrands}
    payload={brandModal.payload} changeOpen={brandModal.setModal}
    open={brandModal.isOpen}/>
    <EditProductModal
      categories={categories}
      brands={brands}
      subCategories={subCategories}
      refetch={fetchProducts}
      payload={productsModal.payload} changeOpen={productsModal.setModal}
      open={productsModal.isOpen}/>

  </div>
}
export default AdminPage
