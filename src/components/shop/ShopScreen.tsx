import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { AlignView } from "../common/Views";
import Button from "../common/Button";
import { windowHeight, windowWidth } from "../../helpers/dimensions";

export default function ShopScreen(props: any) {
  const { closeShop, powerUps, storeItems } = props;
  const [tab, setTab] = useState(0);

  return (
    <View style={{ height: windowHeight }}>
      <Text
        style={{
          marginTop: 50,
          textAlign: "center",
          fontWeight: "bold",
          fontSize: 30,
        }}
      >
        Shop
      </Text>
      <AlignView style={{ marginBottom: 20 }}>
        <Button
          isSecondary={tab === 0}
          title="PowerUps"
          onPress={() => setTab(0)}
        />
        <Button
          isSecondary={tab === 1}
          title="Store"
          onPress={() => setTab(1)}
        />
      </AlignView>

      {tab == 0 &&
        powerUps.map((item: any) => {
          const { title, description, image } = item;
          return (
            <AlignView>
              <Image
                style={{
                  height: windowWidth * 0.1,
                  width: windowWidth * 0.1,
                }}
                source={{
                  uri: image,
                }}
              />
              <View>
                <Text>{title}</Text>
                <Text>{description}</Text>
              </View>
            </AlignView>
          );
        })}

      {tab == 1 &&
        storeItems.map((item: any) => {
          const { title, description, image } = item;
          return (
            <AlignView>
              <Image
                style={{
                  height: windowWidth * 0.1,
                  width: windowWidth * 0.1,
                }}
                source={{
                  uri: image,
                }}
              />
              <View>
                <Text>{title}</Text>
                <Text>{description}</Text>
              </View>
            </AlignView>
          );
        })}

      <View style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
        <Button
          buttonStyle={{ marginTop: 200, margin: 3 }}
          title="Close"
          onPress={() => closeShop()}
          isSecondary={true}
        />
      </View>
    </View>
  );
}
