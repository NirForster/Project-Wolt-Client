// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import {
//   Form,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import { Button } from "@/components/ui/button";

// interface radioGroupFormProps {
//   title: string;
//   options: { optionLabel: string; optionPrice: string }[];
// }

// export default function RadioBoxGroupForm({
//   title,
//   options,
// }: radioGroupFormProps) {
//   console.log(title, options);

//   const optionLabels = options.map((opt) => {
//     return opt.optionLabel;
//   });

//   if (options.length < 0) {
//     const formSchema = z.object({
//       result: z.enum(
//         [optionLabels[0], ...optionLabels]
//         // { required_error: "You must select a method",}
//       ),
//     });
//     const {
//       control,
//       handleSubmit,
//       formState: { errors },
//     } = useForm({
//       resolver: zodResolver(formSchema),
//     });
//     const onSubmit = (data: any) => {
//       console.log("Form Submitted:", data);
//     };
//     return (
//       <Form>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           {/* ✅ Radio Group Field */}
//           <FormField
//             control={control}
//             name="deliveryMethod"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Choose Delivery Method</FormLabel>
//                 <RadioGroup
//                   onValueChange={field.onChange}
//                   value={field.value}
//                   className="flex flex-col space-y-2"
//                 >
//                   <FormItem>
//                     <RadioGroupItem value="standard" id="standard" />
//                     <FormLabel htmlFor="standard">Standard Delivery</FormLabel>
//                   </FormItem>

//                   <FormItem>
//                     <RadioGroupItem value="express" id="express" />
//                     <FormLabel htmlFor="express">Express Delivery</FormLabel>
//                   </FormItem>
//                 </RadioGroup>
//                 <FormMessage>{errors.deliveryMethod?.message}</FormMessage>
//               </FormItem>
//             )}
//           />

//           {/* Submit Button */}
//           <Button type="submit" className="mt-4">
//             Submit
//           </Button>
//         </form>
//       </Form>
//     );
//   }
//   return <></>;
// }
