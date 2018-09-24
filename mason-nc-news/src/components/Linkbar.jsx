import React from 'react';
import { Link } from 'react-router-dom';

const Linkbar = () => {
  return (
    <div>
      <nav className="links">
        <span className="n">NC</span>ategories:{" "}
        <Link className="text-link" to="/nc/coding" >coding</Link>{" • "}
        <Link className="text-link" to="/nc/football" >football</Link>{" • "}
        <Link className="text-link" to="/nc/cooking" >cooking</Link>{" • "}
      </nav>
    </div>
  );
};

export default Linkbar;