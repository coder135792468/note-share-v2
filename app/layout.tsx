import ProvidersWrapper from '@/app/ProviderAuthetication.tsx';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en">
      <head />
      <body>
         <ProvidersWrapper>
          {children}
         </ProvidersWrapper>
      </body>
    </html>
  )
}
 