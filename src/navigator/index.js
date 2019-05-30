import { createStackNavigator, createAppContainer } from 'react-navigation'
import Home from '../Home'

const HomeStack = createStackNavigator(
  {
    home: Home,
  },
  {
    defaultNavigationOptions: {
      header: null,
    },
    navigationOptions: {
      header: null,
    },
  }
)

export default createAppContainer(HomeStack)
