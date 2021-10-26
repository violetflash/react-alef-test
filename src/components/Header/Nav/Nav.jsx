import { Link } from 'react-router-dom';
import { NavElement, NavList } from "./styles";

export const Nav = () => {
  const pagesData = [
    { title: 'Форма', route: '/form' },
    { title: 'Превью', route: '/preview' }
  ];

  const links = pagesData.map(el => {
    return (
      <NavElement>
        <Link key={el.route} to={el.route}>{el.title}</Link>
      </NavElement>
    )
  })

  return (
    <NavList>
      {links}
    </NavList>
  )
};