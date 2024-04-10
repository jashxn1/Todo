import React from 'react';
import { View, Text, FlatList, Button,StyleSheet } from 'react-native';

const Task = ({ item, deleteTask }) => {
  const renderItem = ({ item }) => (
    <View style={styles.todolist}>
      <Text>{item}</Text>
      <Button color='#FF6347' onPress={deleteTask} title="Delete" />
    </View>
  );

  return (
    <FlatList
      data={[item]}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};
const styles = StyleSheet.create({
    todolist: {
     flexDirection:'row',
      justifyContent:'space-between',
       alignItems:'center', 
       paddingVertical:10, 
     borderBottomWidth:2,
      padding: 20,
      width: '100%',
    }
  });
export default Task;
