import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../../store";

export const useTypesSelector: TypedUseSelectorHook<RootState> = useSelector