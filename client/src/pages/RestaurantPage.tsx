
import FoodItemCard, { Item } from "@/components/FoodItemCard";
import { ItemViewCard } from "@/components/ItemViewCard";
import api from "@/services/api";
import axios from "axios";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

interface Shop {
  avgDeliveryTime: number;
  categories: string[];
  deliveryFee: number;
  description: string;
  id: string;
  locations: {
    branchName: string;
    address: string;
    _id: string;
    id: string;
  }[];
  menu: Item[];
  name: string;
  phone: string;
  photo: string;
  rate: number;
  reviews: any[];
  tags: string[];
  workingTime: {
    closing: string;
    opening: string;
    day:
      | "Sunday"
      | "Monday"
      | "Tuesday"
      | "Wednesday"
      | "Thursday"
      | "Friday"
      | "Saturday";
    id: string;
    _id: string;
  }[];
  __V: number;
  _id: string;
}

function RestaurantPage() {
  const [someState, setSOmeState] = useState(0);
  const [menu, setMenu] = useState<any>(null);
  const [itemModal, setItemModal] = useState<Item | null>(null);
  const shopID = useParams().id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await api.get(`/shop/${shopID}`);

        setMenu(data.menu);
      } catch (err: any) {
        console.log(err.message);
      }
    };
    fetchData();
  }, []);

  if (menu) {
    return (
      <>
        <div className="bg-white sm:bg-[#FBFBFB] grid sm:grid-cols-1 smd:grid-cols-2 xlg:grid-cols-3 items-stretch justify-stretch">
          {menu.sections.map((section: any) => {
            const sectionTitle = section.sectionTitle;
            return (
              <>
                <div
                  className="col-start-1 -col-end-1 pt-10 sm:pl-[10px]"
                  key={sectionTitle}
                >
                  <span className="text-[28px] font-woltHeader  ">
                    {sectionTitle}
                  </span>
                </div>

                {section.items.map((item: any, index: number) => {
                  return (
                    <button
                      onClick={() => {
                        setItemModal(item);
                      }}
                      className=" gap-y-6 gap-x-4 min-w-full  items-start justify-items-stretch cursor-pointer"
                    >
                      <FoodItemCard item={item as Item} key={item._id} />
                      <hr
                        className={`${
                          index === section.items.length - 1 ? "hidden" : ""
                        } sm:hidden bg-woltColors-bgSurfaceSelected`}
                      />
                    </button>
                  );
                })}
              </>
            );
          })}
        </div>
        {/* item modal start here */}
        <div
          onClick={(ev) => {
            setItemModal(null);
          }}
          className={`${
            itemModal ? "" : "hidden"
          }   h-[calc(100%-24px)] w-full fixed top-0 right-0  flex justify-center items-center bg-[#00000075]`}
        >
          <div
            className=" h-fit w-full 2xs:m-6 2xs:max-w-[520px] bg-white relative rounded-[16px]"
            onClick={(ev) => {
              ev.stopPropagation();
            }}
          >
            <ItemViewCard
              item={itemModal as Item}
              setItemModal={setItemModal}
            />
            <img
              src="/assets/photos/x-img.png"
              className="absolute rounded-full w-10 h-10 top-4 right-4 cursor-pointer"
              onClick={() => {
                setItemModal(null);
              }}
            />
          </div>
        </div>
      </>
    );
  }
}


export default RestaurantPage;

// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { Form, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import { Button } from "@/components/ui/button";

// // 🛠 Define validation schema
// const formSchema = z.object({
//   deliveryMethod: z.enum(["standard", "express"], {
//     required_error: "You must select a delivery method",
//   }),
// });

// export default function MyForm() {
//   const {
//     control,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: zodResolver(formSchema),
//   });

//   const onSubmit = (data: any) => {
//     console.log("Form Submitted:", data);
//   };

//   return (
//     <Form onSubmit={handleSubmit(onSubmit)}>
//       {/* ✅ Radio Group Field */}
//       <FormField
//         control={control}
//         name="deliveryMethod"
//         render={({ field }) => (
//           <FormItem>
//             <FormLabel>Choose Delivery Method</FormLabel>
//             <RadioGroup
//               onValueChange={field.onChange}
//               value={field.value}
//               className="flex flex-col space-y-2"
//             >
//               <FormItem>
//                 <RadioGroupItem value="standard" id="standard" />
//                 <FormLabel htmlFor="standard">Standard Delivery</FormLabel>
//               </FormItem>

//               <FormItem>
//                 <RadioGroupItem value="express" id="express" />
//                 <FormLabel htmlFor="express">Express Delivery</FormLabel>
//               </FormItem>
//             </RadioGroup>
//             <FormMessage>{errors.deliveryMethod?.message}</FormMessage>
//           </FormItem>
//         )}
//       />

//       {/* Submit Button */}
//       <Button type="submit" className="mt-4">Submit</Button>
//     </Form>
//   );
// }
