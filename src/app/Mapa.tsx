import React, { useEffect, useRef, useState } from "react";
import { View } from "react-native";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
  LocationObject,
  watchPositionAsync,
  LocationAccuracy,
} from "expo-location";
import MapView, { Marker } from "react-native-maps";

export default function Page() {
  const [currentPosition, setCurrentPosition] = useState<LocationObject | null>(
    null
  );
  const mapRef = useRef<MapView>(null);
  async function requestLocationPermissionsAsync() {
    const { granted } = await requestForegroundPermissionsAsync();
    if (granted) {
      const currentPosition = await getCurrentPositionAsync();
      setCurrentPosition(currentPosition);
      console.log("localizacao atual", currentPosition);
    }
  }
  useEffect(() => {
    requestLocationPermissionsAsync();
  }, []);
  useEffect(() => {
    watchPositionAsync(
      {
        accuracy: LocationAccuracy.Highest,
        timeInterval: 1000,
        distanceInterval: 1,
      },
      (response) => {
        // DADOS DA LOCALIZACAO A SER ALTERADO EM REAL TIME
        setCurrentPosition(response);
        mapRef.current?.animateCamera({
          pitch: 70,
          center: response.coords,
        });
      }
    );
  }, []);
  return (
    <View className="flex-1">
      {currentPosition && (
        <MapView
          ref={mapRef}
          className="w-full h-full"
          initialRegion={{
            latitude: currentPosition.coords.latitude,
            longitude: currentPosition.coords.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
        >
          <Marker
            coordinate={{
              latitude: currentPosition.coords.latitude,
              longitude: currentPosition.coords.longitude,
            }}
          />
        </MapView>
      )}
    </View>
  );
}
