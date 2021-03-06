import Link from 'next/link'
import '../styles/main.scss'

const ListElement = ({href, label}) => (
	<li className="w-100">
		<Link href={href}><a className="nav-link navv pl-0 roboto">{label}</a></Link>
	</li>
)


export default class Nav extends React.Component {

	componentDidMount(){
        const script = document.createElement("script");

        script.src = "https://use.fontawesome.com/releases/v5.0.9/js/all.js";
        script.async = true;

        document.body.appendChild(script);
    }

	render(){

	return (
	<aside className="col-12 col-md-3 nav_bar_container">
		<nav className="navbar navbar-light navbar-expand-md align-items-start flex-md-column flex-row h-50">
			<a href='/'><span className="navbar-brand">Saahith Pochiraju</span></a>
			<button href className="navbar-toggler toggle cbutton--effect-sanja" data-toggle="collapse" data-target=".sidebar">
			   <i className="fa fa-bars" aria-hidden="true"></i>
			</button>
			<div className="collapse navbar-collapse sidebar">
				<ul className="flex-column navbar-nav w-100 justify-content-between mx-auto">
					<ListElement href='/about' label='About' />
					<ListElement href='/projects' label='Projects' />
					<ListElement href='/bnt' label='Beats & Tweets' />
					<ListElement href='/contact' label='Contact' />
				</ul>
			</div>
		</nav>
		<nav className="navbar navbar-light navbar-expand-md align-items-start flex-md-column flex-row h-50">
		<div className="collapse navbar-collapse sidebar">
			<ul className="flex-column navbar-nav w-100 justify-content-between social-media">
				<li className="w-100">
					<Link href='https://www.linkedin.com/in/saahithpochiraju/'><a className="nav-link pl-0 roboto linkedin">Linkedin</a></Link>
				</li>
				<li className="w-100">
					<Link href='https://twitter.com/saapooch'><a className="nav-link pl-0 roboto twitter">Twitter</a></Link>
				</li>
				<li className="w-100">
					<Link href='https://github.com/saapooch'><a className="nav-link pl-0 roboto github">Github</a></Link>
				</li>
				<li className="w-100">
					<Link href='https://www.facebook.com/saahith.pochiraju'><a className="nav-link pl-0 roboto facebook">Facebook</a></Link>
				</li>
			</ul>
			</div>
		</nav>
	</aside>
	)}
}
