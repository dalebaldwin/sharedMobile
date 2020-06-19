import React, { FC } from 'react';
import { SafeAreaView } from 'react-native';
import { ThemeProvider } from 'styled-components'
import theme from 'shared/dist/theme/baseTheme'
import StyledCount from './styledCount'
import PureCount from './pureCount'

const App: FC = () => {

  return (
    <SafeAreaView style={{flex: 1}}>
      <ThemeProvider theme={theme}>
        <StyledCount />
      </ThemeProvider>
      <PureCount />
    </SafeAreaView>
  );
};

export default App;
