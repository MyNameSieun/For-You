import { getUser } from 'api/auth';
import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const isSignIn = !!user; // 로그인 상태 확인

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await getUser();
        setUser(response.data.member);
      } catch (error) {
        setUser(null); // 인증 실패 시 사용자 정보 초기화
      } finally {
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
