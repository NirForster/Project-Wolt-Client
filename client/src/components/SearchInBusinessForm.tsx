import Business from "@/services/types/BusinessType";

interface SearchInBusinessFormProps {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  businessName: string;
  handleOnSearchChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchInBusinessForm({
  filter,
  setFilter,
  businessName,
  handleOnSearchChange,
}: SearchInBusinessFormProps) {
  return (
    <form
      onSubmit={(ev) => {
        ev.preventDefault();
      }}
      className="bg-[#DBDBDC] rounded-3xl w-[95%] max-h-full sm:w-[280px] sm:max-w-[280px] sm:min-w-[280px] h-10 flex items-center m-4 p-2 gap-3"
    >
      <img
        src="/assets/photos/black-magnifyingglass.png"
        alt="search"
        className=""
      />
      <input
        value={filter}
        placeholder={`Search in ${businessName}`}
        className="bg-[#DBDBDC] text-black flex-1"
        onChange={(ev) => handleOnSearchChange(ev)}
      />
      <button
        type="reset"
        onClick={() => {
          setFilter("");
        }}
        className={`${filter === "" ? "hidden" : "cursor-pointer"} `}
      >
        <img src="/assets/photos/x-circle-fill.png" alt="x" className="" />
      </button>
    </form>
  );
}
