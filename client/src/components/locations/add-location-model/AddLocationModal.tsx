import { useState } from "react";
// import AddLocationStreetPage from "./AddLocationStreetPage";
import AddLocationKindPage from "./AddLocationKindPage";
import AddLocationDetailsPage from "./AddLocationDetailsPage";
import { Details } from "@/types";
// import addLocationToUser from "@/services/api/users/addLocation";
import NewLocationsModal from "./NewLocationsModal";

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
    locationLabel: "Home",
  });

  if (street === "")
    return (
      // <AddLocationStreetPage
      <NewLocationsModal
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
  else details.numberOnDoor === "";
  return (
    <AddLocationDetailsPage
      onBack={setKind}
      onClose={onClose}
      street={street}
      kind={kind}
      setDetails={setDetails}
    />
  );
};

export default AddNewLocationModal;
