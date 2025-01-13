import { useState } from "react";
import AddLocationStreetPage from "./AddLocationStreetPage";
import AddLocationKindPage from "./AddLocationKindPage";
import AddLocationDetailsPage from "./AddLocationDetailsPage";

const AddNewLocationModal = ({
  onBack,
  onClose,
}: {
  onBack: () => void;
  onClose: () => void;
}) => {
  const [street, setStreet] = useState("");
  const [kind, setKind] = useState("");

  if (street === "")
    return (
      <AddLocationStreetPage
        onBack={onBack}
        onClose={onClose}
        setStreet={setStreet}
      />
    );
  if (kind === "")
    return (
      <AddLocationKindPage
        onBack={setStreet}
        onClose={onClose}
        setKind={setKind}
      />
    );
  else
    return (
      <AddLocationDetailsPage
        onBack={setKind}
        onClose={onClose}
        street={street}
        kind={kind}
      />
    );
};

export default AddNewLocationModal;
