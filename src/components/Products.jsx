import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faFileExcel, faFilePdf, faPlus, faPrint, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

export default function Products() {
  return (
    <div className='bodySection'>
      <div className='products'>
        <h3>Lista de productos</h3>
        <div className='btnActions'>
          <button type="button" className="btn btn-primary">
            <Link to="addProduct">
              Agregar producto <FontAwesomeIcon icon={faPlus} />
            </Link>
          </button>
          <button type="button" className="btn btn-success">
            Excel <FontAwesomeIcon icon={faFileExcel} />
          </button>
          <button type="button" className="btn btn-danger">
            PDF <FontAwesomeIcon icon={faFilePdf} />
          </button>
          <button type="button" className="btn btn-light">
            Imprimir <FontAwesomeIcon icon={faPrint} />
          </button>
        </div>

        <div className='table'>
          <table>
            <thead>
              <tr className='text-center'>
                <th>Codigo</th>
                <th>Producto</th>
                <th>Precio compra</th>
                <th>Precio venta</th>
                <th>Stock</th>
                <th>Total</th>
                <th>Inversion</th>
                <th>Ganancia</th>
                <th>Fecha</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody className='text-center'>
              <tr>
                <td>2</td>
                <td>Agua</td>
                <td>$50</td>
                <td>$500</td>
                <td>20</td>
                <td>$220</td>
                <td>$220</td>
                <td>$220</td>
                <td>$220</td>
                <td className='actionsTable'>
                  <button type='button' className="btn btn-warning">
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  &nbsp;
                  <button type='button' className="btn btn-danger">
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
