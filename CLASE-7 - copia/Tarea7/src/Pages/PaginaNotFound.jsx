import React from 'react'
import './PaginaNotFound.css'

const PaginaNotFound = () => {
  return (
    <div>PaginaNotFound
      <h1>404 Error Page #2</h1>
      <p className="zoom-area"><b>CSS</b> animations to make a cool 404 page. </p>
      <section className="error-container">
        <span className="four"><span class="screen-reader-text">4</span></span>
        <span className="zero"><span class="screen-reader-text">0</span></span>
        <span className="four"><span class="screen-reader-text">4</span></span>
      </section>
      <div className="link-container">
        <Link
          target="_blank"
          to="/"
          className="more-link"
        >
          Home
        </Link>
      </div>
    </div>

  )
}

export default PaginaNotFound