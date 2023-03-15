import React, { useState, useRef } from 'react';
import Scanner from './Scanner';
import Result from './Result';
import Swal from 'sweetalert2'
import { Modal as ModalReact } from "react-bootstrap"

export default function AddProduct() {

    const [scanning, setScanning] = useState(false);
    const [results, setResults] = useState('');
    const scannerRef = useRef(null);
    const [modal, setModal] = useState(false);

    const handleClose = () => setModal(!modal);

    console.log(results);
    return (
        <div className='bodySection'>
                {results}
            <div className='addProduct'>

                Add product 3

                <div>
                    <button onClick={() => setScanning(!scanning)}>{scanning ? 'Stop' : 'Start'}</button>
                    <button onClick={() => setModal(!modal)}>modal</button>
                    <ModalReact show={modal} onHide={handleClose}>
                        <ModalReact.Body>
                            aaaaaaaaa
                        </ModalReact.Body>
                    </ModalReact>
                    <ul className="results">
                        {/* {results.map((result) => (result.codeResult && <Result key={result.codeResult.code} result={result} />))} */}
                        {results}
                    </ul>
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
                        {scanning ? <Scanner scannerRef={scannerRef} onDetected={(result) => setResults(result)} /> : null}
                    </div>
                </div>
            </div>
        </div>
    );
}
