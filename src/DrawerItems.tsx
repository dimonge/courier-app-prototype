import * as React from 'react';
import { StyleSheet } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import {
  Drawer,
  useTheme,
} from 'react-native-paper';

type Props = {
  toggleTheme: () => void;
  toggleRTL: () => void;
  toggleThemeVersion: () => void;
  toggleCollapsed: () => void;
  collapsed: boolean;
  isRTL: boolean;
  isDarkTheme: boolean;
};

const DrawerItemsData = [
  {
    label: 'Home',
    icon: 'home',
    key: 0,
  },
  {
    label: 'My wallet',
    icon: 'inbox',
    key: 1,    
  },
  { label: 'History', icon: 'history', key: 2 },
  { label: 'Notifications', icon: 'bell', key: 3 },
  {
    label: 'Settings',
    icon: 'cog',
    key: 4,
  },
  {
    label: 'Logout',
    icon: 'logout',
    key: 5,
  },
];

const DrawerItems = () => {
  const [drawerItemIndex, setDrawerItemIndex] = React.useState<number>(0);
  const _setDrawerItem = (index: number) => setDrawerItemIndex(index);

  const { colors } = useTheme();


 
  return (
    <DrawerContentScrollView
      alwaysBounceVertical={false}
      style={[
        styles.drawerContent,
        {
          backgroundColor: colors.surface,
        },
      ]}
    >    
      <Drawer.Section title="Peter Shodeinde">
        {DrawerItemsData.map((props, index) => (
          <Drawer.Item
            {...props}
            key={props.key}
            active={drawerItemIndex === index}
            onPress={() => _setDrawerItem(index)}
          />
        ))}
      </Drawer.Section>      
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

export default DrawerItems;
