import Link from 'next/link';

import { Category } from '../utils/types';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.VFC<CategoryCardProps> = ({ category }) => {
  return (
    <Link key={category.name} href={'/catalog/' + category.href}>
      <a className="relative flex flex-col p-6 overflow-hidden transition-all bg-black border-2 border-black rounded-sm shadow-lg h-96 group">
        <span aria-hidden="true" className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={category.image?.url} alt="" className="object-cover object-center w-full h-full" />
        </span>
        <span className="absolute inset-0 flex items-end justify-end bg-black bg-opacity-20 hover:bg-opacity-40">
          <span className="w-full px-8 py-2 text-4xl font-bold text-center uppercase bg-black text-primary-green">{category.name}</span>
        </span>
      </a>
    </Link>
  );
};

export default CategoryCard;
