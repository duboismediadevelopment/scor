import React from "react";
import { ClerkProvider, SignedIn, SignedOut, SignIn, SignUp } from "@clerk/clerk-react";
import SyncUserToSupabase from "./SyncUserToSupabase"; // Zorg dat je deze exporteert

function App() {
  return (
    <ClerkProvider>
      <SignedIn>
        <SyncUserToSupabase />
        {/* ...jouw bestaande app code voor ingelogde gebruikers... */}
      </SignedIn>
      <SignedOut>
        <SignIn />
        <SignUp />
      </SignedOut>
    </ClerkProvider>
  );
}

export default App;