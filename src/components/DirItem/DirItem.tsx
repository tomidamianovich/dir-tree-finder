import React from 'react';
import { View, Text } from 'react-native';
// import { styles } from './DirItem.styles';
import { Directory } from '../../utils/types';

type Props = {
  node: Directory,
  level: number,
  isExpanded: boolean,
  hasChildrenNodes: boolean
};

/*
  This component will be in charge of display the results of the directory child,
  it could be another directory (with files or empty) or just a file.
*/

function getIndicator (isExpanded: boolean, hasChildrenNodes: boolean, node: Directory) {
  if (!hasChildrenNodes) {
    return node.type === 'directory' ? '[]' : '-';
  } else if (isExpanded) {
    return '\\/';
  } else {
    return '>';
  }
}

const DirItem: React.FC<Props> = ({
  node,
  level,
  isExpanded,
  hasChildrenNodes
}) => {
  return (
    <View>
      <Text style={{ marginLeft: 25 * level }}>
        {getIndicator(isExpanded, hasChildrenNodes, node)} {node.name}
      </Text>
    </View>
  );
};

export default DirItem;
