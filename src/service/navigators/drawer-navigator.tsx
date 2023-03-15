import * as React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import {
  Box,
  Pressable,
  VStack,
  Text,
  HStack,
  Divider,
  Icon,
} from "native-base";
import { TaskListScreen } from "../../screens/task/TaskList";
import HomeScreen from "../../screens/Home/old";

const Drawer = createDrawerNavigator();

const getIcon = (screenName: string) => {
  switch (screenName) {
    case "Home":
      return "email";
    case "Task list":
      return "send";
    case "Favorites":
      return "heart";
    case "Archive":
      return "archive";
    case "Trash":
      return "trash-can";
    case "Spam":
      return "alert-circle";
    default:
      return undefined;
  }
};
type DrawerContentProps = {};
function CustomDrawerContent(props: DrawerContentProps) {
  const { state, navigation } = props;
  return (
    <DrawerContentScrollView {...props}>
      <VStack space="6" my="2" mx="1">
        <Box px="4">
          <Text bold color="gray.700">
            Avatar
          </Text>
          <Text fontSize="14" mt="1" color="gray.500" fontWeight="500">
            petershodeinde4@gmail.com
          </Text>
        </Box>
        <VStack divider={<Divider />} space="4">
          <VStack space="3">
            {state.routeNames.map((name: string, index: number) => (
              <Pressable
                px="5"
                py="3"
                rounded="md"
                key={index}
                bg={
                  index === state.index
                    ? "rgba(6, 182, 212, 0.1)"
                    : "transparent"
                }
                onPress={(event) => {
                  navigation.navigate(name);
                }}
              >
                <HStack space="7" alignItems="center">
                  <Icon
                    color={index === state.index ? "primary.500" : "gray.500"}
                    size="5"
                    as={<MaterialCommunityIcons name={getIcon(name)} />}
                  />
                  <Text
                    fontWeight="500"
                    color={index === state.index ? "primary.500" : "gray.700"}
                  >
                    {name}
                  </Text>
                </HStack>
              </Pressable>
            ))}
          </VStack>
        </VStack>
      </VStack>
    </DrawerContentScrollView>
  );
}

/**
 * Drawers includes
 * 1. Task list
 * 2. Home
 * 3. My wallet
 * 4. Profile
 * 5. Terms & Conditions
 * 6. Invite friend
 * 7. Contact support
 * 8. Settings
 * 9. Logout
 */

function NavigationDrawer() {
  return (
    <Box safeArea flex={1}>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Task list" component={TaskListScreen} />
      </Drawer.Navigator>
    </Box>
  );
}

export default NavigationDrawer;
