import { Item } from "./FoodItemCard";
import RadioGroupForm from "./item-card-form/RadioGroupForm";
import UpdateItemQuantity from "./UpdateItemQuantity";

import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import FormRadioGroup from "./item-card-form/FormRadioGroup";

interface ItemViewCardProps {
  item: Item;
  setItemModal: React.Dispatch<React.SetStateAction<Item | null>>;
}

let toAdd = 0;

export function ItemViewCard({ item, setItemModal }: ItemViewCardProps) {
  if (!item) {
    return <></>;
  }

  function changeAddedPrice(update: number, isNowIncluded = false) {
    if (isNowIncluded) {
      toAdd -= update;
    } else {
      toAdd += update;
    }
    console.log(toAdd);
  }
  {
    // const forms = item.formData.map((currentForm) => {
    //   return {
    //     name: currentForm.title.split(" ")[0],
    //     label: currentForm.title,
    //     type: currentForm.type,
    //     options: currentForm.options.map(
    //       (opt) => `${opt.optionLabel} (${opt.optionPrice})`
    //     ),
    //   };
    // });
    // // temporal
    // const generateZodSchema = (fields: any) => {
    //   const schemaObj: Record<string, ZodTypeAny> = {};
    //   fields.forEach((field: any) => {
    //     if (field.type === "radio") {
    //       schemaObj[field.name] = field.required
    //         ? z.enum(field.options)
    //         : z.enum(field.options).optional();
    //     } else if (field.type === "checkbox") {
    //       schemaObj[field.name] = z.array(z.string()).optional();
    //     }
    //   });
    //   return z.object(schemaObj);
    // };
    // const formSchema = generateZodSchema(forms);
    // // temporal
    // const form = useForm<z.infer<typeof formSchema>>({
    //   resolver: zodResolver(formSchema),
    //   defaultValues: {
    //     deliveryMethod: "standard",
    //   },
    // });
  }

  // const generateZodSchema = (formData: any[]) => {
  //   const schemaObj: Record<string, any> = {};

  //   formData.forEach((field) => {
  //     if (field.type === "radio") {
  //       // Radio buttons must have exactly one selection
  //       schemaObj[field.title] = z
  //         .string()
  //         .min(1, `${field.title} is required`);
  //     } else if (field.type === "checkbox") {
  //       // Checkboxes allow multiple selections
  //       schemaObj[field.title] = z
  //         .array(z.string())
  //         .min(1, `Select at least one ${field.title}`);
  //     }
  //   });

  //   return z.object(schemaObj);
  // };

  // const formSchema = generateZodSchema(item.formData);

  // const form = useForm({
  //   resolver: zodResolver(formSchema), // Use the generated schema for validation
  //   // defaultValues: item.formData.reduce((acc, form) => {
  //   //   acc[form.title] = form.type === "checkbox" ? [] : "";
  //   //   return acc;
  //   // }, {}),
  // });

  function handleFormSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const formData = new FormData(ev.currentTarget);
    const formObject: Record<string, any> = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });

    console.log("----------------------------------");
    console.log("data is:");
    console.log(formObject);

    // console.log(data);
    console.log("----------------------------------");
    setItemModal(null);
  }

  // console.log(item);
  // console.log("Item formData:", item.formData);
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
                <FormRadioGroup
                  options={currentForm.options}
                  index={index}
                  changeAddedPrice={changeAddedPrice}
                  key={index}
                />
              </div>
            );
          })}
          <hr />

          <div className="sticky bottom-2 z-10 bg-white w-full">
            <UpdateItemQuantity price={item.price + toAdd} toAdd={toAdd} />
          </div>
        </form>
      </div>
    </div>
  );
}

{
  /* 
  
  */
}

{
  /*
<Form {...form}>

   <form onSubmit={form.handleSubmit(handleFormSubmit)}>
     {item.formData.map((currentForm, index) => (
       <FormField
         key={index}
         control={form.control}
         name={`baba${index}`}
         render={({ field }) => (
           <FormItem>
             <FormLabel>{currentForm.title}</FormLabel>
             <FormRadioGroup currentForm={currentForm} field={field} />
             {/* <FormControl>
             {currentForm.type === "radio" ? (
               // Render radio buttons
               <FormRadioGroup
                 currentForm={currentForm}
                 field={field}
               />
             ) : (
               // Render checkboxes
               currentForm.options.map((option, idx) => (
                 <label
                   key={idx}
                   className="flex items-center space-x-2"
                 >
                   <input
                     type="checkbox"
                     value={option.optionLabel}
                     {...field}
                     checked={field.value?.includes(
                       option.optionLabel
                     )}
                     onChange={(e) => {
                       if (e.target.checked) {
                         field.onChange([
                           ...field.value,
                           option.optionLabel,
                         ]);
                       } else {
                         field.onChange(
                           field.value.filter(
                             (val: string) =>
                               val !== option.optionLabel
                           )
                         );
                       }
                     }}
                   />
                   <span>{`${option.optionLabel} (${option.optionPrice}₪)`}</span>
                 </label>
               ))
             )}
           </FormControl> */
  /*
             <FormMessage />
           </FormItem>
         )}
       />
     ))}

     <button>Submit</button>
   </form>
 </Form>
*/
}

{
  /* <Form {...form}>
          <form onSubmit={form.handleSubmit(handleFormSubmit)}>
            {/* {item.formData.map((currentForm, index) => {
              const isRadio = currentForm.type === "radio" || true;
              if (isRadio) {
                // Radio form
                return (
                  <RadioGroupForm
                    key={index}
                    control={control}
                    name={"baba"}
                    label={currentForm.title}
                    options={[
                      { label: "standard", value: "standard" },
                      { label: "express", value: "express" },
                    ]}
                  />
                );
              } else {
                // Checkbox form
                return <></>;
              }
            })} }

              price={item.price}
              // setItemModal={setItemModal}
              // handleFormSubmit={handleFormSubmit}
            />
          </form>
        </Form> */
}
