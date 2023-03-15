import React from "react"
import { Dimensions, Platform, ScrollView, StyleSheet, View } from "react-native";
import { Avatar, Button, Card, Text, useTheme } from "react-native-paper";
import ScreenWrapper from "../../components/ScreenWrapper";

const HomeScreen = () => {
  const { colors } = useTheme();
  return (
    <React.Fragment>
      <View style={{ padding: 15, backgroundColor: colors?.background }}>
        <Text variant="titleLarge">Welcome!!</Text>
        <Text variant="headlineMedium">Peter Shodeinde</Text>
      </View>
    
    <ScrollView
      style={[styles.container, { backgroundColor: colors?.background }]}
      contentContainerStyle={styles.content}>      
    <ScreenWrapper contentContainerStyle={styles.content}>
      <View style={styles.item}>
        <Card style={styles.card} mode={'elevated'}>
          <Card.Title
              left={(props) => <Avatar.Icon {...props} icon="format-paint" />}
              title="Today's orders"
              subtitle="4"
              titleVariant="bodyLarge"
              subtitleVariant="headlineMedium"
            />
          <Card.Actions>
            <Button onPress={() => {}}>View all</Button>
          </Card.Actions>
        </Card>
      </View>
      <View style={styles.item}>
        <Card style={styles.card} mode={'elevated'}>
          <Card.Title
              left={(props) => <Avatar.Icon {...props} icon="wallet" />}
              title="Today's earnings"
              subtitle="€40.00"
              titleVariant="bodyLarge"
              subtitleVariant="headlineMedium"
            />
            <Card.Actions>
            <Button onPress={() => {}}>Show earnings</Button>
          </Card.Actions>
        </Card>
      </View>
      <View style={styles.item}>
        <Card style={styles.card} mode={'elevated'}>
          <Card.Title
              left={(props) => <Avatar.Icon {...props} icon="car" />}
              title="Today's kilometers"
              subtitle="€40.00"
              titleVariant="bodyLarge"
              subtitleVariant="headlineMedium"
            />
        </Card>
      </View>
      <View style={styles.item}>
        <Card style={styles.card} mode={'elevated'}>
          <Card.Title
              left={(props) => <Avatar.Icon {...props} icon="clock" />}
              title="Total time driven"
              subtitle="60:00 mins"
              titleVariant="bodyLarge"
              subtitleVariant="headlineMedium"
            />
        </Card>
      </View>
      </ScreenWrapper>
    </ScrollView>
    </React.Fragment>
  )
} 

HomeScreen.title = 'Home';


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ...Platform.select({
    web: {
      content: {
        // there is no 'grid' type in RN :(
        display: 'grid' as 'none',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gridRowGap: '8px',
        gridColumnGap: '8px',
        padding: 8,
      },
      item: {
        width: '100%',
        height: 300,
      },
    },
    default: {
      content: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 4,
      },
      item: {
        height: Dimensions.get('window').width / 2,
        width: '50%',
        padding: 4,
      },
    },
  }),
  card: {
    margin: 4,
    height: 150
  },  
});

export default HomeScreen;