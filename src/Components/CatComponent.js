import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';

class CatComponent extends Component {
  render() {
    return (
      <>
        <View>
          <Text>Show cat info</Text>
          <Image
            source={{
              uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
            }}
            style={{ width: 200, height: 200 }}
          />
        </View>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1
          }}
          defaultValue="You can type in me"
        />
      </>
    )
  }
}

export default CatComponent;