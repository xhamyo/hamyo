import './globals.css'

import Copyright from "../components/common/Copyright";
import HeaderBar from "../components/common/HeaderBar";
import MenuBar from "../components/common/MenuBar";
import PageAnchor from "../components/common/PageAnchor";
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
          <header className="fixed left-0 right-0 w-[100vm] h-[5.25rem] md:h-[6rem] bg-zinc-100 dark:bg-zinc-950 shadow-lg z-10">
            <HeaderBar />
            <MenuBar />
            <Logo />
            <ThemeToggleButton />
          </header>

          <div className="py-14"/>

          <main className="flex flex-row">
            <aside className="hidden md:block w-1/6"></aside>
            <section className="w-full md:w-5/6">
              {children}
            </section>
          </main>

          <PageAnchor />

          <footer>
            <Copyright />
          </footer>
        </ThemeContextProvider>
      </body>
    </html>
  )
}
