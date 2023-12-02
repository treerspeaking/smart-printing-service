import React from 'react';

import { AuthProvider } from '../../contexts/AuthContext';

import PaymentContent from './PaymentContent';

export default function HomePage() {
  return (
    
    <AuthProvider>
      <PaymentContent />
    </AuthProvider>
  );
}

