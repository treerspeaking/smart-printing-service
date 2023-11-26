import React from 'react';
import { AuthProvider } from "../../contexts/AuthContext";
import { FeedbackContent } from './FeedbackContent';

export default function HomePage() {
  return (
    <AuthProvider>
      <FeedbackContent />
    </AuthProvider>
  );
}

