import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {LocaleConfig, Calendar} from 'react-native-calendars';
import dayjs from 'dayjs';
import {FlatList} from 'react-native-gesture-handler';

// eslint-disable-next-line dot-notation
LocaleConfig.locales['kr'] = {
  monthNames: [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ],
  monthNamesShort: [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ],
  dayNames: ['일', '월', '화', '수', '목', '금', '토'],
  dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
};

LocaleConfig.defaultLocale = 'kr';

const dummy_data = [
  {
    id: 1,
    date: '2024-03-19',
    note: '강의 듣는 날',
  },
  {
    id: 2,
    date: '2024-03-20',
    note: '청소하기',
  },
];

const BasicCalendar = () => {
  const [selectedDay, setSelectedDay] = useState('');
  const renderArrow = () => {
    return (
      <View>
        <Text>화살표</Text>
      </View>
    );
  };

  const renderItem = ({item}) => {
    return <View>{selectedDay === item.date && <Text>{item.note}</Text>}</View>;
  };

  return (
    <View style={{flex: 1, marginTop: 100}}>
      <Calendar
        initialDate={dayjs(new Date()).format('YYYY-MM-DD')}
        onDayPress={day => setSelectedDay(day.dateString)}
        markedDates={{
          [selectedDay]: {
            selected: true,
            selectedColor: 'red',
            selectedTextColor: '#000',
            activeOpacity: 0.8,
          },
        }}
        // renderArrow={e => renderArrow(e)}
        // minDate={dayjs(new Date()).format('YYYY-MM-DD')}
      />
      <FlatList data={dummy_data} renderItem={e => renderItem(e)} />
    </View>
  );
};

export default BasicCalendar;
