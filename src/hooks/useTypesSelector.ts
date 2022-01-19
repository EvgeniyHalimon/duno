import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store/store";

export const useTypesSelector: TypedUseSelectorHook<RootState> = useSelector