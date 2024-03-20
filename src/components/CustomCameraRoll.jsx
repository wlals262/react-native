import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import BasicHeader from './BasicHeader';
import {PermissionsAndroid, Platform} from 'react-native';
import {CameraRoll} from '@react-native-camera-roll/camera-roll';

const {width} = Dimensions.get('window');

//안드로이드 앨범 권한
async function requestStoragePermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      {
        title: '저장소 권한 요청',
        message: '앱에서 사진을 사용하려면 저장소 권한이 필요합니다.',
        buttonNeutral: '나중에 다시 묻기',
        buttonNegative: '거부',
        buttonPositive: '승인',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('저장소 권한이 부여되었습니다.');
      return true;
    } else {
      console.log('저장소 권한이 거부되었습니다.');
      return false;
    }
  } catch (err) {
    console.warn(err);
    return false;
  }
}

// 앱 실행 시 권한을 요청할 때 호출할 함수
async function requestAndCheckStoragePermission() {
  const hasPermission = await requestStoragePermission();
  if (!hasPermission) {
    // 사용자가 권한을 거부한 경우
    if (Platform.OS === 'android') {
      // 안드로이드에서 설정으로 이동
      // Linking.openSettings();
      console.log('권한이 거부되었습니다.');
    }
  } else {
    console.log('권한이 부여되었습니다.');
  }
}

const CustomCameraRoll = ({route, navigation}) => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState();

  const imageWidth = width / 4 - 1;

  const FetchImages = async () => {
    try {
      const {edges} = await CameraRoll.getPhotos({
        first: 100, // 가져올 사진의 개수
        assetType: 'Photos', // 가져올 유형 (사진)
      });
      console.log(edges);
      setImages(edges.map(e => e.node.image));
    } catch (error) {
      console.error(error);
    }
  };

  // 컴포넌트가 마운트될 때 권한을 요청하려면 useEffect를 사용하여 호출
  useEffect(() => {
    // requestAndCheckStoragePermission();

    // 카메라 컴포넌트 실행시 이미지 로드 실시
    FetchImages();
  }, []);

  const selectImage = item => {
    setSelectedImage(item);
    route.params.onSelect(item);
    navigation.goBack('ChatScreen');
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => selectImage(item)}
        style={{borderWidth: 0.5, borderColor: '#FFF'}}>
        <Image source={item} style={{width: imageWidth, height: imageWidth}} />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <BasicHeader title={'카메라'} />
      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={(item, index) => index}
        numColumns={4}
      />
    </SafeAreaView>
  );
};

export default CustomCameraRoll;
