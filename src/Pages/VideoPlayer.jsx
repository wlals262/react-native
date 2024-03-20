import React, {useRef} from 'react';
import {SafeAreaView, View} from 'react-native';
import BasicHeader from '../components/BasicHeader';
import Video, {VideoRef} from 'react-native-video';

const VideoPlayer = () => {
  const videoRef = useRef(null);

  const dummyLocalVideo = require('../assets/videos/dummyVideo.mp4');

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <BasicHeader title={'비디오'} />
      <Video
        source={dummyLocalVideo}
        ref={videoRef}
        style={{
          width: 500,
          height: 320,
          // position: 'absolute',
          // top: 0,
          // bottom: 0,
          // left: 0,
          // right: 0,
        }}
      />
    </SafeAreaView>
  );
};

export default VideoPlayer;
