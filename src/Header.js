import React, { useState } from 'react';
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { AnchorButton,Button, Navbar, Alignment, Dialog } from "@blueprintjs/core";
import { fakeAuth } from "./Auth";
import './HomeComponents/home.css';
import Fox from "./Images/Metamask.png";
import logo from "./Images/logo.png";
import {TinyButton as ScrollUpButton} from "react-scroll-up-button"; 


const ourNetworkVersion = "3";

function Header(props) {
	const [addr, setAddr] = useState('Undefined');
	const [dialog, setDialog] = useState(false);

	const ethereum = window.ethereum;
	const handleLogin = async () => {
		await ethereum.enable();
		if(ethereum.networkVersion === ourNetworkVersion) {
			fakeAuth.authenticate();
		}
		setAddr(ethereum.selectedAddress);
		setDialog(true);
	}

	const handleSignOut = () => {
        fakeAuth.signout(() => props.history.push("/"))
    }
//,zIndex: "10" 

	return (
			<Navbar fixedToTop="true"  style={{position :"fixed" ,zIndex: "100"  }}> 
				 <ScrollUpButton />    
		  {/* // */}
		   <Navbar.Group align={Alignment.LEFT}>
			<Navbar.Heading >
			 <Link to="/" class="logo" >
			  {<img 
			   src={logo} 
			   alt="logo" 
			   height="48"
			   />
			  } Trusty Tracker
			 </Link>
			</Navbar.Heading>
			<Navbar.Divider />
		
			<AnchorButton
			  className="bp3-minimal" 
			  icon="search"
			  text="Search"
			  href="/#serachBlock"
			/>
		
			<AnchorButton
			  className="bp3-minimal" 
			  icon="info-sign"
			  text="About Us"
			  href="/#aboutUs"
			/>
		
			<AnchorButton
			  className="bp3-minimal" 
			  icon="tree"
			  text="Our Farms"
			  href="/#Carousel"
			/>
		   </Navbar.Group>
		   <Navbar.Group align={Alignment.RIGHT}>
			{ fakeAuth.isAuthenticated ? (
			 <div>
			 <Link to="/process">
			 <Button 
			  className="bp3-minimal" 
			  icon="numbered-list" 
			  text="Process" 
			 /></Link>
			 <Button 
			 className="bp3-minimal" 
			 onClick={handleSignOut}
			 icon="log-out" 
			 text="Sign out" 
			/>
			 </div>
			) : (
			 <Button 
			  className="bp3-minimal" 
			  onClick={handleLogin} 
			  icon="log-in" 
			  text="Login" 
			 />
			) }
		   </Navbar.Group>
{/* 登入部分--------------------------------------------------------------------------------------- */}
				 <Dialog
     className="paragraph"
     style={{width: 350,height: 525, background:"orange" }}
     onClose={() => setDialog(false)}
     title = "Metamask Login"
     isOpen={dialog}
    > 
    
     <div className="metaMaskLogin">
      <p className="paragraph">
       <br/>
       <img src={Fox} alt="Fox" width="300" height="300" margin="300" ></img><br/>
       {/* &nbsp;<i class="material-icons">mail</i> */}
          &nbsp;Address<br/><br/> &nbsp;{addr} <br/><br/>
       {/* &nbsp;<i intent='warning'class="material-icons">wifi</i> */}
       &nbsp;NetworkVersion<br/><br/>&nbsp; {ethereum.networkVersion} <br/>
      </p>
      {!fakeAuth.isAuthenticated && <p>Please change your network version.</p>}
     
   </div>
     <Link  to="/process" >
    <Button type="button" style={{color:"white", fontFamily:"sans-serif"}} className="bp3-minimal" fill="true" onClick={()=>setDialog(false)}  disabled={!fakeAuth.isAuthenticated} > 
    LOGIN
    </Button> 
     </Link> 
     
    </Dialog>
 
  </Navbar>
 );
}
const HeaderWithRouter = withRouter(Header);

export { HeaderWithRouter };
