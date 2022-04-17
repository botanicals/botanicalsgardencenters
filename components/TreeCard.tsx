import { Tree } from '../utils/types';

interface TreeCardProps {
  tree: Tree;
}

const TreeCard: React.VFC<TreeCardProps> = ({ tree }) => {
  return (
    <a key={tree.slug} href={'/catalog/trees/' + tree.slug} className="group">
      <div className="shadow-lg">
        <div className="w-full overflow-hidden bg-black border-2 border-black aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={tree.image?.url || 'https://via.placeholder.com/150'} alt={tree.name} className="object-cover object-center w-full h-full group-hover:opacity-75" />
        </div>
        <div className="px-4 py-2 bg-black">
          <span className="text-sm text-gray-400 ">{tree.scientificName}</span>
          <p className="mb-2 text-lg font-medium uppercase text-primary-green">{tree.name}</p>
        </div>
      </div>
    </a>
  );
};

export default TreeCard;
