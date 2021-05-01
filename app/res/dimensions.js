import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
export const dimensions = {
  wp: widthPercentageToDP,
  hp: heightPercentageToDP,
  //font sizes
  h1: heightPercentageToDP('1.8%'), //smallText
  h2: heightPercentageToDP('2%'), //normalText,textInput
  h3: heightPercentageToDP('2.4%'), //subHeading,buttons
  h4: heightPercentageToDP('2.6%'), //heading
  h5: widthPercentageToDP('8%'), //bigHeading
};
