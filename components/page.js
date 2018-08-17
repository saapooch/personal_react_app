import Nav from './nav'

export default class Page extends React.Component {

	constructor(props){
		super(props);
	}

  render() {
    return (
	<div className="container-fluid">
		<div className="row wrapper">
			<Nav />
				<main className={this.props.style}>
					{this.props.children}
				</main>
		</div>
	</div>
    )
  }
}
