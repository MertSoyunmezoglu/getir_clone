import RegisterModal from "components/modals/RegisterModal";
import LoginModal from "components/modals/LoginModal";
import MapsModal from "components/modals/MapsModal";
import AddressModal from "components/modals/AddressModal";

const modals = [
  {
    name: "register",
    element: RegisterModal,
  },
  {
    name: "login",
    data: "data",
    element: LoginModal,
  },
  {
    name: "maps",
    element: MapsModal,
  }, {
    name: "adres",
    data: "data",
    element: AddressModal,
  },
];
export default modals;
