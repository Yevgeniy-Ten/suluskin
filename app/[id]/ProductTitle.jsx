'use client';
export const ProductTitle = ({name}) => {
  return (
    <h1
      onClick={e => {
        e.preventDefault()
        e.stopPropagation()
      }}
      className="text-3xl font-bold text-gray-900 select-none"
      dangerouslySetInnerHTML={{__html: name}}
    />
  );
};

