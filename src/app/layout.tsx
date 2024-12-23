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
          <div className="px-2 py-2">
            <div className="px-2 py-2 flex flex-row items-center justify-center space-x-4 rounded-lg bg-gray-100 dark:bg-gray-900">
              <Logo />
              <HeaderBar />
              <ThemeToggleButton />
            </div>
          </div>
          <div className="py-4"/>
          {children}
        </ThemeContextProvider>
      </body>
    </html>
  )
}
