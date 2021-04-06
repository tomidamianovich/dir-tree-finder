import React from 'react';
import { View, Text } from 'react-native';
import { Directory } from '../../utils/types';
import { dirItems, theme } from '../../utils/constants';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFolder, faFolderOpen, faFile } from '@fortawesome/free-solid-svg-icons';
import { styles } from './DirItem.styles';

type Props = {
  item: Directory,
  level: number,
  isExpanded: boolean,
  hasChildrenitems: boolean
};

/*
  This component will be in charge of display the results of the directory child,
  it could be another directory (with files or empty) or just a file.
*/

// This method will return the icon of the folder (empty or not) or the file in
// order to be showed in the directory tree
const getIcon = (isExpanded: boolean, hasChildrenitems: boolean, item: Directory) => {
  const { file, dir } = dirItems.types;
  let icon = faFolder;
  switch (true) {
    case !hasChildrenitems && item.type === file:
      icon = faFile;
      break;
    case isExpanded || (!hasChildrenitems && item.type === dir):
      icon = faFolderOpen;
      break;
  }
  return <FontAwesomeIcon icon={ icon } size={18} color={theme.color.gray} />;
};

const DirItem: React.FC<Props> = ({
  item, // A directory child
  level, // The child level that we are working with
  isExpanded, // If we are showing child of a parent or not
  hasChildrenitems // If it is a empty folder
}) => {
  return (
    <View>
      <Text style={{ marginLeft: 25 * level }}>
        {getIcon(isExpanded, hasChildrenitems, item)}
        <View style={styles.dirItemContainer}>
          <Text style={styles.dirItemName}>
            {` ${item.name}`}
          </Text>
        </View>
        <View style={styles.emptyContainer}>
          {item.type === dirItems.types.dir && !item.files.length &&
            <Text style={styles.empty}>
              {dirItems.states.empty}
            </Text>
          }
        </View>
      </Text>
    </View>
  );
};

export default DirItem;
