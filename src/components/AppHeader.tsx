import React, { useState } from 'react';
import { Appbar, Searchbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Import specific icon set

interface AppHeaderProps {
  searchTerm: string,
  setSearchTerm: any
}

const AppHeader: React.FC<AppHeaderProps> = ({ searchTerm, setSearchTerm }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = (query: string) => setSearchQuery(query);

  return (
    <Appbar.Header style={styles.headerStyle}>
      <Icon.Button name="television-classic" size={24} backgroundColor="red" />
      <Appbar.Content
        title="MovieBox"
        titleStyle={{ marginLeft: 8, color: 'white', fontSize: 14 }}
        style={{ flex: 1, justifyContent: 'center' }}
      />
      <Searchbar
        placeholder="Search"
        onChangeText={setSearchTerm}
        value={searchTerm}
        style={{ flex: 3, width: 7 }}
      />
      {/* <Icon name="login" size={24} color="white" /> */}
      {/* <Icon name="view-grid" size={24} color="white" /> */}
    </Appbar.Header>
  );
};

const styles = {
  headerStyle: {
    backgroundColor: 'rgba(0,0,0,0.8)' // Semi-transparent dark background
  }
};

export default AppHeader;
