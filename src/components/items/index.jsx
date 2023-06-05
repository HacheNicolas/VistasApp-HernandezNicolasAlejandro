import React from 'react';
import { View, FlatList } from 'react-native';
import FoodItem from './food';
import { styles } from './styles';

const Items = ({ items, onSelectItem }) => {
  const renderItem = ({ item }) => <FoodItem item={item} onSelectItem={onSelectItem} />;

  const keyExtractor = (item) => item.id;

  return (
    <View style={styles.listContainer}>
      <FlatList
        renderItem={renderItem}
        data={items}
        keyExtractor={keyExtractor}
        alwaysBounceVertical={false}
      />
    </View>
  );
};

export default Items;
