import React, {useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import fonts from '../styles/fonts';
import {API} from '../apis';
import {getAppVersion} from '../apis/basic';
import {getMyFriendList, getMyInfo} from '../apis/user';

const searchIcon = require('../assets/icons/search.png');
const addIcon = require('../assets/icons/add.png');
const alertIcon = require('../assets/icons/alert.png');
const settingIcon = require('../assets/icons/setting.png');
const myProfile = require('../assets/images/myProfile.png');
const rightArrow = require('../assets/icons/rightArrow.png');

const dummy_data = [
  {
    id: 1,
    name: '이민구',
    profileImg: require('../assets/images/dummyProfile.png'),
    message: '야옹~',
  },
  {
    id: 2,
    name: '정태영',
    profileImg: require('../assets/images/dummyProfile1.png'),
    message: '대구에서 살고있는 흑인',
  },
  {
    id: 3,
    name: '박찬웅',
    profileImg: require('../assets/images/dummyProfile2.png'),
    message: '연대보다 고대',
  },
  {
    id: 4,
    name: '김종훈',
    profileImg: require('../assets/images/dummyProfile3.png'),
    message: '돼지임',
  },
  {
    id: 5,
    name: '강봉명',
    profileImg: require('../assets/images/dummyProfile4.png'),
    message: '우히히힣',
  },
  {
    id: 6,
    name: '천재희',
    profileImg: require('../assets/images/dummyProfile5.png'),
    message: '노가다탈출',
  },
  {
    id: 7,
    name: '천재희',
    profileImg: require('../assets/images/dummyProfile5.png'),
    message: '노가다탈출',
  },
  {
    id: 8,
    name: '천재희',
    profileImg: require('../assets/images/dummyProfile5.png'),
    message: '노가다탈출',
  },
  {
    id: 9,
    name: '천재희',
    profileImg: require('../assets/images/dummyProfile5.png'),
    message: '노가다탈출',
  },
  {
    id: 10,
    name: '천재희',
    profileImg: require('../assets/images/dummyProfile5.png'),
    message: '노가다탈출',
  },
  {
    id: 11,
    name: '천재희',
    profileImg: require('../assets/images/dummyProfile5.png'),
    message: '노가다탈출',
  },
  {
    id: 12,
    name: '천재희',
    profileImg: require('../assets/images/dummyProfile5.png'),
    message: '노가다탈출',
  },
];

const Home = ({navigation}) => {
  const [myInfo, setMyInfo] = useState([]);
  const [friendList, setFriendList] = useState([]);
  const [friendNumber, setFriendNumber] = useState();

  //api는 따로 빼는 것이 좋음
  useEffect(() => {
    getAppVersion();
    async function getMyInfoApi() {
      const res = await getMyInfo();
      setMyInfo(res.data);
      console.log(res);
    }
    getMyInfoApi();
  });

  // myInfo에 연결된 친구 목록
  // useEffect(() => {
  //   getMyFriendApi(myInfo.userId);
  // }, [myInfo?.userId]);

  const getMyFriendApi = async () => {
    const res = await getMyFriendList(myInfo?.userId);
    console.log({res});
    setFriendList(res.data.lists);
    setFriendNumber(res.data.number);
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Chat', {params: item})}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 8,
          marginBottom: 16,
        }}>
        <Image source={item.profileImg} style={{width: 40, height: 40}} />
        <View style={{gap: 4}}>
          <Text style={{fontSize: 14, color: '#333'}}>{item.name}</Text>
          <Text style={{fontSize: 13, color: '#828282'}}>{item.message}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderListHeader = () => {
    return (
      <View
        style={{
          marginVertical: 16,
          flexDirection: 'row',
          alignContent: 'center',
        }}>
        <Text style={{fontWeight: '400', color: '#828282'}}>친구 </Text>
        <Text style={{fontSize: 14, color: '#4F4F4F'}}>
          {dummy_data.length}명
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <View style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: 'auto',
            gap: 8,
            marginBottom: 16,
            marginRight: 16,
          }}>
          <TouchableOpacity>
            <Image source={searchIcon} style={{width: 32, height: 32}} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={addIcon} style={{width: 32, height: 32}} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={alertIcon} style={{width: 32, height: 32}} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={settingIcon} style={{width: 32, height: 32}} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 16,
            marginHorizontal: 16,
          }}>
          <View style={{gap: 2}}>
            <Text
              style={{
                fontSize: 18,
                color: '#333',
                fontFamily: fonts.PRETENDARD[600],
              }}>
              {/* {myInfo?.name} */}
              정지민
            </Text>
            <Text style={{fontWeight: '500', fontSize: 14, color: '#828282'}}>
              {/* {myInfo?.introduce} */}
              D-30
            </Text>
          </View>
          <Image
            // source={{uri: myInfo?.profileImg}}
            source={myProfile}
            style={{width: 56, height: 56}}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTopWidth: 1,
            borderTopColor: '#F2F2F2',
            paddingHorizontal: 16,
            borderBottomWidth: 1,
            borderBottomColor: '#F2F2F2',
            paddingVertical: 16,
            gap: 4,
          }}>
          <View style={{maxWidth: 321, gap: 4}}>
            <Text style={{fontSize: 16, color: '#000'}}>추천친구</Text>
            <Text
              style={{fontSize: 14, fontWeight: '400', color: '#828282'}}
              numberOfLines={1}>
              엘비스프레슬리, 요아소비, 요네즈켄시, 박보영, 크레용신짱구
            </Text>
          </View>
          <TouchableOpacity>
            <Image source={rightArrow} style={{width: 32, height: 32}} />
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, marginHorizontal: 16}}>
          <FlatList
            data={dummy_data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            ListHeaderComponent={renderListHeader}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
