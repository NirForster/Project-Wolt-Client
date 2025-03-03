import UpdateItemQuantity from "../../UpdateItemQuantity";

import { useContext, useRef, useState } from "react";
import { userContext } from "@/providers/userContext";
import api from "@/services/api/api";
import { Item } from "@/types";
import FormRadioGroup from "../item-card-form/FormRadioGroup";
import FormCheckbox from "../item-card-form/FormCheckbox";

interface ItemViewCardProps {
  item: Item;
  shopID: string;
  menuID: string;
  sectionTitle: string;
  onClose: () => void;
}

export function ItemViewCard({
  item,
  shopID,
  menuID,
  sectionTitle,
  onClose,
}: ItemViewCardProps) {
  if (!item) {
    return <></>;
  }

  const { user } = useContext(userContext);

  const itemRef = useRef<{ item: Item; totalPrice: number }>({
    item,
    totalPrice: parseFloat(item.price.slice(1)) || 50,
  });
  const [, forceUpdate] = useState({});
  const [formResponse, setFormResponse] = useState<{
    quantity: number;
    finalPrice: number;
  }>({ quantity: 1, finalPrice: +item.price.slice(1) });

  function getPriceFromFormResult(str: string) {
    const matches = [...str.matchAll(/\(([^)]+)\)/g)];

    // Extracting the parts
    if (matches.length > 0) {
      const insideParentheses = matches.map((match) => match[0]).join(" "); // Keep parentheses
      const lastExtracted = matches[matches.length - 1][1]; // Only last extracted without parentheses
      const outsideParentheses = str
        .replace(matches[matches.length - 1][0], "")
        .trim(); // Remove last (baba)

      console.log("First string:", outsideParentheses); // Output: "my name (is)"
      console.log("Second string:", lastExtracted); // Output: "baba"
    } else {
      console.log("No parentheses found");
    }
  }

  // const context = useContext(userContext);

  // if (!context) {
  //   throw new Error("userContext must be used inside UserProvider");
  // }

  // if (context.user?.locations) {
  //   context.updateUser({
  //     cart: [
  //       ...context.user.cart,

  //     ],
  //   });
  // }

  function changeAddedPrice(update: number) {
    if (item._id === itemRef.current.item._id) {
      itemRef.current.totalPrice += update;
    } else {
      itemRef.current.item = item;
      itemRef.current.totalPrice = +item.price.slice(1) + update;
    }
    forceUpdate({});
  }

  async function handleFormSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    try {
      if (user) {
        const formData = new FormData(ev.currentTarget);
        const formObject: Record<string, any> = {};
        formData.forEach((value, key) => {
          formObject[key] = value;
        });
        console.log(formObject);
        const formNames = Object.keys(formObject);
        const extras: string[] = [];
        formNames.forEach((formName) => {
          const formIndex = +formName.slice(10);
          if (item.formData[formIndex].type === "radio") {
            if (formObject[formName]) {
              return extras.push(formObject[formName]);
            }
          } else {
            const results = formObject[formName].split(" @ ");
            results.forEach((result: string) => {
              if (result) {
                return extras.push(result);
              }
            });
          }
        });
        console.log(extras);
        console.log("quantity is", formResponse.quantity);
        console.log("finalPrice is", formResponse.finalPrice);

        const response = await api.put("/orders/", {
          shopID,
          menuID,
          itemName: item.name,
          itemImg: item.image,
          itemDesc: item.description,
          quantity: formResponse.quantity,
          price: formResponse.finalPrice,
          sectionTitle,
          extras,
        });
        if (response.data.status === "Success") {
          onClose();
        } else {
          alert(response.data.message);
        }
      } else {
        alert(
          "must be logged in to a registered user in order to add stuff to cart"
        );
      }
    } catch (err: any) {
      console.log(err.message);
    }
  }

  return (
    <div className="rounded-[16px] max-h-[calc(100vh-50px)]">
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

        <form onSubmit={(ev) => handleFormSubmit(ev)} className="">
          {item.formData.map((currentForm, index) => {
            return (
              <div className="m-4 flex flex-col gap-2">
                <p className="font-bold">{currentForm.title}</p>
                <p
                  className={`${
                    currentForm.description ? "font-normal text-xs" : "hidden"
                  }`}
                >
                  {currentForm.description}
                </p>
                {currentForm.type === "radio" ? (
                  <FormRadioGroup
                    options={currentForm.options}
                    index={index}
                    changeAddedPrice={changeAddedPrice}
                    key={index}
                  />
                ) : (
                  // <FormRadioGroup
                  <FormCheckbox
                    options={currentForm.options}
                    index={index}
                    changeAddedPrice={changeAddedPrice}
                    key={index}
                  />
                )}
              </div>
            );
          })}
          <hr />

          <div className="sticky bottom-2 z-10 bg-white w-full">
            <UpdateItemQuantity
              totalPrice={itemRef.current.totalPrice}
              setFormResponse={setFormResponse}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
