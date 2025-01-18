import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useRef } from "react";

interface FormRadioGroupProps {
  options: {
    optionLabel: string;
    optionPrice: string;
  }[];
  changeAddedPrice: (update: number) => void;
  index: number;
}

export default function FormRadioGroup({
  options,
  index,
  changeAddedPrice,
}: FormRadioGroupProps) {
  const prevSelectedOptionRef = useRef<number>(0);

  function getNumericPrice(price: string) {
    if (price === "Included") {
      return 0;
    }
    const sign = price[0] === "+" ? 1 : -1;
    const numericPrice = +price.slice(2);
    return sign * numericPrice;
  }

  function handleOptionChange(ev: React.FormEvent<HTMLDivElement>) {
    const selectedOption = options.find(
      (opt) =>
        `${opt.optionLabel} (${opt.optionPrice})` ===
        (ev.target as HTMLInputElement).value
    );
    const prevValue = prevSelectedOptionRef.current;
    if (selectedOption) {
      const newPrice = getNumericPrice(selectedOption.optionPrice);
      prevSelectedOptionRef.current = newPrice;
      changeAddedPrice(newPrice - prevValue);
    } else {
      prevSelectedOptionRef.current = 0;
    }
  }

  return (
    <>
      <RadioGroup
        name={`formNumber${index}`}
        onChange={(ev) => handleOptionChange(ev)}
      >
        {options.map((opt, idx) => {
          return (
            <label
              key={idx}
              className="grid grid-cols-[1.5rem_1fr] gap-2 items-center cursor-pointer hover:border-red-500 p-1 rounded-md transition"
            >
              <RadioGroupItem
                value={`${opt.optionLabel} (${opt.optionPrice})`}
                className="w-fit hover:border-[#039de0] transition"
              />

              <div>
                <p>{opt.optionLabel}</p>
                <p
                  className={`${
                    opt.optionPrice === "Included" ? "hidden" : ""
                  }`}
                >
                  {opt.optionPrice}
                </p>
              </div>
            </label>
          );
        })}
      </RadioGroup>
    </>
  );
}
