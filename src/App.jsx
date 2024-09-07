import { AuthProvider } from 'context/AuthContext';
import { SelectedProvider } from 'context/SelectedContext';
import Router from 'shared/Router';

const App = () => {
  return (
    <AuthProvider>
      <SelectedProvider>
        <Router />
      </SelectedProvider>
    </AuthProvider>
  );
};

export default App;
