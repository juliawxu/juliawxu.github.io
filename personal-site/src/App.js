import React, { Component } from 'react';
import gmail from './circled-envelope-icon-100.png';
import linkedin from './linkedin-icon-96.svg';
import github from './github-icon-90.svg';
import portrait from './portrait.GIF';
import './App.css';

class App extends Component {
  render() {
    return (
        <section id="about">
          <div class="container">
  				  <div class="row align-items-center">
  					  <div class="col-12 col-md-6">
                <img class="portrait" alt="portrait" src={portrait} />
              </div>
  					  <div class="col-12 col-md-6">
  						  <h1 class="text-center">Hello!</h1>
  						  <p class="text-center">Nice to meet you! <span role="img" aria-label="waving hand emoji">👋</span> I'm Julia, a software engineer and doodler.</p>
                <section id="contact">
                  <div class="container">
                    <div className="Contact">
                      <div class="d-flex justify-content-around">
                        <a href="mailto:juliaxu@uchicago.edu">
                          <img alt="email icon" src={gmail} height="50vmin" width="50vmin"/>
                        </a>
                        <a href="https://www.linkedin.com/in/juliawxu/">
                          <img alt="LinkedIn icon" src={linkedin} height="50vmin" width="50vmin"/>
                        </a>
                        <a href="https://github.com/juliawxu">
                          <img alt="Github icon" src={github} height="50vmin" width="50vmin"/>
                        </a>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
						</div>
					</div>
        </section>
    );
  }
}

export default App;
