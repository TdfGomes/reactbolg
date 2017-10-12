import React from 'react';
import theme from '../toolbox/theme'
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';



const App = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);

export default App;
