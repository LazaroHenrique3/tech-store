import Image from "next/image";

import { Category } from "@prisma/client";

interface CategoryItemProps {
  category: Category;
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <div className="flex flex-col">
      <div className="bg-category-item-gradient flex h-[150px] w-full rounded-tl-lg rounded-tr-lg items-center justify-center">
        <Image 
            src={category.imageUrl}
            alt={category.name}
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto max-h-[70%] w-auto max-w-[80%]"
            style={{
                objectFit: "contain"
            }}
        />
      </div>

      <div className="bg-accent py-3 rounded-br-lg rounded-bl-lg">
        <p className="text-center text-sm font-semibold">{category.name}</p>
      </div>
    </div>
  );
};

export default CategoryItem;
