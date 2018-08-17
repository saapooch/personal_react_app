import React from 'react'
import Page from '../components/page'
import Box from '../components/box'
import { DESCRIPTION } from '../lib/constants'
const saahith = '../static/images/saahith.jpg'

export default class About extends React.Component {

    constructor(props){
        super(props)
        this.content = React.createRef();
    }

    componentDidMount(){
        const script = document.createElement("script");

        script.src = "https://use.fontawesome.com/releases/v5.0.9/js/all.js";
        script.async = true;

        document.body.appendChild(script);
    }

    scrollToContentRef = () => {
        this.refs.content.scrollIntoView({behavior:"smooth"})
    }

  render() {
    return (
    <Page style='col about_wrapper'>
        <div className='row pic_row'>
            <div className='col-12 mx-auto'>
                <img src={saahith} className='pic' />
            </div>
        </div>

        <div className='row'>
            <div className='col-12 mx-auto'>
                <h3 className='title'> Saahith Pochiraju </h3>
            </div>
        </div>

        <div className='row'>
            <div className='col-10 mx-auto'>
                <div className='title_caption roboto'> { DESCRIPTION } </div>
            </div>
        </div>

        <div className='row'>
            <div className='col-10 mx-auto'>
                <div className="arrow bounce" onClick={this.scrollToContentRef}>
                    <a className="fa fa-arrow-down fa-2x"></a>
                </div>
            </div>
        </div>

        <div className='row box_row' ref="content">
            <div className='col-12 mx-auto text-center'>
                <h5 className='art'> <span className='art__span'> coming soon. </span> </h5>
            </div>
        </div>
    </Page>
    )
  }
}
