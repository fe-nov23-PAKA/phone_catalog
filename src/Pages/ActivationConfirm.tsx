import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { activate } from '../api/userApi';

export const ActivationConfirm = () => {
  const { activateId } = useParams();

  useEffect(() => {
    if (activateId) {
      activate(activateId).then().catch();
    }
  }, []);

  return <h1>Congratulations! Your account is active now! Get to shopping!</h1>;
};
