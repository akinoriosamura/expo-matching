import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Text, Tile } from 'react-native-elements'
import { SafeAreaView, createStackNavigator } from 'react-navigation'
import { TopPicksScreenPics } from '../constants/Pics'


class TopPicksScreen extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <Text h2 h2Style={styles.h2Style}>
            Top Picks
          </Text>
          <Text h4 h4Style={styles.h4Style}>
            Featured profiles of the day, picked just for you
          </Text>
          <View style={styles.grid}>
            {TopPicksScreenPics.map(({ pic, title, tag }, i) => (
              <Tile
                imageSrc={pic}
                activeOpacity={0.9}
                title={title}
                titleStyle={styles.title}
                caption={tag}
                captionStyle={styles.caption}
                featured
                onPress={()=> {
                  this.props.navigation.navigate('Detail', {
                    pic: pic,
                    title: title,
                    tag: tag
                  });
                }}
                key={title}
              />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  h2Style: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000000',
  },
  h4Style: {
    textAlign: 'center',
    color: '#757575',
  },
  grid: {
    marginTop: 20,
    marginBottom: 20,
  },
  title: {
    position: 'absolute',
    left: 10,
    bottom: 50,
    backgroundColor: 'black',
    marginBottom: -2,
    padding: 10,
  },
  caption: {
    position: 'absolute',
    left: 10,
    bottom: 0,
    backgroundColor: 'black',
    marginTop: 10,
    padding: 10,
  },
})

export default TopPicksScreen
