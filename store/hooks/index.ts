import { useDispatch, useSelector } from "react-redux";
import { storeDispatch, storeState } from "store";

export const useAppDispatch: () => storeDispatch = useDispatch 
export const useAppSelector = useSelector<storeState>
