import { useContext } from "react";
import { DataContext } from "../Contexts/DataContext";
import Create from "./Create";

export default function Modals() {

const { create } = useContext(DataContext);


    if (create) {
        return <Create />
    }


    return null;



}