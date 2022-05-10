import React from "react";

const Info = () => {
  return (
    <div>
      {/* _____________card_____________ */}
      <div className="card-container flex justify-between px-6">
        <div className="card-1 bg-gradient-to-r from-secondary to-primary rounded-xl">
          <img className="icon" alt="icon-img" />
          Icon
          <h4>Opening Hours</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
            quae facilis, officia in illo consequuntur.
          </p>
        </div>
        <div className="card-2 bg-black rounded-xl mx-8">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
            alias cumque laudantium dicta nulla nesciunt.
          </p>
        </div>
        <div className="card-3 bg-gradient-to-r from-secondary to-primary rounded-xl">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus rerum totam commodi voluptate qui porro?
          </p>
        </div>
      </div>
      {/* _______card end__________ */}
    </div>
  );
};

export default Info;
