"use client";

import {
  DialogHeader,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogClose,
  DialogDescription
} from "@/src/common/Dialog";
import {Button} from "@/src/common/Button";
import {
  BtnBold, BtnBulletList, BtnClearFormatting,
  BtnItalic, BtnLink, BtnNumberedList,
  BtnRedo, BtnStrikeThrough, BtnStyles, BtnUnderline,
  BtnUndo, Editor,
  EditorProvider, HtmlButton,
  Separator,
  Toolbar
} from "react-simple-wysiwyg";
import {useEffect, useState} from "react";
import {service} from "@/src/api/api";
import {toast} from "react-toastify";

export const CategoryModal = ({refetch, open, changeOpen, payload = ''}) => {
  const [value, setValue] = useState();
  useEffect(() => {
    setValue(payload?.name)
  }, [payload])
  const submitCategory = async () => {
    await service.createCategory({
      id: payload?.id,
      name: value
    }).then(async () => {
      await refetch()
      changeOpen(false)
      if (payload?.id) return toast.success('Категория успешно обновлена')
      toast.success('Категория успешно добавлена')
    })
  }
  return (
    <Dialog open={open} onOpenChange={changeOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Добавить категорию
          </DialogTitle>
          <DialogDescription>
            Добавьте категорию товара
          </DialogDescription>
        </DialogHeader>
        <EditorProvider>
          <Editor value={value} onChange={e => {
            setValue(e.target.value)
          }}/>
        </EditorProvider>
        <Button onClick={submitCategory}>
          Сохранить
        </Button>
      </DialogContent>
    </Dialog>
  );
};

