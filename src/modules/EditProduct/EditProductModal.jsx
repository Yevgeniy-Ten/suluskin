import {useEffect, useState} from "react";
import {service} from "@/src/api/api";
import {toast} from "react-toastify";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from "@/src/common/Dialog";
import {
  BtnBold, BtnBulletList, BtnClearFormatting, BtnItalic, BtnLink, BtnNumberedList,
  BtnRedo, BtnStrikeThrough, BtnStyles, BtnUnderline,
  BtnUndo,
  Editor,
  EditorProvider, HtmlButton,
  Separator,
  Toolbar
} from "react-simple-wysiwyg";
import {Button} from "@/src/common/Button";

export const EditProductModal = ({
                                   refetch,
                                   brands,
                                   categories,
                                   open,
                                   changeOpen,
                                   subCategories,
                                   payload = null
                                 }) => {
  const [values, setValues] = useState({
    name: '',
    text: '',
    price: "",
    img: '',
  });
  const clearValues = () => {
    setValues({
      name: '',
      text: '',
      price: "",
      img: '',
    })
  }
  useEffect(() => {
    if (payload) {
      setValues({
        ...payload,
        brand_id: payload.brand?.id,
        subcategories: payload.subcategories.map(sub => sub.id)
      })
    } else {
      clearValues()
    }
  }, [payload, open])
  const setValue = (key, value) => {
    if (value !== undefined) {
      return setValues(prev => {
        return {...prev, [key]: value}
      })
    }
    return (e) => {
      setValues({...values, [key]: e.target.value})
    }
  }
  const submitProduct = async () => {
    values.price = +values.price
    if (payload) {
      await service.updateProduct(Object.assign(payload, values)).then(async (res) => {
        if (res.error) {
          return toast.error('Ошибка, Проверьте правильность введенных данных')
        } else {
          if (values.subcategories) {
            await service.addSubCategory({
              product_id: payload.id,
              subcategory_ids: values.subcategories
            })
          }
          await refetch()
          changeOpen(false)
          toast.success('Товар успешно обновлен')
        }
      })
    } else {
      await service.createProduct(Object.assign(values)).then(async (res) => {
        if (res.error) {
          return toast.error('Ошибка, Проверьте правильность введенных данных')
        } else {
          if (res.id) {
            if (values.subcategories) {
              await service.addSubCategory({
                product_id: res.id,
                subcategory_ids: values.subcategories
              })
            }
          }
          await refetch()
          changeOpen(false)
          clearValues()
          toast.success('Товар успешно добавлена')
        }
      })
    }

  }
  return (
    <Dialog open={open} onOpenChange={changeOpen}>
      <DialogContent className={"!max-w-4xl overflow-scroll max-h-full w-full"}>
        <DialogHeader>
          <DialogTitle>
            Добавить товар {payload?.id}
          </DialogTitle>
          <DialogDescription>
            Добавьте товар
          </DialogDescription>
        </DialogHeader>
        <p>
          Категория товара
        </p>
        <select
          className={"w-full p-2 border border-gray-300 rounded-md"}
          value={values.category_id}
          onChange={setValue('category_id')}
        >
          <option value={""}>Выберите категорию</option>
          {
            categories.map(category => {
              return <option key={category.id} value={category.id}>{category.name}</option>
            })
          }
        </select>
        <p>
          Бренд товара
        </p>
        <select
          className={"w-full p-2 border border-gray-300 rounded-md"}
          value={values.brand_id}
          onChange={setValue('brand_id')}
        >
          <option value={""}>Выберите Бренд</option>
          {
            brands.map(category => {
              return <option key={category.id} value={category.id}>{category.name}</option>
            })
          }
        </select>
        <p>
          Подкатегория товара
        </p>
        <select className={"w-full p-2 border border-gray-300 rounded-md"}
                value={values.subcategories}
                multiple
                onChange={(e) => {
                  setValue('subcategories', Array.from(e.target.selectedOptions, option => option.value))
                }}
        >
          {
            subCategories.map(category => {
              return <option key={category.id} value={category.id}>{category.name}</option>
            })
          }
        </select>
        <p>
          Название товара
        </p>
        <EditorProvider>
          <Editor value={values.name}
                  onChange={setValue('name')}
          />
        </EditorProvider>
        <p>
          Описание товара
        </p>
        <EditorProvider>
          <Toolbar>
            <BtnUndo/>
            <BtnRedo/>
            <Separator/>
            <BtnBold/>
            <BtnItalic/>
            <BtnUnderline/>
            <BtnStrikeThrough/>
            <Separator/>
            <BtnNumberedList/>
            <BtnBulletList/>
            <Separator/>
            <BtnLink/>
            <BtnClearFormatting/>
            <HtmlButton/>
            <Separator/>
            <BtnStyles/>
          </Toolbar>
          <Editor value={values.text}
                  onChange={setValue('text')}
          />
        </EditorProvider>
        <p>
          Цена товара
        </p>
        <input type="number"
               value={values.price}
               onChange={setValue('price')}
               className={"w-full p-2 border border-gray-300 rounded-md"}
        />
        <p>
          Ссылка на изображение
        </p>
        <input type="text"
               value={values.img}
               onChange={setValue('img')}
               className={"w-full p-2 border border-gray-300 rounded-md"}
        />
        <p className={"flex gap-3"}>
          <input
            checked={values.enabled}
            onChange={() => {
              setValue('enabled', !values.enabled)
            }}
            type="checkbox"/>
          Отображать товар на главной странице
        </p>
        <Button onClick={submitProduct}>
          Сохранить
        </Button>
      </DialogContent>
    </Dialog>
  );
};
