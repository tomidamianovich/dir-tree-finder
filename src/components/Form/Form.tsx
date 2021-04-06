import React from 'react';
import { SafeAreaView, TextInput, Text, Button } from 'react-native';
import { styles } from './Form.styles';
import { theme, companyName, formConst } from '../../utils/constants';

type Props = {
  lastUrlSearched?: string;
  handleDirSearch?: (arg0: string) => void;
};

const Form: React.FC<Props> = ({
  lastUrlSearched = '',
  handleDirSearch = () => {}
}) => {
  const [value, setInputValue] = React.useState('');
  const [alreadyLoadedSearch, setAlreadyLoadedSearch] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = () => {
    handleDirSearch(value);
    setAlreadyLoadedSearch(true);
  };

  const handleInputValueChange = (value:string) => {
    setInputValue(value);
    setAlreadyLoadedSearch(false);
  };

  const handleClearInput = () => {
    setInputValue('');
  };

  return (
    <SafeAreaView>
      <Text>{formConst.inputLabel}</Text>
      <TextInput
        style={styles.input}
        onChangeText={(val) => handleInputValueChange(val)}
        value={value}
        placeholder={formConst.placeholderUrl}
      />
      <Button
        color={theme.color.primary}
        title={alreadyLoadedSearch ? formConst.refreshButtonText : formConst.searchButtonText }
        onPress={handleSubmit}
        disabled={loading}
      />
    </SafeAreaView>
  );
};

export default Form;
