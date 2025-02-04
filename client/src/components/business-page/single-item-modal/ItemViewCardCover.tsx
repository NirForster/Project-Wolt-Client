import { Item } from "@/services/types/MenuType";
import { ItemViewCard } from "./ItemViewCard";
import Xbtn from "@/components/Xbtn";

interface ItemViewCardCoverProps {
  onClose: () => void;
  item: Item;
  shopID: string;
  menuID: string;
  sectionTitle: string;
}

export default function ItemViewCardCover({
  onClose,
  item,
  shopID,
  menuID,
  sectionTitle,
}: ItemViewCardCoverProps) {
  return (
    <div
      onClick={onClose}
      className={`z-30  h-[calc(100%-24px)] w-full fixed top-0 right-0  flex justify-center items-center bg-[#00000075] cursor-pointer`}
    >
      <div
        className="h-fit max-h-full w-full 2xs:m-6 2xs:max-w-[520px] bg-white relative rounded-[16px] overflow-y-auto cursor-default"
        onClick={(ev) => {
          ev.stopPropagation();
        }}
      >
        <ItemViewCard
          item={item}
          onClose={onClose}
          shopID={shopID}
          menuID={menuID}
          sectionTitle={sectionTitle}
        />
        <Xbtn onClose={onClose} />
      </div>
    </div>
  );
}
