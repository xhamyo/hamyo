import './globals.css';

import Copyright from "../components/common/Copyright";
import HeaderBar from "../components/common/HeaderBar";
import HamburgerMenu from "../components/common/HamburgerMenu";
import Logo from "../components/common/Logo";
import ResumeDownload from '../components/common/ResumeDownload';

export const metadata = {
  title: 'Han Yu',
  description: 'Portfolio Page',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="fixed left-0 right-0 w-[100vm] h-[4rem] bg-zinc-950 shadow-lg z-10"></div>
        <Logo />
        <HeaderBar />
        <HamburgerMenu />
        <ResumeDownload />
        <div className="h-[5rem]"/>
        {children}
        <Copyright />
      </body>
    </html>
  )
}
