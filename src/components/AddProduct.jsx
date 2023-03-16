import React, { useState, useRef } from 'react';
import Scanner from './Scanner';
import { Modal as ModalReact } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import { Formik, Field, Form } from "formik";

export default function AddProduct() {

    const [scanning, setScanning] = useState(false);
    const [results, setResults] = useState('');
    const scannerRef = useRef(null);
    const [modal, setModal] = useState(false);

    const handleClose = () => setModal(!modal);
    const scanningOpen = () => {
        setModal(!modal);
        setTimeout(() => {
            setScanning(!scanning);
        }, 100);
    }

    console.log(results);
    return (
        <div className='bodySection'>
            {results}
            <div className='addProduct'>
                <div className='title'>
                    <h3>Agregar Producto </h3>
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={scanningOpen}
                    >
                        <FontAwesomeIcon icon={faCamera} className='icon' />
                    </button>
                </div>
                {
                    !!results &&
                    <Formik
                        initialValues={{
                            code: results,
                            nombreProducto: "",
                            precioCompra: "",
                            precioVenta: "",
                            stock: "",
                        }}
                        onSubmit={async (values) => {
                            console.log(values);
                            window.alert(JSON.stringify(values));
                            setScanning(false);
                        }}
                    >
                        {
                            Formik =>
                                <div className="form mt-3">
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
                                    <button type="button" onClick={Formik.handleSubmit} className="btn btn-primary mt-2">Submit</button>
                                </div>
                        }
                    </Formik>
                }
                <ModalReact show={modal} onHide={handleClose} size="lg" centered>
                    <ModalReact.Body>
                        <div>
                            <div ref={scannerRef} style={{
                                position: 'relative',
                                // border: '3px solid red'
                            }}>
                                {/* <video style={{ width: window.innerWidth, height: 180, border: '3px solid orange' }}/> */}
                                <canvas className="drawingBuffer" style={{
                                    position: 'absolute',
                                    top: '0px',
                                    // left: '0px',
                                    height: '100%',
                                    width: '100%',
                                    // border: '3px solid green',
                                }}
                                    width="640" height="480"
                                />
                                {scanning ? <Scanner scannerRef={scannerRef} onDetected={(result) => { setResults(result); setScanning(false); scanningOpen(); }} /> : null}
                            </div>
                        </div>
                    </ModalReact.Body>
                </ModalReact>

            </div>
        </div>
    );
}
