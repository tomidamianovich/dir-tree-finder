import React from 'react';
import { SafeAreaView, View, TextInput, Text, TouchableHighlight } from 'react-native';
import { styles } from './Form.styles';
import { formConst, theme } from '../../utils/constants';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch, faRedo } from '@fortawesome/free-solid-svg-icons';

type Props = {
  loading: boolean,
  lastUrlSearched: string,
  handleDirSearch: (arg0: string) => void;
};

const Form: React.FC<Props> = ({
  handleDirSearch, // Will emit the search when the user submits
  lastUrlSearched, // Needed to know if we already have the result to an url.
  loading // In order to show an spinner
}) => {
  const [currentValue, setCurrentInputValue] = React.useState('');
  const [alreadyLoadedSearch, setAlreadyLoadedSearch] = React.useState(false);

  // This method will emit to app main component the url currentValue to search and swith betweeen
  // the search or refresh icon
  const handleSubmit = () => {
    handleDirSearch(currentValue);
    setAlreadyLoadedSearch(true);
  };

  // This method will set the currently input value
  const handleInputValueChange = (currentValue:string) => {
    setCurrentInputValue(currentValue);
    setAlreadyLoadedSearch(false);
  };

  // This icon will returns the icon to show as a submit depending on if a
  // search was already done with the value that the input has
  const getCurrentSubmitIcon = () => {
    if (lastUrlSearched.length === 0) return faSearch;
    const urlHasChanged = lastUrlSearched !== currentValue;
    return !alreadyLoadedSearch && urlHasChanged ? faSearch : faRedo;
  };

  return (
    <SafeAreaView>
      <View style={[{ flexDirection: 'row', alignItems: 'center' }]}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>{formConst.inputLabel}</Text>
          <TextInput
            style={styles.input}
            onChangeText={(val) => handleInputValueChange(val)}
            value={currentValue}
            placeholder={formConst.placeholderUrl}
          />
        </View>
        <View>
          <TouchableHighlight style={styles.search} onPress={handleSubmit} disabled={loading || !currentValue.length }>
            <View>
              <FontAwesomeIcon
                icon={ getCurrentSubmitIcon() }
                size={25}
                color={ !currentValue.length ? theme.color.gray : theme.color.dark } />
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Form;
