import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Home</Text>
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
        <View   className="bg-red-500 h-28">
            <Text>Home</Text>
        </View>
    </View>
  );
};  

export default Home;
