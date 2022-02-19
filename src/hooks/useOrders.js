import { useContext } from "react";
import AppStateContext from "../contexts/AppStateContext";

export default function useOrders() {
  const { orders } = useContext(AppStateContext);

  //{}를 넣음으로써AppStateContext.Provider의 prototypes를 사용한다고 해준다.
  //usePrototypes를 사용하면 바로 prototypes를 가져올 수 있다.
  return orders;
}
