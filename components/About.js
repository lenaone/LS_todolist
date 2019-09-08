import React from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';
import MenuButton from './MenuButton';



const About = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MenuButton navigation={props.navigation} />
        <Text style={styles.headerText}>Todo List</Text>
      </View>

      <Text style={styles.aboutTitle}>"About me"</Text>
      <Text style={styles.about}>
        Hi I'm Lena. I'm a Fullstack Software Developer. I'm looking for a good opportunity to find a job.
        From pastry chef to a programmer, I am looking to apply my new skill sets, make an impact, and eventually learn and grow professionally. After a 3-month web development immersive course, I feel charged with positive energy to make coding my routine work. I have a curiosity for new library, framework and languages and want to learn from more experienced engineers. I have the "can do" attitude and am a proactive learner. I would like to be part of companies which promote diversity. I am really eager to become a software engineer and to bring all my newfound knowledge to start my first step in IT.
        </Text>

      <Text style={styles.footer} onPress={() => Linking.openURL('https://www.linkedin.com/in/lena-yeonhwa-seol/')}>
        My LinkedIn Page
      </Text>

    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#db3d44',
    borderBottomWidth: 5,
    borderBottomColor: '#ddd',
    height: 80
  },
  headerText: {
    fontFamily: 'ShadowsIntoLight',
    fontWeight: '500',
    color: 'white',
    marginLeft: 90,
    fontSize: 23,
    padding: 17
  },
  about: {
    flex: 2,
    padding: 30,
    fontSize: 17,
    color: 'black',
    fontFamily: 'ShadowsIntoLight',
    justifyContent: 'center',
    alignItems: 'center'
  },
  aboutTitle: {
    paddingTop: 20,
    left: 30,
    fontSize: 20,
    color: 'black',
    fontFamily: 'ShadowsIntoLight',
    justifyContent: 'center',
    alignItems: 'center'
  },
  footer: {
    left: 30,
    fontSize: 17,
    paddingBottom: 80,
    fontFamily: 'ShadowsIntoLight',
    color: 'blue'
  },
  iconInfo: {
    flexDirection: 'row'
  }
})

export default About;