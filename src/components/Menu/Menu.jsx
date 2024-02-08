import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import ModalInv from '../Modal/ModalInv';
import { useState } from 'react';
import Modal2 from '../Modal2/Modal2';

function Menu() {
  const [show ,setShow] = useState(false)
  const handleClose = () => setShow(false);

  const [modalShow, setModalShow] = useState(false)
  const handleClose2 = () => setModalShow(false);

  const pathname = usePathname()

  return (
    <>

<Navbar expand="lg" className="nav-bg">
      <Container>
        <Navbar.Brand href="/" className='text-success'>  Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav-custom gap-3">
            <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">About Us</Link>
            <Link className={`link ${pathname === '/investments' ? 'active' : ''}`} onClick={()=>setShow(true)} href="#">Investments</Link>
            <Link className={`link ${pathname === '/tax-cal"' ? 'active' : ''}`} onClick={() => setModalShow(true)} href="#">Tax Calculator </Link>
            <Link className={`link ${pathname === '/tax-drive' ? 'active' : ''}`} href="/tax-drive">TaxDrive</Link>
          </Nav>

           <div className='d-flex gap-3'>
           <Link href="/signin" className="btn btn-outline-success"><FontAwesomeIcon icon={faUser} /></Link>
            <Link href="/signup" className="btn btn-outline-info">Register</Link>
           </div>

        </Navbar.Collapse>
      </Container>
    </Navbar>

    <ModalInv show={show} handleClose= {handleClose}/>
    <Modal2 show={modalShow} handleClose2={handleClose2}></Modal2>
    </>

  );
}

export default Menu;