import { useState } from 'react';
import useAppViewModel from '../view-models/useAppViewModel';
import { useNavigation } from '@react-navigation/native';
import { screenMap } from '../navigation/screenMap';
import { Alert } from 'react-native';

const useLoginController = () => {
  const navigation = useNavigation();
  const [username, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { addUser } = useAppViewModel();

  // Login User
  const onClickCreate = () => {
    if (!username) {
      Alert.alert('Please enter username');
      return;
    }

    if (!password) {
      Alert.alert('Please enter password');
      return;
    }
    // Save User Info in local Storage
    addUser({
      username,
      password,
    });
    navigation.navigate(screenMap.Home);
  };

  return {
    username,
    setUserName,
    password,
    setPassword,
    onClickCreate,
  };
};

export default useLoginController;
