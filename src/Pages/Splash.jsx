import React, {useEffect, useState} from 'react';
import {Linking, Platform, Text, View} from 'react-native';
import {getAppVersion} from '../apis/basic';
import AlertModal from '../components/AlertModal';

const appVersion = {
  ios: 1,
  android: 1,
};

const Splash = ({navigation}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    handleAppVersionCheckLogic();
    setTimeout(() => {
      navigation.navigate('MainTab');
    }, 2000);
  }, []);

  const handleAppVersionCheckLogic = async () => {
    const res = await getAppVersion();
    // if (res.data.android === appVersion.android) {
    //   console.log('version 일치');
    //   setTimeout(() => {
    //     navigation.navigate('MainTab');
    //   }, 2000);
    // } else {
    //   console.log('업데이트 필요');
    //   setIsVisible(true);
    // }
  };

  const handleNoUpdate = () => {
    setIsVisible(false);
    navigation.replace('MainTab');
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Splash</Text>
      <AlertModal
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        headerTitle={'최신 버전이 아닙니다.'}
        okText={'업데이트하기'}
        okPressOk={async () => {
          if (Platform.OS !== 'ios') {
            await Linking.openURL('https://www.naver.com');
            return;
          } else {
            await Linking.openURL('https://playstore.com');
            return;
          }
        }}
        noText={'나중에 하기'}
        onPressNo={() => handleNoUpdate()}
      />
    </View>
  );
};

export default Splash;
