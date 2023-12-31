import { useNavigate } from "react-router-dom"
import { Link, animateScroll } from "react-scroll"
import logo from "../../../assets/logo.svg"
import {
  BtnMenu,
  HeaderContainer,
  HeaderContent,
  Navbar,
  Socials,
} from "./Header.styles"
import { List, X } from "@phosphor-icons/react"
import { useState } from "react"

export function Header() {
  const navigate = useNavigate()
  const [menu, setMenu] = useState("close")

  function navigateToPage(local: string) {
    setMenu("close")
    navigate(local)
    animateScroll.scrollToTop()
  }

  function navigateTo(local: string) {
    setMenu("close")
    navigate(local)
  }

  return (
    <HeaderContainer>
      <HeaderContent>
        <Link
          href="/"
          to={"/"}
          smooth={true}
          offset={-76}
          duration={500}
          onClick={() => navigateToPage("/")}
        >
          <img src={logo} alt="" />
        </Link>
        <Navbar state={menu}>
          <Link
            href="/#showcase"
            to={"showcase"}
            smooth={true}
            offset={-76}
            duration={500}
            onClick={() => navigateTo("/")}
          >
            INÍCIO
          </Link>
          <Link
            href="/projects"
            to={"/#"}
            smooth={true}
            offset={-76}
            duration={500}
            onClick={() => navigateToPage("/projects")}
          >
            PROJETOS
          </Link>
          <Link
            href="/blog"
            to={"/#"}
            smooth={true}
            offset={-76}
            duration={500}
            onClick={() => navigateToPage("/blog")}
          >
            BLOG
          </Link>
          <Link
            href="/about"
            to={"about"}
            smooth={true}
            offset={-76}
            duration={500}
            onClick={() => navigateTo("/")}
          >
            SOBRE
          </Link>
          <Link
            href="/contact"
            to={"contact"}
            smooth={true}
            duration={500}
            onClick={() => navigateTo("/")}
          >
            CONTATO
          </Link>
          <Socials onClick={() => setMenu("close")}>
            <a
              href="https://www.linkedin.com/in/raimones-barros-b6577492/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://icongr.am/devicon/linkedin-plain.svg?size=26&color=45c7af"
                alt=""
              />
            </a>
            <a
              href="https://github.com/raimonesbarros"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://icongr.am/fontawesome/github.svg?size=26&color=45c7af"
                alt=""
              />
            </a>
          </Socials>
        </Navbar>
        <BtnMenu>
          {menu === "close" ? (
            <List size={50} weight="bold" onClick={() => setMenu("open")} />
          ) : (
            <X size={50} weight="bold" onClick={() => setMenu("close")} />
          )}
        </BtnMenu>
      </HeaderContent>
    </HeaderContainer>
  )
}
