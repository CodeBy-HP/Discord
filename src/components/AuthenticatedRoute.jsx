import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import ReactLoading from 'react-loading';

function AuthenticatedRoute({ children }) {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ReactLoading type="spin" color="#5865f2" height={100} width={100} />
      </div>
    );
  }
  return user ? children : <Navigate to="/" />;
}

export default AuthenticatedRoute;
