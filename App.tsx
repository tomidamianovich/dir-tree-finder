import React, { useState } from 'react';
import { View, SafeAreaView, ActivityIndicator } from 'react-native';
import Header from './src/components/Header/Header'
import Form from './src/components/Form/Form'
import DirTree from './src/components/DirTree/DirTree'
import { styles } from './App.styles'
import { appName, theme } from './src/utils/constants'
import { Directory } from './src/utils/types'
import {Dimensions} from 'react-native';
import { apiResponse } from './src/utils/store'

/* 
  This component is the main app component that is the one in charge of 
  the components structure organization and also will handle the search of
  directories (data request).
*/

export default function App() {
  const [lastUrlSearched, setLastUrlSearched] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [alreadyRequested, setAlreadyRequested] = useState(false)
  const [urlNotValid, setUrlNotValid] = useState(false)
  const [dirList, setDirList] = useState<Directory[]>([])

  // This methods will fetch the urls API in order to get the directory tree, it will
  // also handle the current state of the directorylist component (loading, error, success)
  const handleDirSearch = (url: string) => {
    if (!url) return
    if (!checkUrlString(url)) {
      setUrlNotValid(true);
      setError(true);
      return
    }
    handleNewRequestInitialState(url)
    setTimeout(function(){
      setDirList(apiResponse)
      setLoading(false)
    },3000)
  }


  // This method will set an initial state in irder to start a new request.
  const handleNewRequestInitialState = (url:string) => {
    setLastUrlSearched(url)
    setError(false);
    setAlreadyRequested(true);
    setDirList([]);
    setUrlNotValid(false);
    setLoading(true);
  }

  const checkUrlString = (url: string) => {
    if (!url) return false
    // eslint-disable-next-line
    const expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);
    return url.match(regex)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title={appName} />
      <View style={styles.scrollableContainer}>
        <Form 
          handleDirSearch={handleDirSearch}
          lastUrlSearched={lastUrlSearched}
          loading={loading}
        />
        { !loading && 
          <DirTree
            dirList={dirList}
            alreadyRequested={alreadyRequested}
            error={error}
            urlNotValid={urlNotValid}
          />
        }
        { loading && 
          <ActivityIndicator
            style={styles.spinner}
            size="large"
            color={theme.color.primary}
          />
        }
      </View>
    </SafeAreaView>
  );
}