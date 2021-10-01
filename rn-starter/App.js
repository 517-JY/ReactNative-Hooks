import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";
import ListScreenExercise from "./src/screens/ListScreenExercise";
import ImageScreen from "./src/screens/ImageScreen";
import ImageScreenExercise from "./src/screens/ImageScreenExercise";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    // add ComponentsScreen as another possible option for StackNavigator
    Components: ComponentsScreen,
    List: ListScreen,
    ListE: ListScreenExercise,
    Image: ImageScreen,
    ImageE: ImageScreenExercise,
  },
  {
    // The first component it should display
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
