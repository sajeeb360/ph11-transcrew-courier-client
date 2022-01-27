import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase/firebase.init';

// initialize authentication
initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();

  const signInWithGoogle = () => {
    setIsLoading(true);
    const googleAuth = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuth).finally(() => setIsLoading(false));
  };

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
  }, [auth]);
  return {
    signInWithGoogle,
    user,
    logOut,
    isLoading,
  };
};
export default useFirebase;
