import { useContext } from "react";
import context from "../context";

//in file , will just have an arow function that returns the context, useful to not have to redeclare things 
//over again

export const useAppContext = () => {
    return useContext(context)
}