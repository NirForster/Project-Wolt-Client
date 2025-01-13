import { useState } from "react";
import AddLocationStreetPage from "./AddLocationStreetPage";
import AddLocationKindPage from "./AddLocationKindPage";
import AddLocationDetailsPage from "./AddLocationDetailsPage";

const AddNewLocationModal = ({ onBack }: { onBack: () => void }) => {
  const [street, setStreet] = useState("");
  const [kind, setKind] = useState("");

  if (street === "")
    return <AddLocationStreetPage onBack={onBack} setStreet={setStreet} />;
  if (kind === "") return <AddLocationKindPage setKind={setKind} />;
  else return <AddLocationDetailsPage />;
};

export default AddNewLocationModal;
