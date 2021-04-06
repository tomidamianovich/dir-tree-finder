import React, {useState} from 'react';
import { ScrollView, SafeAreaView, Text } from 'react-native';
import Header from './src/components/Header/Header'
import Form from './src/components/Form/Form'
import DirTree from './src/components/DirTree/DirTree'
import { styles } from './App.styles'
import { appName } from './src/utils/constants'
import { Directory } from './src/utils/types'
import { apiResponse } from './src/utils/store'

/* 
  This component is the main app component that is the one in charge of 
  the components structure organization and also will handle the search of
  directories (data request).
*/

export default function App() {
  const [lastUrlSearched, setLastUrlSearched] = useState('')
  const [dirList, setDirList] = useState<Directory[]>([])

  const handleDirSearch = (url: string) => {
    setLastUrlSearched(url)
    setDirList(apiResponse)
    // url = 'https://run.mocky.io/v3/c22a2d75-a927-4e9b-bbc5-6ac10aa15a26'
    // fetch(url)
    //   .then(response => response.json())
    //   .then(data => console.log(data))
    //   .catch(error => console.log(error))
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title={appName}/>
      <ScrollView contentContainerStyle={styles.scrollableContainer}>
        <Form handleDirSearch={handleDirSearch} lastUrlSearched={lastUrlSearched}/>
        { dirList.length > 0 && <DirTree dirList={dirList}/> }
      </ScrollView>
    </SafeAreaView>
  );
}