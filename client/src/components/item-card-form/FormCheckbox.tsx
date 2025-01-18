import { Checkbox } from "@/components/ui/checkbox";
import getNumericPrice from "@/utils/getNumericPrice";
import { useState } from "react";

interface FormCheckboxProps {
  options: {
    optionLabel: string;
    optionPrice: string;
  }[];
  changeAddedPrice: (update: number) => void;
  index: number;
}

export default function FormCheckbox({
  options,
  index,
  changeAddedPrice,
}: FormCheckboxProps) {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  function handleOptionChange(optionLabel: string, optionPrice: string) {
    setSelectedOptions((prev) => {
      const isAlreadySelected = prev.includes(optionLabel);
      const numericPrice = getNumericPrice(optionPrice);

      if (isAlreadySelected) {
        changeAddedPrice(-numericPrice);
        return prev.filter((opt) => opt !== optionLabel);
      } else {
        changeAddedPrice(numericPrice);
        return [...prev, optionLabel];
      }
    });
  }

  return (
    <div>
      {options.map((opt, idx) => (
        <label
          key={idx}
          className="grid grid-cols-[1.5rem_1fr] gap-2 items-center cursor-pointer hover:border-red-500 p-1 rounded-md transition"
        >
          <Checkbox
            checked={selectedOptions.includes(opt.optionLabel)}
            onCheckedChange={() =>
              handleOptionChange(opt.optionLabel, opt.optionPrice)
            }
            className="w-fit hover:border-[#039de0] transition"
            name={`formNumber${index}`} // ✅ Name it for the form
            value={opt.optionLabel} // ✅ Add a value for submission
          />

          <div>
            <p>{opt.optionLabel}</p>
            <p className={`${opt.optionPrice === "Included" ? "hidden" : ""}`}>
              {opt.optionPrice}
            </p>
          </div>
        </label>
      ))}

      {/* Hidden input to store selected values */}
      <input
        className="hidden"
        name={`formNumber${index}`}
        value={selectedOptions.join(" @ ")}
        readOnly
      />
    </div>
  );
}
