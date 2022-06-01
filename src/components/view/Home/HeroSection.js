import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
	return (
		<section className="custom-container-home" style={{backgroundImage: "url('/images/home/herosection.png')", backgroundSize:"cover"}}>
			<div className="hero-sec row flex-column-reverse flex-md-row m-0" style={{paddingTop:"20%"}}>
				<div className="col-md-6 text-center text-md-start  my-auto p-0 px-5">
					<h1 className="H2" style={{fontWeight:"700", fontSize:"40px", color:"white"}}> The Skilling Metaverse</h1>
					<p className="H3 py-lg-3 py-0" style={{fontSize:"24px", color:"white"}}>Immerse. Adapt. Evolve.</p>
					<br />
					<Link to="/request-demo">
						<button className="custom-btn H6">Get In Touch ⟶</button>
					</Link>
				</div>
				{/* <div className="col-md-6  my-auto position-relative">
					<img
						src="/images/home/Oculus-Quest-2-tn_ccexpress 1.svg"
						alt=""
						className="img-fluid w-100"
					/>
					<img
						src="/images/home/blueShadow.svg"
						alt=""
						className="img-fluid blue-shadow"
					/>
				</div> */}
			</div>
		</section>
	)
}

export default HeroSection
