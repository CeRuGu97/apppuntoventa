import { NavLink } from 'react-router-dom';
import * as Icon from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="sidebar bg-light">
      <ul>
        <li>
          <NavLink
            to="/"
            exact
            className="text-dark rounded py-2 w-100 d-inline-block px-3"
            activeClassName="active"
          >
            <Icon.FaHome className="me-2" />
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sales"
            exact
            className="text-dark rounded py-2 w-100 d-inline-block px-3"
            activeClassName="active"
          >
            <Icon.FaBarcode className="me-2" />
            Ventas
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/purchases"
            exact
            className="text-dark rounded py-2 w-100 d-inline-block px-3"
            activeClassName="active"
          >
            <Icon.FaShoppingBag className="me-2" />
            Compras
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
