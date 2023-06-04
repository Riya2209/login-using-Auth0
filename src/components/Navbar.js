import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";

const Navbar = () => {

    const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0();
    
    return(
        <>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li>
                    {
                        isAuthenticated && <p>{user.name}</p>
                    }
                </li>
                {
                    isAuthenticated ? ( 
                        <li>
                            <Button className="my-btn" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                                Log Out
                            </Button>
                        </li>
                     ) : ( 
                        <li>
                            <Button className="my-btn" onClick={() => loginWithRedirect()}>Log In</Button>
                        </li>
                        
                      )
                }
                
                
            </ul>
        </nav>
        </>
    )
}

export default Navbar;