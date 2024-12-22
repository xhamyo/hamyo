import './globals.css'

import HeaderBar from "../components/HeaderBar"
import ThemeContextProvider from "../components/ThemeContextProvider";
import ThemeToggleButton from "../components/ThemeToggleButton";
import Logo from "../components/Logo";

export const metadata = {
  title: 'Han Yu',
  description: 'Portfolio Page',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeContextProvider>
          <div className="px-4 py-4 flex flex-row items-center justify-center space-x-4">
            <Logo />
            <HeaderBar />
            <ThemeToggleButton />
          </div>
          <div className="py-4"/>
          {children}
        </ThemeContextProvider>
      </body>
    </html>
  )
}
