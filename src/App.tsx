import { AuthProvider } from './context/AuthContext';
import AppRouter from './routes/AppRouter';
import useOnline from './hooks/useOnline.ts';
import Offline from './components/Offline';
import './styles/global.css';

function App() {
  const isOnline = useOnline();

  return <AuthProvider>{isOnline ? <AppRouter /> : <Offline />}</AuthProvider>;
}

export default App;
