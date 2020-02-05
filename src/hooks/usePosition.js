import { useState, useEffect } from 'react';

export const usePosition = () => {
  const [position, setPosition] = useState({});
  const [error, setError] = useState(null);

  const onChange = ({ coords }) => {
    setPosition({
      latitude: coords.latitude,
      longitude: coords.longitude,
    });
  };

  const onError = (error) => {
    setError(error.message);
  };

  useEffect(() => {
    const { geolocation } = navigator;

    if (!geolocation) {
      setError('Geolocation is not supported');
      return;
    }

    const watcher = geolocation.watchPosition(onChange, onError);

    return () => geolocation.clearWatch(watcher);
  }, []);

  return { ...position, error };
};
