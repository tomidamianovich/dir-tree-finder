import React from 'react';
import { View } from 'react-native';
import { styles } from './DirTree.styles';
import { Directory } from '../../utils/types';
import TreeView from 'react-native-final-tree-view';
import DirItem from '../DirItem/DirItem';

type Props = {
  dirList?: Directory[];
  index2?: number
};

/*
  This component will be in charge of display the results of the directory
  finder search, it will show folders and files in a child component that
  is not implemented yet.
*/

const DirTree: React.FC<Props> = ({
  dirList = []
}) => {
  return (
    <View style={styles.directoryContainer}>
      <TreeView
        idKey="name"
        childrenKey="files"
        data={dirList} // defined above
        renderNode={({ node, level, isExpanded, hasChildrenNodes }) =>
          <DirItem
            node={node}
            level={level}
            isExpanded={isExpanded}
            hasChildrenNodes={hasChildrenNodes} />
        }
      />
    </View>
  );
};

export default DirTree;
