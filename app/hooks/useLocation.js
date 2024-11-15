import * as Location from "expo-location";
import { useState, useEffect } from "react";

export default useLocation = () => {
  const [location, setLocation] = useState();

  const getLocation = async () => {
    try {
      const { granted } = await Location.getForegroundPermissionsAsync();
      if (!granted) return;
      const {
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync();

      setLocation({ latitude, longitude });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return location;
};
