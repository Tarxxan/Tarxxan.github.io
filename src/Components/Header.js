import React from 'react'

const Header = () => {
    return (
        <header>
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top navbar-rounded shadow">
        <a class="navbar-brand" href="#top">Christian Pangia-Henneveld</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse bg-dark" id="navbarNav">
          <ul class="nav navbar-nav ms-auto w-100 justify-content-end">
            <li class="nav-item">
              <a class="nav-link" href="#AboutMeClass">About Me</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#projects-div">Projects</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="mailto:cpangia881@gmail.com">Contact Me</a>
            </li>
          </ul>
        </div>
</nav>  
        </header>
    )
}

export default Header
