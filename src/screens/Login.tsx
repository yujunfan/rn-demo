import { View, Text, Button } from "react-native";
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Login</Text>
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};  
export default Login;