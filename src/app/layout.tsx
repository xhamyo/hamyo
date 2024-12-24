import './globals.css'

import Copyright from "../components/Copyright"
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
          <HeaderBar />
          <Logo />
          <ThemeToggleButton />
          <div className="py-14"/>
          {children}
          <Copyright />
        </ThemeContextProvider>
      </body>
    </html>
  )
}
