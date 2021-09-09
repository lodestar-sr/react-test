import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Routes from "./routes";
import Header from "./components/Header";
import theme from "./theme";
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Routes />
      </div>
    </ThemeProvider>
  );
}

export default App;
