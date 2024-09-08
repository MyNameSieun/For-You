import { getUser } from 'api/auth';
import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const isSignIn = !!user;

  useEffect(() => {
    const fetchUser = async () => {
      // 토큰이 있는 경우에만 사용자 정보를 가져오도록 설정
      const token = localStorage.getItem('authToken');
      if (token) {
        try {
          const response = await getUser();
          setUser(response.data);
        } catch (error) {
          setUser(null);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <AuthContext.Provider value={{ user, setUser, isSignIn }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
