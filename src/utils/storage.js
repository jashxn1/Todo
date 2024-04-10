import AsyncStorage from '@react-native-async-storage/async-storage';

export const readData = async () => {
  try {
    const userTasks = await AsyncStorage.getItem('tasks');

    if (userTasks !== null) {
      return JSON.parse(userTasks);
    }
  } catch (error) {
    console.log(error);
  }

  return [];
};

export const saveData = async (tasks) => {
  try {
    await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
  } catch (error) {
    console.log(error);
  }
};

export const deleteData = async (index) => {
  try {
    let tasks = await readData();
    tasks.splice(index, 1);
    await saveData(tasks);
  } catch (error) {
    console.log(error);
  }
};
