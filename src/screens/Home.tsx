import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Home</Text>
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};  

export default Home;
