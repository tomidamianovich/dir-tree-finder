import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './Header.styles';
import { defaultAppName } from '../../utils/constants';

type Props = {
  title?: string; // App Name
};

/*
  This component show a header in the application, the will be
  the company and app name togheter and will be showed as a logo.
*/

const Header: React.FC<Props> = ({
  title = defaultAppName
}) => (
  <View style={styles.header}>
    <Text style={styles.headerTitle}>
      { title }
    </Text>
  </View>
);

export default Header;
