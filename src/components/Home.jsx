import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faDollar, faTruck, faBell } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className='bodySection'>
      <h2>Home</h2>
      <p>Welcome</p>
      <div className="viewHome">
        <section>
          <div>
            Usuarios <br /> 4
          </div>
          <FontAwesomeIcon icon={faUser} className='icon' />
        </section>
        <section>
          <div>
            Ventas <br /> 4
          </div>
          <FontAwesomeIcon icon={faDollar} className='icon' />
        </section>
        <Link to="/products">
          <section>
            <div>
              Productos
              <br /> 4
            </div>
            <FontAwesomeIcon icon={faTruck} className='icon' />
          </section>
        </Link>
        <section>
          <div>
            Pendientes <br /> 4
          </div>
          <FontAwesomeIcon icon={faBell} className='icon' />
        </section>
      </div>
    </div>
  );
}
