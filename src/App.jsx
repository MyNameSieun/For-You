import { AuthProvider } from 'context/AuthContext';
import { ModalProvider } from 'context/ModalContext';
import { SelectedProvider } from 'context/SelectedContext';
import Router from 'shared/Router';

const App = () => {
  return (
    <AuthProvider>
      <SelectedProvider>
        <ModalProvider>
          <Router />
        </ModalProvider>
      </SelectedProvider>
    </AuthProvider>
  );
};

export default App;
