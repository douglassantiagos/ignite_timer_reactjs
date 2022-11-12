import { NavLink } from 'react-router-dom';
import { Timer, Scroll, Sun, Moon } from 'phosphor-react';

import { HeaderContainer } from "./styles";

import logoIgnite from '../../assets/logo.svg'
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

export function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <HeaderContainer>
      <header>
        <img src={logoIgnite} alt="" />

        <button onClick={toggleTheme}>
          {theme === 'default' ? <Sun size={24} /> : <Moon size={24} />}
        </button>
      </header>

      <nav>
        <NavLink to="/" title='Timer' end>
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title='Histórico'>
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
