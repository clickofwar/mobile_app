import React from "react";
import ShopScreen from "../components/shop/ShopScreen";
import { shopData, close } from "../redux/reducers/shopSlice";
import { cmsShop } from "../redux/reducers/cmsSlice";
import { useAppSelector, useAppDispatch } from "../hooks/hooks";
import ShopAnimate from "../components/shop/ShopAnimate";

export default function ShopContainer() {
  const dispatch = useAppDispatch();
  const _shopData = useAppSelector(shopData);
  const _cmsShop = useAppSelector(cmsShop);

  if (_shopData?.isOpened) {
    return (
      <ShopAnimate
        shopData={_shopData}
        isOpened={_shopData.isOpened}
        closeShop={() => dispatch(close())}
      >
        <ShopScreen
          shopData={_shopData}
          closeShop={() => dispatch(close())}
          powerUps={_cmsShop?.shopDataPowerUps || []}
          storeItems={_cmsShop?.shopDataStore || []}
        />
      </ShopAnimate>
    );
  }
  return null;
}
