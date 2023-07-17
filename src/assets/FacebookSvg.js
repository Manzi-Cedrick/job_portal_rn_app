import {View, Text} from 'react-native';
import React from 'react';
import {ClipPath, Defs, G, Path, Rect, Svg} from 'react-native-svg';

const FacebookSvg = () => {
  return (
    <Svg
      width="16"
      height="31"
      viewBox="0 0 16 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <G clip-path="url(#clip0_9_508)">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15.862 0.217288V5.06505L12.9848 5.07255C10.7295 5.07255 10.295 6.144 10.295 7.70997V11.1791H15.6672L14.9704 16.6038H10.295V30.72H4.69117V16.6038H0V11.1791H4.69117V7.17799C4.69117 2.53252 7.52266 0 11.6736 0C13.6524 0 15.36 0.149853 15.862 0.217288Z"
          fill="white"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_9_508">
          <Rect width="16" height="30.72" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default FacebookSvg;
