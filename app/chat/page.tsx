import React, { Suspense } from "react";
import ClientChat from "./ClientChat";

export default function ChatPage() {
  return (
    <Suspense fallback={<div>Loading chat…</div>}>
      <ClientChat />
    </Suspense>
  );
}
