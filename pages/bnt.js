import {Component} from 'react'
import Page from '../components/page'

export default class BnT extends Component {

	componentDidMount(){
		const script = document.createElement("script");

		script.src = "https://platform.twitter.com/widgets.js";
		script.async = true;

		document.body.appendChild(script);
	}

	render() {
		return (
			<Page style='col bnt_wrapper'>
				<div className='BNT'>
					<h4 className='BNT_title pads'> <span className='BNT_backdrop nixie'> Beats N' Tweets </span> </h4>
					<div className='row'>
						<div className='offset-1 offset-md-1 col-10 col-md-5 p-3'>
							<div className='BNT_col'>
								<iframe allow="autoplay *; encrypted-media *;" frameborder="0" height="150"  sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/album/wake-up/1421241217?i=1421243049" width="100%"></iframe>
								<iframe allow="autoplay *; encrypted-media *;" frameborder="0"  height="150" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/album/95-till-infinity/1279423222?i=1279423849" width="100%"></iframe>
		                        <iframe allow="autoplay *; encrypted-media *;" frameborder="0"  height="150" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/album/lazy-boy/1337790882?i=1337791444" width="100%"></iframe>
		                        <iframe allow="autoplay *; encrypted-media *;" frameborder="0"  height="150" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/album/in-a-sentimental-mood/409726?i=409723&app=music" width="100%"></iframe>
		                        <iframe allow="autoplay *; encrypted-media *;" frameborder="0"  height="150" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/album/you-only-live-once/299740383?i=299740483" width="100%"></iframe>
		                        <iframe allow="autoplay *; encrypted-media *;" frameborder="0"  height="150" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/album/dreams/202271826?i=202272624" width="100%"></iframe>
		                        <iframe allow="autoplay *; encrypted-media *;" frameborder="0" height="150" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/album/long-live-a%24ap/581997130?i=581997146" width="100%"></iframe>
		                        <iframe allow="autoplay *; encrypted-media *;" frameborder="0" height="150" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/album/salad-days/799685692?i=799685693&app=music" width="100%"></iframe>
		                        <iframe allow="autoplay *; encrypted-media *;" frameborder="0" height="150" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/album/eventually/989492285?i=989492311&app=music" width="100%"></iframe>
		                        <iframe allow="autoplay *; encrypted-media *;" frameborder="0" height="150" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/album/put-me-thru/1065681363?i=1065681698" width="100%"></iframe>
		                        <iframe allow="autoplay *; encrypted-media *;" frameborder="0" height="150" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/album/tourist/335804043?i=335804235" width="100%"></iframe>
		                        <iframe allow="autoplay *; encrypted-media *;" frameborder="0" height="150" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/album/it-never-rains-in-southern-california/385801835?i=385802012" width="100%"></iframe>
							</div>
						</div>
						<div className='offset-1 offset-md-0 col-10 col-md-5 p-3'>
							<div className='BNT_col'>
								<a className="twitter-timeline" href="https://twitter.com/saapooch?ref_src=twsrc%5Etfw">Tweets by saapooch</a>
							</div>
						</div>
					</div>
				</div>
			</Page>
		)
	}
}
