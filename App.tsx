import RootStack from './src/navigations/RootStack/RootStack';
import {ThemeProvider} from '@rneui/themed';

export default function App() {
  return (
    <ThemeProvider>
      <RootStack />
    </ThemeProvider>
  );
}
