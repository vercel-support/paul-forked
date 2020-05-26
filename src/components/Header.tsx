import { Link } from "gatsby"
import styled from "@emotion/styled"

const Container = styled.div`
  font-family: var(--font-sans);
  padding: 2.5em 0 0 2.5em;
  position: fixed;
  left: 0;
  top: 0;
  @media (max-width: 940px) {
    position: absolute;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 2em;
    padding-right: 2em;
    padding-top: 1.2em;
  }
  @media (max-width: 600px) {
    padding-left: 1em;
    padding-right: 1em;
  }
`

const RootLink = styled(Link)`
  color: var(--blue);
  text-decoration: none;
  display: inline-block;
  margin-bottom: 2em;
  @media (max-width: 940px) {
    margin-bottom: 0;
  }
`
const Menu = styled.div`
  @media (max-width: 940px) {
    display: flex;
  }
`
const MenuItem = styled.div`
  @media (max-width: 940px) {
    margin-left: 1em;
  }
`
const MenuItemLink = styled(Link)`
  text-decoration: none;
  font-size: var(--font-size-smaller);
  line-height: 1.8;
  &:hover {
    text-decoration: underline;
  }
`

export default function Header() {
  return (
    <Container>
      <RootLink to="/">paul shen</RootLink>
      <Menu>
        <MenuItem>
          <MenuItemLink to="/posts">Posts</MenuItemLink>
        </MenuItem>
        <MenuItem>
          <MenuItemLink to="/about">About</MenuItemLink>
        </MenuItem>
      </Menu>
    </Container>
  )
}
