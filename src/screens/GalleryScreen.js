import React from "react";
import { FlatList } from "react-native";
import ImageCard from "../components/ImageCard";
import { ImagePlaceholder, SafeArea } from "./styles";

const DATA = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const GalleryScreen = ({ navigation }) => {
  return (
    <SafeArea>
      <FlatList
        data={
          // check if odd, then add one to make it even
          DATA.length % 2 === 1 ? [...DATA, 0] : DATA
        }
        renderItem={({ item }) =>
          item ? <ImageCard navigation={navigation} /> : <ImagePlaceholder />
        }
        keyExtractor={(item) => item.toString()}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </SafeArea>
  );
};

export default GalleryScreen;
