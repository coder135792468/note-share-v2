import ProvidersWrapper from "@/app/ProviderAuthetication.tsx";
import { NoteState } from "@/context/NoteContext";

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <ProvidersWrapper>
          <NoteState>{children}</NoteState>
        </ProvidersWrapper>
      </body>
    </html>
  );
}
