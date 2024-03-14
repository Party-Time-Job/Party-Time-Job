import SortButton from '@/features/Sort/SortButton';

interface Props {
  itemList: Notice[];
  updateItemList: (sortedList: Notice[]) => void;
  updateSortCategory: (sortCategory: string) => void;
  handleToggleSort: () => void;
}

const SortButtonList = ({
  itemList,
  updateItemList,
  updateSortCategory,
  handleToggleSort,
}: Props) => {
  return (
    <div className='absolute top-10 z-10 flex flex-col items-start gap-[8px] rounded-[6px] border-[1px] border-solid border-pt-gray30 bg-white py-[12px]'>
      <div className='flex flex-col items-center gap-[8px] self-stretch'>
        <SortButton
          category='마감임박순'
          updateItemList={updateItemList}
          itemList={itemList}
          updateSortCategory={updateSortCategory}
          handleToggleSort={handleToggleSort}
        />
        <hr className='w-[105px]' />
        <SortButton
          category='시급많은순'
          updateItemList={updateItemList}
          itemList={itemList}
          updateSortCategory={updateSortCategory}
          handleToggleSort={handleToggleSort}
        />
        <hr className='w-[105px]' />
        <SortButton
          category='시간적은순'
          updateItemList={updateItemList}
          itemList={itemList}
          updateSortCategory={updateSortCategory}
          handleToggleSort={handleToggleSort}
        />
        <hr className='w-[105px]' />
        <SortButton
          category='가나다순'
          updateItemList={updateItemList}
          itemList={itemList}
          updateSortCategory={updateSortCategory}
          handleToggleSort={handleToggleSort}
        />
      </div>
    </div>
  );
};

export default SortButtonList;
