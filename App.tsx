import {MovieProvider} from './src/context/MovieContext';
import RootStack from './src/navigations/RootStack/RootStack';
import {ThemeProvider} from '@rneui/themed';

export default function App() {
  return (
    <MovieProvider>
      <ThemeProvider>
        <RootStack />
      </ThemeProvider>
    </MovieProvider>
  );
}
