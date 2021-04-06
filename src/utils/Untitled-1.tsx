
const x = (dirList) => {
  return (
    {dirList.map((option) => (
      <View>
        <View style={{flexDirection: 'row'}}>
          {/* <Text>{'\u2022'}</Text> */}
          <Text style={{flex: 1, paddingLeft: 5}}>
            {option.type} ({option.name})
          </Text>
        </View>
        {/* Base Case */}
        {(option.type === 'directory' && option.files.length > 0 &&
          <DirTree dirList={option.files}/>
        )}
        {/* {(option.type === 'file' &&
          <Text>
            {option.name}
          </Text>
        )} */}
      </View>
    ))}
  )
}