import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCamera, faCartShopping, faRotateBack } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

const Sales = () => {

  const deleteModal = () => {
    Swal.fire({
      title: 'Eliminar producto',
      text: "Tu no podras revertir esto",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: "Cancelar",
      confirmButtonText: 'Eliminar',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Eliminar',
          'Tu registro fue eliminado.',
          'success'
        )
      }
    })
  }

  return (
    <>
      <div className='bodySection'>
        <div className='addProductSales'>
          <input className="form-control" placeholder='Escribe el código' type="text" name="amount" id="amount" />
          <button
            type='button'
            className="btn btn-primary"
          >
            <FontAwesomeIcon icon={faCamera} className='icon' />
          </button>
        </div>
        <div className='table'>
          <table>
            <thead>
              <tr className='text-center'>
                <th>ID</th>
                <th>Codigo</th>
                <th>Descripción</th>
                <th>Stock</th>
                <th>Precio de venta</th>
                <th>Cantidad</th>
                <th>Total</th>
                <th>Quitar</th>
              </tr>
            </thead>
            <tbody className='text-center'>
              <tr>
                <td>61</td>
                <td>1</td>
                <td>Galletas de chispas</td>
                <td>20</td>
                <td>$20</td>
                <td><input className="form-control" value="1" type="text" name="amount" id="amount" /></td>
                <td>20</td>
                <td>
                  <button
                    type='button'
                    className="btn btn-danger"
                    onClick={deleteModal}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="total">
          <h3>Total: $100</h3>
          <button
            type='button'
            className="btn btn-success saleBtnAction"
          >
            Vender <FontAwesomeIcon icon={faCartShopping} className='icon' />
          </button>
          <button
            type='button'
            className="btn btn-danger"
          >
            Cancelar <FontAwesomeIcon icon={faRotateBack} className='icon' />
          </button>
        </div>
      </div>
    </>
  );
};

export default Sales;
