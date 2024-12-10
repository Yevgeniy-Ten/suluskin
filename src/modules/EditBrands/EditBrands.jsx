"use client";

import {
  DialogHeader,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription
} from "@/src/common/Dialog";
import {Button} from "@/src/common/Button";

import {useEffect, useState} from "react";
import {service} from "@/src/api/api";
import {toast} from "react-toastify";

export const EditBrands = ({refetch, open, changeOpen, payload = ''}) => {
  const [value, setValue] = useState();
  useEffect(() => {
    setValue(payload?.name)
  }, [payload])
  const submitCategory = async () => {
    await service.createBrand({
      id: payload?.id,
      name: value
    }).then(async () => {
      await refetch()
      changeOpen(false)
      if (payload?.id) return toast.success('Бренд успешно обновлена')
      toast.success('Бренд успешно добавлена')
    })
  }
  return (
    <Dialog open={open} onOpenChange={changeOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Добавить бренд
          </DialogTitle>
          <DialogDescription>
            Добавьте бренд товара
          </DialogDescription>
        </DialogHeader>
        <input type="text"
               value={value}
               onChange={e => {
                 setValue(e.target.value)
               }}
               className={"w-full p-2 border border-gray-300 rounded-md"}
        />
        <Button onClick={submitCategory}>
          Сохранить
        </Button>
      </DialogContent>
    </Dialog>
  );
};

