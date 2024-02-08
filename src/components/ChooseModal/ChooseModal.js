import Link from 'next/link';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ChooseModal = (props) => {
    const handleCloseAndNavigate = () => {
        props.handleClose(); 
        props.handleCloseAll(); 
    };

    return (
        <>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Body> <h3 className='text-center'>Choose service for</h3> </Modal.Body>
                </Modal.Header>
                <Modal.Body>
                    <div className='d-flex flex-column gap-3'>
                        <Link className='btn btn-info w-75 mx-auto' onClick={handleCloseAndNavigate} href="/my-self">
                            For Myself
                        </Link>
                        <Button className='btn btn-info w-75 mx-auto' onClick={props.handleClose}>
                            Others person
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default ChooseModal;
