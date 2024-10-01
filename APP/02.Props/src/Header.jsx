import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import "./Main.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
export const Header = () => {
  return (
    <>
      <Container>
        <Navbar className="head navbar-expand-lg rounded-5 top-0 z-index-fixed shadow position-absolute my-3 py-2 px-3 mx-4">
          <Container>
            <div className='w-15'>
              <span className='nav-logo'>Soft UI Design System</span>
            </div>
            <div className='head-sec w-75 d-flex  align-items-center ms-5'>
              <ul className='first-ul d-flex w-50 mb-0 ms-5'>
                <li> <Dropdown>
                  <Dropdown.Toggle variant="transparent" id="dropdown-basic">
                    Pages
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">About Us</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Contact Us</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Author</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown></li>

                <li>
                  <Dropdown>
                    <Dropdown.Toggle className='none' variant="transparent" id="dropdown-basic">
                      Blocks
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Page Section</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Navigation</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Input Areas</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
                <li>
                  <Dropdown>
                    <Dropdown.Toggle variant="transparent" id="dropdown-basic">
                      Docs
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Getting Started</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Foundation</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Components</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
              </ul>
              <ul className='second-ul d-flex align-items-center w-50 mb-0 ps-0'>
                <li className="nav-item marg">
                  <a className="nav-link nav-link-icon me-2" href="https://github.com/creativetimofficial/soft-ui-design-system" target="_blank">
                    <FontAwesomeIcon icon={faGithub} />
                    <p className="d-inline text-sm z-index-1 ps-1 font-weight-bold" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-original-title="Star us on Github">Github</p>
                  </a>
                </li>
                <li className="nav-item my-auto ms-3 ms-lg-0">
                  <a href="https://www.creative-tim.com/builder?ref=navbar-soft-design-system" className="btn on btn-sm rounded-5 mb-0 me-1 mt-2 mt-md-0">Online Builder</a>
                </li>
                <li className="nav-item my-auto ms-2 ms-lg-0 onn-2">
                  <a href="#download-soft-ui " className="btn-sm onn rounded-5 mb-0 me-1 mt-2 mt-md-0">Free Download</a>
                </li>
              </ul>
            </div>
          </Container>
        </Navbar>
      </Container>
    </>
  )
}
