import {Tag} from "@/src/common/Tag";

export const CardTags = ({tags}) => {
  return (
    <div className={"flex items-center gap-2 my-2 flex-wrap"}>
      {
        tags.map((subcategory) => {
          return <Tag key={subcategory.id}>
            {subcategory.name}
          </Tag>
        })
      }
    </div>
  );
};

