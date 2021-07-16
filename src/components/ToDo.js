import React, {useState} from 'react';
import {
  Text,
  SafeAreaView,
  TextInput,
  TouchableWithoutFeedback,
  FlatList,
} from 'react-native';

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
    return <Text>{item}</Text>;
  };
  return (
    <SafeAreaView>
      <Text> To-Do List</Text>
      <TextInput onChangeText={text => updateTask(text)} value={task} />
      <TouchableWithoutFeedback onPress={handleAdd}>
        <Text> Add </Text>
      </TouchableWithoutFeedback>
      <FlatList
        data={taskList}
        keyExtractor={(item, index) => index}
        renderItem={handleRenderTask}
      />
    </SafeAreaView>
  );
};
export default ToDo;
