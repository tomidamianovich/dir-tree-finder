import React from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import Header from './src/components/Header/Header'
import Form from './src/components/Form/Form'
import { styles } from './App.styles'
import { appName } from './src/utils/constants'

/* 
  This component is the main app component that is the one in charge of 
  the components structure organization and also will handle the search of
  directories (data request).
*/

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header title={appName}/>
      <ScrollView contentContainerStyle={styles.scrollableContainer}>
        <Form />
      </ScrollView>
    </SafeAreaView>
  );
}