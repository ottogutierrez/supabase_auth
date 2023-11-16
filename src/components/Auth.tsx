import { ReactNode, createContext, useEffect, useState } from "react";
import { supabase } from "../utils/supabase";
import { Session } from "@supabase/supabase-js";

export interface IAuthContext {
  session: Session | null;
  loading: boolean;
  signUp: (email:string,password:string)=>Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<IAuthContext>({
  session: null,
  loading: false,
  signUp: async () => {},
  signIn: async () => {},
  signOut: async () => {},
});

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const retrieveSession = async () => {
      const currentSession = (await supabase.auth.getSession()).data.session;
      setSession(currentSession);
      setLoading(false);
    };
    retrieveSession();
    supabase.auth.onAuthStateChange(async (_event, session) => {
      setSession(session);
    });
  }, []);
  const value = {
    session,
    loading,
    signUp: async (email: string, password: string) => {
      setLoading(true);
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });
      setLoading(false);
      if (error) throw error;
      setSession(data.session);
      console.log(`Signed up!: ${session?.user.email}`);
    },
    signIn: async (email: string, password: string) => {
      setLoading(true);
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      setLoading(false);
      if (error) {
        throw error;
      }
      setSession(data.session);
      console.log(session?.user.created_at);
    },
    signOut: async () => {
      await supabase.auth.signOut();
      setSession(null);
    },
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
