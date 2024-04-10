import React from 'react';
import { Button } from 'react-native';
import { TextInput } from 'react-native-paper';

const InputField = ({ addTask, task, setTask }) => {
  return (
    <>
      <TextInput
        label="Task"
        value={task}
        onChangeText={setTask}
      />
      <Button  color='#4169E1'onPress={addTask} title="Add Task" />
    </>
  );
};

export default InputField;
