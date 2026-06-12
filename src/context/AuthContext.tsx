'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { supabase } from '@/lib/supabase';
import { Session } from '@supabase/supabase-js';

interface AuthContextType {
  isAuthModalOpen: boolean;
  openAuthModal: () => void;
  closeAuthModal: () => void;
  isDemoModalOpen: boolean;
  openDemoModal: () => void;
  closeDemoModal: () => void;
  session: Session | null;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const openAuthModal = () => setIsAuthModalOpen(true);
  const closeAuthModal = () => setIsAuthModalOpen(false);
  
  const openDemoModal = () => setIsDemoModalOpen(true);
  const closeDemoModal = () => setIsDemoModalOpen(false);

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <AuthContext.Provider value={{ 
      isAuthModalOpen, openAuthModal, closeAuthModal, 
      isDemoModalOpen, openDemoModal, closeDemoModal,
      session, signOut 
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
