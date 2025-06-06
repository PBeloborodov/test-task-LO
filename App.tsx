import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from '@screens/navigation';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}

export default App;
