import './globals.css'

import Copyright from "../components/Copyright";
import HeaderBar from "../components/HeaderBar";
import MenuBar from "../components/MenuBar";
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
          <div className="fixed left-0 right-0 w-[100vm] h-[6rem] bg-zinc-100 dark:bg-zinc-950 z-0"></div>
          <HeaderBar />
          <MenuBar />
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
