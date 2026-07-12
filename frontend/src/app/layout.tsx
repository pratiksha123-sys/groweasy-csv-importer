import './globals.css';

export const metadata = {
  title: 'GrowEasy CRM Dashboard',
  description: 'AI CRM Hub Importer System Configuration',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-slate-50">
      <body className="h-full antialiased text-slate-800">
        {children}
      </body>
    </html>
  );
}