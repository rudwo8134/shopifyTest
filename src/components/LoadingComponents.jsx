import React from 'react'
import * as LoadingStyles from '../style/loadingStyle.jsx';
import { Watch } from 'react-loader-spinner';
import { Commonstyle } from '../Commonstyle';

const LoadingComponents = () => {
  return (
    <LoadingStyles.LoadingWrapper>
      <Watch
        heigth="150"
        width="150"
        color={Commonstyle.color.white}
        arialLabel="loading"
      />
      <LoadingStyles.LoadingText>
        Please Wait for a second
      </LoadingStyles.LoadingText>
    </LoadingStyles.LoadingWrapper>
  );
}

export default LoadingComponents
