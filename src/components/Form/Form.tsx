import React from 'react';
import { SafeAreaView } from 'react-native';
import { styles } from './Form.styles';
import { companyName } from '../../utils/constants';

type Props = {
  title?: string;
};

/*
  This component is a form that shows the url input and the search
  and refresh implementation, the retrieve of the data will be handled
  by the App.tsx file when this component emits the submit event.
*/

const Form: React.FC<Props> = ({
  title = `${companyName} App`
}) => {
  return (
    <SafeAreaView style={styles.form}>
      {title}
    </SafeAreaView>
  );
};

export default Form;
