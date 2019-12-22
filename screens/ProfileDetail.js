import React from 'react'
import { Image, SafeAreaView, StyleSheet, View } from 'react-native'
import { Divider, Icon, Text } from 'react-native-elements'
import Layout from '../constants/Layout'
import { HomeScreenPics } from '../constants/Pics'
import { randomNo } from '../utils/randomNo'

// const { pic, title, tag } = HomeScreenPics[randomNo(1, HomeScreenPics.length)]

const Social = ({ name }) => (
  <Icon
    name={name}
    type="font-awesome"
    containerStyle={styles.iconContainer}
    size={32}
  />
)

class ProfDetailScreen extends React.Component {

  render() {
    const { navigation } = this.props;
    const pic = navigation.getParam('pic', 'default value')
    const title = navigation.getParam('title', 'default value')
    const tag = navigation.getParam('tag', 'default value')

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={pic} style={styles.image} />
        </View>
        <Text h4 style={styles.name}>
          {title}
        </Text>
        <Text style={styles.desc}>Fashion Designer at Amelia & Co.</Text>
        <Divider style={styles.divider} />
        <Text style={styles.desc}>
          I love to travel. I have a cat named pickles, if he likes you, I
          probably will too.
        </Text>
        <Divider style={styles.divider} />
        <Text style={styles.desc}>性的嗜好</Text>
        <Text style={styles.desc}>
          {tag}
        </Text>
      </SafeAreaView>
    )
  }
}

/*
export default function ProfileScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={pic} style={styles.image} />
      </View>
      <Text h4 style={styles.name}>
        {title}
      </Text>
      <Text style={styles.desc}>Fashion Designer at Amelia & Co.</Text>
      <Divider style={styles.divider} />
      <Text style={styles.desc}>
        I love to travel. I have a cat named pickles, if he likes you, I
        probably will too.
      </Text>
      <Divider style={styles.divider} />
      <Text style={styles.desc}>tag</Text>
      <Text style={styles.desc}>
        {tag}
      </Text>
    </SafeAreaView>
  )
}
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  imageContainer: {
    margin: 20,
  },
  image: {
    width: Layout.window.width - 60,
    height: Layout.window.height / 2 - 60,
    borderRadius: 20,
  },
  name: {
    color: '#5E5E5E',
    alignSelf: 'flex-start',
    marginLeft: 30,
  },
  desc: {
    color: '#5E5E5E',
    alignSelf: 'flex-start',
    marginTop: 5,
    marginHorizontal: 30,
    fontSize: 14,
  },
  divider: {
    backgroundColor: '#C0C0C0',
    width: Layout.window.width - 60,
    margin: 20,
  },
  socialLinks: {
    flex: 1,
    alignItems: 'flex-start',
    flexDirection: 'row',
    width: Layout.window.width,
    marginLeft: 40,
  },
  iconContainer: {
    paddingHorizontal: 8,
    paddingVertical: 15,
  },
})

export default ProfDetailScreen
