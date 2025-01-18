import { Control, Controller } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface RadioOption {
  label: string;
  value: string;
}

interface RadioGroupFormProps {
  control: Control<any>;
  name: string;
  options: RadioOption[];
  label: string;
}

export default function RadioGroupForm({
  control,
  name,
  options,
  label,
}: RadioGroupFormProps) {
  console.log("hey babababababbababab");

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <RadioGroup
            onValueChange={field.onChange}
            value={field.value}
            className="flex flex-col space-y-2"
          >
            {options.map((option) => (
              <FormItem
                key={option.value}
                className="flex items-center space-x-2"
              >
                <RadioGroupItem value={option.value} id={option.value} />
                <FormLabel htmlFor={option.value}>{option.label}</FormLabel>
              </FormItem>
            ))}
          </RadioGroup>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
