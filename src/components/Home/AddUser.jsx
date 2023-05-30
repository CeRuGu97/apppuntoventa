import { Formik, Field } from "formik";
import { Link } from "react-router-dom";

const AddUser = () => {
    return (
        <div className="bodySection">
            <div className="addProduct">
                <div className="title">
                    <h3>Agregar Usuario</h3>
                </div>
                <Formik
                    initialValues={{
                        name: "",
                        email: "",
                        password : "",
                        phone: "",
                        rol: '',
                    }}

                    onSubmit={(values) => {
                        console.log(values);
                    }}
                >
                    {
                        Formik => 
                            <div className="form mt-3">
                                <div className="form-group row">
                                    <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 mt-2'>
                                        <Field className="form-control" placeholder="Nombre" name="name" type="text" />
                                    </div>
                                    <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 mt-2'>
                                        <Field className="form-control" placeholder="Correo" name="email" type="text" />
                                    </div>
                                    <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 mt-2'>
                                        <Field className="form-control" placeholder="Contraseña" name="password" type="password" />
                                    </div>
                                    <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 mt-2'>
                                        <Field className="form-control" placeholder="Telefono" name="phone" type="text" />
                                    </div>
                                    <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 mt-2'>
                                        <Field
                                            className="form-control"
                                            name="rol"
                                            as="select"
                                        >
                                            <option value="">Rol</option>
                                            <option value="1">Admin</option>
                                            <option value="2">Vendedor</option>
                                            <option value="3">Comprador</option>
                                        </Field>
                                    </div>
                                </div>
                                <button type="button" onClick={Formik.handleSubmit} className="btn btn-primary mt-2">Agregar</button>
                                <button type="button" className="btn btn-secondary mt-2">
                                    <Link to="/">
                                        Regresar
                                    </Link>
                                </button>
                            </div>
                    }
                </Formik>
            </div>
        </div>
    );
}
export default AddUser;