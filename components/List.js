import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


const List = ({ id, value, handleDelete, strikeItem }) => {
  return (
    <View key={id} style={styles.list}>
      <TouchableOpacity onPress={strikeItem} >
        <Text style={(value.completed) ? styles.line : styles.item}> {value.name}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleDelete} style={styles.delete}>
        <Text style={styles.deleteText}>Delete</Text>
      </TouchableOpacity>

    </View >
  );
}

const styles = StyleSheet.create({
  list: {
    position: 'relative',
    width: 280,
    marginLeft: 35,
    padding: 20,
    paddingRight: 100,
    borderBottomColor: '#ededed'
  },
  item: {
    fontFamily: 'ShadowsIntoLight',
    color: 'black'
  },
  delete: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 3,
    padding: 10,
    marginLeft: 5,
    top: 10,
    bottom: 10,
    right: 1,
  },
  deleteText: {
    color: 'white',
    fontFamily: 'ShadowsIntoLight',
  },
  line: {
    textDecorationLine: 'line-through',
    fontFamily: 'ShadowsIntoLight',
    color: 'grey'
  }

})

export default List;