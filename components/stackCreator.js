import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const StackCreator = ({ component, name }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={name} component={component} />
    </Stack.Navigator>
  );
};

export default StackCreator;
