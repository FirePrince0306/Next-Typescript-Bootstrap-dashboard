import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export type PageHeaderProps = {
    handleCollapsedChange ?: () => void;
    handleToggleSidebar ?: () => void;
};

const PageHeader = ({ handleCollapsedChange, handleToggleSidebar }: PageHeaderProps) => {
  return (
    <>
        <Navbar bg="primary" variant="dark" fixed="top" className="py-0">
            <Navbar.Brand href="/" className="fw-bold text-center overflow-visible text-nowrap me-0">Fleet Management</Navbar.Brand>

            <Nav>
                <div className="nav-left d-flex flex-wrap align-items-center">
                    <div className="divider"></div>
                    
                    <span className="navbar-toggler d-none d-md-block icon large mx-2 mx-md-3 p-0 border-0 text-white d-flex" onClick={handleCollapsedChange}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" className="eva eva-menu" fill="currentColor">
                            <g data-name="Layer 2">
                                <g data-name="menu">
                                    <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"></rect>
                                    <rect x="3" y="11" width="18" height="2" rx=".95" ry=".95"></rect>
                                    <rect x="3" y="16" width="18" height="2" rx=".95" ry=".95"></rect>
                                    <rect x="3" y="6" width="18" height="2" rx=".95" ry=".95"></rect>
                                </g>
                            </g>
                        </svg>
                    </span>

                    <span className="btn-toggler d-block d-md-none icon large mx-2 mx-md-3 border-0 text-white d-flex" onClick={handleToggleSidebar}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" className="eva eva-menu" fill="currentColor">
                            <g data-name="Layer 2">
                                <g data-name="menu">
                                    <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"></rect>
                                    <rect x="3" y="11" width="18" height="2" rx=".95" ry=".95"></rect>
                                    <rect x="3" y="16" width="18" height="2" rx=".95" ry=".95"></rect>
                                    <rect x="3" y="6" width="18" height="2" rx=".95" ry=".95"></rect>
                                </g>
                            </g>
                        </svg>
                    </span>

                    <div className="divider"></div>
                </div>
                <div className="nav-right d-flex align-items-center">
                    <div className="divider d-none d-md-block"></div>
                    <div className="user-avatar rounded-circle overflow-hidden">
                        <img className="image" src="https://st.depositphotos.com/1008939/1880/i/950/depositphotos_18807295-stock-photo-portrait-of-handsome-man.jpg" width="46" height="46" />
                    </div>
                    <div className="user-info text-white">
                        <h5 className="user-name caption mb-0">User Name</h5>
                        <p className="user-email subtitle-2 mb-0 text-white">name.surname@gmail.com</p>
                    </div>
                    <div className="user-icon text-white d-flex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" className="eva eva-arrow-ios-downward icon" fill="currentColor">
                            <g data-name="Layer 2">
                                <g data-name="arrow-ios-downward">
                                    <rect width="24" height="24" opacity="0"></rect>
                                    <path d="M12 16a1 1 0 0 1-.64-.23l-6-5a1 1 0 1 1 1.28-1.54L12 13.71l5.36-4.32a1 1 0 0 1 1.41.15 1 1 0 0 1-.14 1.46l-6 4.83A1 1 0 0 1 12 16z"></path>
                                </g>
                            </g>
                        </svg>
                    </div>
                </div>
            </Nav>
        </Navbar>
    </>
  );
}

export default PageHeader;
