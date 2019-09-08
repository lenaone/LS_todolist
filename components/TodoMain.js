import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import List from './List';
import MenuButton from './MenuButton';



class TodoMain extends Component {

  state = {
    inputText: '',
    todoArray: []
  }

  render() {
    const { inputText, todoArray } = this.state;

    let listTodo = todoArray.map((item, key) => {
      return <List key={key} id={key} value={item} strikeItem={strikeItem(key)} handleDelete={deleteItem(key)} />
    });

    addTodo = () => {
      if (inputText) {
        todoArray.push({ 'name': inputText, 'completed': false });
        this.setState({
          todoArray,
          inputText: ''
        });
      }
    }

    deleteItem = key => () => {
      todoArray.splice(key, 1);
      this.setState({ todoArray })
    }

    strikeItem = key => () => {

      const copiedList = [...this.state.todoArray]

      copiedList.filter((item, index) => key === index).map((item) => {
        item.completed = !item.completed;
      })

      this.setState({
        todoArray: copiedList
      })

    }

    completedAll = () => {
      const copiedList = [...this.state.todoArray]
      copiedList.map(item => item.completed = true)
      this.setState({
        todoArray: copiedList
      })
    }

    // unCompletedAll = () => {
    //   const copiedList = [...this.state.todoArray]
    //   copiedList.filter(item => item.completed = true && copiedList.length).map(item => item.completed = false)
    //   this.setState({
    //     todoArray: copiedList
    //   })
    // }


    deleteAllList = () => {
      this.setState({ todoArray: [] })
    }

    return (
      <View style={styles.container} >

        <View style={styles.header}>
          <MenuButton navigation={this.props.navigation} />
          <Text style={styles.headerText}>Todo List</Text>
        </View>


        <View style={styles.inputContainer}>
          <TextInput style={styles.textInput}
            placeholder='Enter to-do..'
            blurOnSubmit={false}
            returnKeyType="done"
            onSubmitEditing={() => addTodo()}
            onChangeText={inputText => this.setState({ inputText })}
            value={inputText}
          />
          <TouchableOpacity onPress={() => addTodo()} style={styles.addButton} >
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.scrollContainer} >
          {listTodo}
        </ScrollView>

        <View style={styles.checkContainer}>
          <TouchableOpacity onPress={() => completedAll()} style={styles.completedAll}>
            <Text style={styles.completedText}>Completed All</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => deleteAllList()} style={styles.deleteAll}>
            <Text style={styles.deleteText}>Delete All</Text>
          </TouchableOpacity>
        </View>

      </View >
    );
  }
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
  scrollContainer: {
    flex: 1,
    marginBottom: 20
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: 35,
    marginTop: 20,
    width: 300,
    height: 50
  },
  textInput: {
    height: 40,
    width: 200,
    borderColor: 'white',
    borderWidth: 1,
    borderBottomColor: 'lightgrey',
    fontFamily: 'ShadowsIntoLight'
  },
  addButton: {
    backgroundColor: '#db3d44',
    padding: 10,
    marginLeft: 10,
    borderRadius: 3,
    width: 50,
    height: 40
  },
  addButtonText: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'ShadowsIntoLight',
    textAlign: 'center'
  },
  checkContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  deleteAll: {
    marginBottom: 10,
    backgroundColor: '#db3d44',
    padding: 10,
    marginLeft: 25,
    width: 120,
    height: 40,
    borderRadius: 3
  },
  completedAll: {
    marginBottom: 10,
    backgroundColor: '#db3d44',
    padding: 10,
    width: 120,
    borderRadius: 3,
    height: 40
  },
  deleteText: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'ShadowsIntoLight'
  },
  completedText: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'ShadowsIntoLight'
  }
})

export default TodoMain;