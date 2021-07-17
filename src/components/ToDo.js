import React, {useState} from 'react';
import {
  Text,
  SafeAreaView,
  TextInput,
  TouchableWithoutFeedback,
  FlatList,
  StyleSheet,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  constainer: {
    padding: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 20,
  },
  field: {
    borderWidth: 1,
    borderColor: '#dcdcdc',
    padding: 10,
    fontSize: 15,
    color: '#333',
    borderRadius: 5,
    flex: 1,
    marginRight: 10,
  },
  button: {
    backgroundColor: '#00cc99',
    padding: 5,
    borderRadius: 5,
    justifyContent: 'center',
    width: 50,
  },
  buttonText: {
    color: '#fdfdfd',
    marginLeft: 12,
  },
  item: {
    borderWidth: 1,
    borderColor: '#dcdcdc',
    padding: 10,
    marginTop: 15,
    borderRadius: 3,
  },
  form: {
    flexDirection: 'row',
  },
});

const ToDo = () => {
  const [task, updateTask] = useState('');
  const [taskList, updateTaskList] = useState([]);

  const handleAdd = () => {
    updateTaskList([...taskList, task]);
    updateTask('');
  };

  const handleRenderTask = ({item}) => {
    if (!item) {
      return;
    }
    return <Text style={styles.item}>{item}</Text>;
  };
  return (
    <SafeAreaView>
      <View style={styles.constainer}>
        <Text style={styles.title}> To-Do</Text>
        <View style={styles.form}>
          <TextInput
            style={styles.field}
            autoCapitalize="none"
            autoCompleteType="off"
            autoCorrect={false}
            onChangeText={text => updateTask(text)}
            value={task}
          />
          <TouchableWithoutFeedback onPress={handleAdd}>
            <View style={styles.button}>
              <Text style={styles.buttonText}> + </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <FlatList
          data={taskList}
          keyExtractor={(item, index) => index}
          renderItem={handleRenderTask}
        />
      </View>
    </SafeAreaView>
  );
};
export default ToDo;
