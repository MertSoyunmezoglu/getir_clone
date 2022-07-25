import RegisterModal from "components/modals/RegisterModal";
import LoginModal from "components/modals/LoginModal";
import MapsModal from "components/modals/MapsModal";

const modals = [
  

    {
        name:'register',
        element: RegisterModal
    },
    {
        name:'login',
        element: LoginModal
    },
    {
        name:'maps',
        element: MapsModal
    },
]
export default modals;