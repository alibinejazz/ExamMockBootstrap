import React from "react";

const Footer = () => (
  <footer className="page-footer font-small blue pt-4" style={{ position: "sticky", }}>
    <div className="container-fluid text-center text-md-left">
      <div className="row">
        <div className="col-md-15 mt-md-0 mt-3" style={{ backgroundColor: "black", color: "white" }}>
          <h5 className="text-uppercase">Exotourista</h5>
          <p>You can get the best hotels here.</p>
        </div>
        <hr className="clearfix w-100 d-md-none pb-0" />
      </div>
    </div>
    <div className="footer bg-dark text-white text-center py-3" style={{ backgroundColor: "black", color: "white" }}>
      <div className="container">© 2020 Exotourista</div>
    </div>
  </footer>
);

export default Footer;
