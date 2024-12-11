import React from "react";

// texto con titulo y boton

const Jumbotron = ()=>{
    return ( 
    <div className="container">
    <div class="card border border-0 mt-5">
        <div className="card-body">
          <h1 className="card-title col-12 col-mb">A Warm Welcome!</h1>
          <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, facilis eveniet nemo tenetur animi earum, laborum, ipsa consectetur quia numquam veritatis deserunt voluptate unde aliquam? Iure deleniti autem quia repellendus</p>
          <a href="#" className="btn btn-primary">Call to Action!</a>
        </div>
      </div>
      </div>

    );
};

export default Jumbotron;