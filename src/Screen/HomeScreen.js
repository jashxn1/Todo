import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import InputField from '../Components/inputField';
import Task from '../Components/task';

const HomeScreen = () => {
    const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    readData();
  }, []);

  const readData = async () => {
    try {
      const userTasks = await AsyncStorage.getItem('tasks');

      if (userTasks !== null) {
        setTasks(JSON.parse(userTasks));
      }
    } catch (error) {
      console.log(error);
    }
  };


  const handleAddTask = async () => {
    if (task === '') return;

    const newTasks = [...tasks, task];
    setTasks(newTasks);
    setTask('');

    await AsyncStorage.setItem('tasks', JSON.stringify(newTasks));
  };


  const handleDeleteTask = async (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);

    await AsyncStorage.setItem('tasks', JSON.stringify(newTasks));
  };
  return (
    <View>
      <InputField addTask={handleAddTask} task={task} setTask={setTask} />
      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <Task item={item} deleteTask={() => handleDeleteTask(index)} />
        )}
      />
    </View>
  );
};

export default HomeScreen;
