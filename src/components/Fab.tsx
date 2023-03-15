import { View, StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';

const Fab = (props) => {  
  return (
      <FAB
        {...props}
      />
  );
};

Fab.title = 'Fab';

Fab.defaultProps = {
  variant: 'primary',
  icon: "pencil",
  onPress: () => {},
}

export type FABVariant = 'primary' | 'secondary' | 'tertiary' | 'surface';
export type FABSize = 'small' | 'medium' | 'large';
export type FABMode = 'flat' | 'elevated';

export default Fab;
