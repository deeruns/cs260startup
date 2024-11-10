import React from 'react';
import { Unauthenticated } from './Unauthenticated';
import { Authenticated } from './Authenticated';
import { AuthState } from './authState';

export function Login({ userName, authState, onAuthChange }) {
  return (
    <main className="container my-4">
      <div className="text-primary text-center">
        <h1>Welcome to the BYU Running Website</h1>
        {authState === AuthState.Unknown && <p>Loading...</p>}

        {authState === AuthState.Authenticated && (
          <Authenticated
            userName={userName}
            onLogout={() => onAuthChange(userName, AuthState.Unauthenticated)}
          />
        )}

        {authState === AuthState.Unauthenticated && (
          <Unauthenticated
            userName={userName}
            onLogin={(loginUserName) => onAuthChange(loginUserName, AuthState.Authenticated)}
          />
        )}
      </div>
    </main>
  );
}
