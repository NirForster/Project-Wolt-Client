import { Item } from "./FoodItemCard";
import UpdateItemQuantity from "./UpdateItemQuantity";

interface ItemViewCardProps {
  item: Item;
  setItemModal: React.Dispatch<React.SetStateAction<Item | null>>;
}

export function ItemViewCard({ item, setItemModal }: ItemViewCardProps) {
  if (!item) {
    return <></>;
  }

  return (
    <div className="rounded-[16px]">
      <img
        src={item.image}
        className="max-h-[292.5px] w-full rounded-t-[16px]"
      />

      <div className="p-3">
        <div className="flex flex-col gap-4 ">
          <p className="font-woltHeader text-3xl">{item.name}</p>
          <p className="text-BlueBackgroundAndText">{item.price}</p>
          <p>{item.description}</p>
          <hr />
        </div>

        <div>
          <hr />
        </div>
        <UpdateItemQuantity price={item.price} setItemModal={setItemModal} />
      </div>
    </div>
  );
}

//       /usr/local/lib/node_modules
//       /usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin:/Library/Apple/usr/bin:/usr/local/share/dotnet:~/.dotnet/tools:/Users/liraz/anaconda3/bin:/Users/liraz/anaconda3/condabin:/opt/homebrew/bin:/opt/homebrew/sbin:/Users/liraz/Library/Application Support/Code/User/globalStorage/github.copilot-chat/debugCommand
