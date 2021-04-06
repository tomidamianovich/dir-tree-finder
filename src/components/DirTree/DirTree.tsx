import React from 'react';
import { ScrollView, Text } from 'react-native';
import { styles } from './DirTree.styles';
import { Directory } from '../../utils/types';
import { formConst } from '../../utils/constants';
import TreeView from 'react-native-final-tree-view';
import DirItem from '../DirItem/DirItem';

type Props = {
  dirList?: Directory[]; // The list of directories
  alreadyRequested: boolean, // Needed to know if we show the empty msg.
  error: boolean, // Shows an error and depending on urlNot valid the msg.
  urlNotValid: boolean // Determines the kind of erorr msg.
};

/*
  This component will be in charge of display the results of the directory
  finder search, it will show folders and files in a child component that
  is not implemented yet.
*/

const DirTree: React.FC<Props> = ({
  dirList = [],
  alreadyRequested,
  error,
  urlNotValid
}) => {
  return (
    <>
      {
        dirList.length > 0 &&
      <ScrollView style={styles.directoryContainer}>
        <TreeView
          idKey="name"
          childrenKey="files"
          data={dirList} // defined above
          renderNode={({ node, level, isExpanded, hasChildrenNodes }) =>
            <DirItem
              item={node}
              level={level}
              isExpanded={isExpanded}
              hasChildrenitems={hasChildrenNodes} />
          }
        />
      </ScrollView>
      }
      { !dirList.length && alreadyRequested && !error &&
        <Text style={styles.noDataMsg}>
          { formConst.info.dirEmpty }
        </Text>
      }
      { error &&
      <Text style={styles.erroMsg}>
        {
          urlNotValid
            ? `${formConst.errors.invalidUrl} \n(Ex. ${formConst.placeholderUrl})`
            : formConst.errors.request
        }

      </Text>
      }
    </>
  );
};

export default DirTree;
