import store from "store";
import {closeModal} from "store/modal";

export const modalClose = () => {
    store.dispatch(closeModal());
}