import { useState, useCallback } from "react";
import AppStateContext from "../contexts/AppStateContext";

const AppStateProvider = ({ children }) => {
  const [prototypes, setPrototypes] = useState([
    {
      id: "pp-01",
      title: "Kids-story",
      artist: "Thomas Buisson",
      desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital product",
      thumbnail:
        "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/Kids-story_1.mp4",
      price: 10,
      pieUrl: "https://cloud.protopie.io/p/8a6461ad85",
    },
    {
      id: "pp-02",
      title: "mockyapp",
      artist: "Ahmed Amr",
      desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital product",
      thumbnail:
        "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/mockyapp.mp4",
      price: 20,
      pieUrl: "https://cloud.protopie.io/p/27631ac9d5",
    },
    {
      id: "pp-03",
      title: "Kids-story",
      artist: "Thomas Buisson",
      desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital product",
      thumbnail:
        "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/Kids-story_1.mp4",
      price: 10,
      pieUrl: "https://cloud.protopie.io/p/8a6461ad85",
    },
    {
      id: "pp-04",
      title: "mockyapp",
      artist: "Ahmed Amr",
      desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital product",
      thumbnail:
        "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/mockyapp.mp4",
      price: 20,
      pieUrl: "https://cloud.protopie.io/p/27631ac9d5",
    },
    {
      id: "pp-05",
      title: "Kids-story",
      artist: "Thomas Buisson",
      desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital product",
      thumbnail:
        "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/Kids-story_1.mp4",
      price: 10,
      pieUrl: "https://cloud.protopie.io/p/8a6461ad85",
    },
    {
      id: "pp-06",
      title: "mockyapp",
      artist: "Ahmed Amr",
      desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital product",
      thumbnail:
        "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/mockyapp.mp4",
      price: 20,
      pieUrl: "https://cloud.protopie.io/p/27631ac9d5",
    },
  ]);
  const [orders, setOrders] = useState([]);

  //[{id,quantity:1}]

  const addToOrder = useCallback((id) => {
    setOrders((orders) => {
      const finded = orders.find((order) => order.id === id);

      if (finded === undefined) {
        return [...orders, { id, quantity: 1 }];
      } else {
        return orders.map((order) => {
          if (order.id === id) {
            return {
              id,
              quantity: order.quantity + 1,
            };
          } else {
            return order;
          }
        });
      }
    });
  }, []);
  const remove = useCallback((id) => {
    setOrders((orders) => {
      return orders.filter((order) => order.id !== id);
    });
  }, []);
  const removeAll = useCallback(() => {
    setOrders([]);
  }, []);

  return (
    //Context를 이용해 제공해줄 변수, 배열, 함수들
    <AppStateContext.Provider
      value={{
        prototypes,
        orders,
        addToOrder,
        remove,
        removeAll,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

export default AppStateProvider;
