import React, { Component } from 'react';
import { View, Text, Image, SafeAreaView, TextInput, StyleSheet, FlatList } from 'react-native';

class FlatListComponent extends Component {
  render() {
    const renderItem = ({ item }) => (
      <View style={styles.item}>
        <Text style={styles.title}>{item.title}</Text>
        <Image style={styles.thumbnail} source={{uri: item.thumb}} />
        <Text style={styles.body}>{item.body}</Text>
      </View>
    );

    const {items} = this.props;

    return (
      <>
          <FlatList
            data={items}
            renderItem={renderItem}
            keyExtractor={(item, index) => item.id.toString()}
          />
      </>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
    marginBottom: 10
  },
  body: {
    fontSize: 12,
    marginTop: 10
  },
  thumbnail: {
    width: 300,
    height: 200
  }
});

export default FlatListComponent;