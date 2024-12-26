import './globals.css'

import Copyright from "../components/common/Copyright";
import HeaderBar from "../components/common/HeaderBar";
import MenuBar from "../components/common/MenuBar";
import ThemeContextProvider from "../components/common/ThemeContextProvider";
import ThemeToggleButton from "../components/common/ThemeToggleButton";
import Logo from "../components/common/Logo";

export const metadata = {
  title: 'Han Yu',
  description: 'Portfolio Page',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeContextProvider>
          <div className="fixed left-0 right-0 w-[100vm] h-[5.25rem] md:h-[6rem] bg-zinc-100 dark:bg-zinc-950 shadow-lg z-10"></div>
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
