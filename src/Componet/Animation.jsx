import React from 'react';
import '../Style/Animation.css';
import { useAuth } from './AuthProvider';

export default function Animation() {
  const { authenticated } = useAuth();

  return (
    authenticated && (
      <div className="container-anime">
        <div className="loader">
          <h1>Ramco</h1>
        </div>
      </div>
    )
  );
}
