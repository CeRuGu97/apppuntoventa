import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faFileExcel, faFilePdf, faPlus, faPrint, faTrash } from '@fortawesome/free-solid-svg-icons'

export default function Products() {
  return (
    <div className='bodySection'>
      <div className='products'>

        <h3>Lista de productos</h3>
        <div className='btnActions'>
          <button type="button" class="btn btn-primary">
            Agregar producto <FontAwesomeIcon icon={faPlus} />
          </button>
          <button type="button" class="btn btn-success">
            Excel <FontAwesomeIcon icon={faFileExcel} />
          </button>
          <button type="button" class="btn btn-danger">
            PDF <FontAwesomeIcon icon={faFilePdf} />
          </button>
          <button type="button" class="btn btn-light">
            Imprimir <FontAwesomeIcon icon={faPrint} />
          </button>
        </div>

        <table className="table table-hover">
          <thead>
            <tr className='text-center'>
              <th scope="col">Codigo</th>
              <th scope="col">Producto</th>
              <th scope="col">Precio compra</th>
              <th scope="col">Precio venta</th>
              <th scope="col">Stock</th>
              <th scope="col">Total</th>
              <th scope="col">Inversion</th>
              <th scope="col">Ganancia</th>
              <th scope="col">Fecha</th>
              <th scope="col">Acciones</th>
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
              <td>
                <button type='button' class="btn btn-warning">
                  <FontAwesomeIcon icon={faEdit} />
                </button>
                &nbsp;
                <button type='button' class="btn btn-danger">
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
