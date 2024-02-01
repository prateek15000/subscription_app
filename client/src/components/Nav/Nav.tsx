// import {Navbar, NavItem , NavLink} from "react-bootstrap";
// import {Link} from "react-router-dom";
// const Nav =() =>{
//     return (
//     <Navbar>
//         <NavItem>
//            <NavLink>
//             <Link to="/" className="nav-link">Home</Link>
//            </NavLink>
//         </NavItem>
//         {
//             localStorage.getItem("token") && (
//                 <NavItem>
//                 <NavLink>
//                  <Link to="/" className="nav-link"style={{marginLeft: "2rem"}}>Logout</Link>
//                 </NavLink>
//              </NavItem>
//             )
//         }
//         </Navbar>
//     ); 
// };

// export default Nav;

import { Navbar, NavItem, NavLink } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";

import styled from "styled-components";
import { UserContext } from "../../context";

const LeftNavContainer = styled.div`
  margin-left: auto;
`;

const Nav = () => {
  const [state, setState] = useContext(UserContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    setState({ data: null, loading: false, error: null });
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <Navbar>
      <NavItem>
        <Link to="/" className="nav-link">
          Home
        </Link>
      </NavItem>
      {state.data && (
        <LeftNavContainer>
          <NavItem>
            <NavLink onClick={handleLogout}>Logout</NavLink>
          </NavItem>
        </LeftNavContainer>
      )}
    </Navbar>
  );
};

export default Nav;