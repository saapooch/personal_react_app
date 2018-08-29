import {Component} from 'react'
import Art from '../components/art'

export default class Contact extends Component {

	render() {
		return (
			<Art tag='contact.'>
				<div className='contact-box'>
					<div className='row'>
									<div className='col-12'>
                      <img className='icon' src='static/images/sp_icon.png' />
                  </div>
                  <div className='col-12 space'>
                      <div className='row '>
                          <h4 className='roboto'> Saahith Pochiraju </h4>
                      </div>
                      <div className='row'>
                          <h7 className='roboto'> saahith116@gmail.com </h7>
                      </div>
                      <div className='row'>
                          <h7 className='roboto'> New York, NY </h7>
                      </div>
											<ul className="row" >
												<li className="list-inline-item" >
													<a className="nav-link first" href='https://twitter.com/saapooch' > <i className="fab fa-twitter" ></i> </a>
												</li>
						              <li className="list-inline-item" >
						                <a className="nav-link" href='https://www.wholecell.org/' > <i className="fab fa-linkedin-in"></i> </a>
						              </li>
						              <li className="list-inline-item" >
						                <a className="nav-link" href='https://github.com/saapooch' > <i className="fab fa-github" ></i> </a>
						              </li>
						              <li className="list-inline-item" >
						                <a className="nav-link"  href='mailto:saahith116@gmail.com' > <i className="far fa-envelope" ></i> </a>
						              </li>

						          </ul>
											<script defer src="https://use.fontawesome.com/releases/v5.0.9/js/all.js" integrity="sha384-8iPTk2s/jMVj81dnzb/iFR2sdA7u06vHJyyLlAd4snFpCl/SnyUjRrbdJsw1pGIl" crossOrigin="anonymous"></script>
                  </div>
							</div>
				</div>
			</Art>
		)
	}
}
