import { NavElement, NavList } from "./styles";
import { Link, useLocation } from 'react-router-dom';

export const Nav = () => {
  const { pathname } = useLocation();

  const pagesData = [
    { title: 'Форма', route: '/form' },
    { title: 'Превью', route: '/preview' }
  ];

  const links = pagesData.map(el => {
    return (
      <NavElement key={el.route} active={pathname === el.route}>
        <Link to={el.route}>{el.title}</Link>
      </NavElement>
    )
  })

  return (
    <NavList>
      {links}
    </NavList>
  )
};