import { useState } from "react";
import AddLocationStreetPage from "./AddLocationStreetPage";
import AddLocationKindPage from "./AddLocationKindPage";
import AddLocationDetailsPage from "./AddLocationDetailsPage";
import { Details } from "@/types";

const AddNewLocationModal = ({
  onBack,
  onClose,
}: {
  onBack: () => void;
  onClose: () => void;
}) => {
  const [street, setStreet] = useState("");
  const [kind, setKind] = useState("");
  const [details, setDetails] = useState<Details>({
    kind: "",
    entrance: "",
    numberOnDoor: "",
    locationLabel: "",
  });

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
  if (details.numberOnDoor === "")
    return (
      <AddLocationDetailsPage
        onBack={setKind}
        onClose={onClose}
        street={street}
        kind={kind}
        setDetails={setDetails}
      />
    );
  else onClose();
};

export default AddNewLocationModal;
