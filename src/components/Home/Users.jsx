import { useState } from 'react';
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faUser } from '@fortawesome/free-solid-svg-icons'
import { Modal as ModalReact } from "react-bootstrap";
import { Formik, Field } from "formik";

const Users = () => {
    const [modal, setModal] = useState(false);
    const handleMoalUpdate = () => setModal(!modal);

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
        <div className='bodySection'>
            <div className='products'>
                <h3>Lista de Usuarios</h3>
                <div className='btnActions'>
                    <button type="button" className="btn btn-success">
                        <Link to="/addUser">
                            Agregar usuario <FontAwesomeIcon icon={faUser} />
                        </Link>
                    </button>
                </div>

                <div className='table'>
                    <table>
                        <thead>
                            <tr className='text-center'>
                                <th>Nombre</th>
                                <th>Correo</th>
                                <th>Password</th>
                                <th>Telefono</th>
                                <th>Fecha_Registro</th>
                                <th>Rol de usuario</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody className='text-center'>
                            <tr>
                                <td>Cesar</td>
                                <td>cesar@gmail.com</td>
                                <td>1234</td>
                                <td>1234567890</td>
                                <td>2022-07-02 23:19:35</td>
                                <td>Administrador</td>
                                <td className='actionsTable'>
                                    <button type='button' className="btn btn-warning" onClick={handleMoalUpdate}>
                                        <FontAwesomeIcon icon={faEdit} />
                                    </button>
                                    &nbsp;
                                    <button type='button' className="btn btn-danger" onClick={deleteModal}>
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <ModalReact show={modal} onHide={handleMoalUpdate} size="lg" centered>
                <ModalReact.Body>
                    <Formik
                        initialValues={{
                            code: "",
                            nombreProducto: "",
                            precioCompra: "",
                            precioVenta: "",
                            stock: "",
                        }}
                        onSubmit={async (values) => {
                            console.log(values);
                            window.alert(JSON.stringify(values));
                        }}
                    >
                        {
                            Formik =>
                                <div className="form mt-3">
                                    <h4>Actualizar Producto</h4>
                                    <div className="form-group row">
                                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 mt-2'>
                                            <Field className="form-control" placeholder="code" name="code" type="text" />
                                        </div>
                                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 mt-2'>
                                            <Field className="form-control" placeholder="Nombre de producto" name="nombreProducto" type="text" />
                                        </div>
                                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 mt-2'>
                                            <Field className="form-control" placeholder="Precio compra" name="precioCompra" type="text" />
                                        </div>
                                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 mt-2'>
                                            <Field className="form-control" placeholder="Precio venta" name="precioVenta" type="text" />
                                        </div>
                                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 mt-2'>
                                            <Field className="form-control" placeholder="stock" name="stock" type="text" />
                                        </div>
                                    </div>
                                    <button type="button" className="btn btn-primary mt-2" onClick={Formik.handleSubmit}>Submit</button>
                                </div>
                        }
                    </Formik>
                </ModalReact.Body>
            </ModalReact>
        </div>
    );
}

export default Users;