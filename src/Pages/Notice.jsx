import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import BasicHeader from '../components/BasicHeader';

const dummy_data = [
  {
    id: 1,
    title: '12월 24일 크리스마스 이벤트 당첨자 안내',
    content: `안녕하세요. 제로입니다.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Doloribus similique, totam cupiditate nobis ut eveniet sint provident deleniti omnis tempore est 
      laborum qui iure adipisci fuga nam sapiente sed aspernatur!
    `,
    created_date: '2023년 12월 24일',
  },
  {
    id: 2,
    title: '12월 25일 당첨자 안내',
    content: `안녕하세요. 제로입니다.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Doloribus similique, totam cupiditate nobis ut eveniet sint provident deleniti omnis tempore est 
      laborum qui iure adipisci fuga nam sapiente sed aspernatur!
    `,
    created_date: '2023년 12월 24일',
  },
];

const Notice = ({navigation}) => {
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('NoticeDetail', {item})}
        style={{
          padding: 16,
          borderBottomWidth: 1,
          borderBottomColor: '#333',
        }}>
        <Text>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <BasicHeader title={'공지사항'} />
      <View style={{flex: 1}}>
        <FlatList
          data={dummy_data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default Notice;
