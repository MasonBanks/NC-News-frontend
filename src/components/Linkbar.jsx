import React from 'react';
import { Link } from 'react-router-dom';

const Linkbar = () => {
  return (
    <div>
      <nav className="links">
        <Link className="text-link" to="/nc/coding" id="links">coding</Link>{" • "}
        <Link className="text-link" to="/nc/football" id="links">football</Link>{" • "}
        <Link className="text-link" to="/nc/cooking" id="links">cooking</Link>
        <div className="ncategory">
          <span className="n">NC</span>ategories:{" "}
        </div>
      </nav>

    </div>
  );
};

export default Linkbar;