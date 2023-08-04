import {useState} from "react";

export const Tour = ({image, location, days}) => {

	const [tour, setTour] = useState({image,  location, days })  // array destructuring

	const handleClickInc = () => {

		// triggers re-render everytime the function is called
		setTour({image: tour.image, location: tour.location, days: (days +1)})
	}

	const handleClickDec = () => {
		// triggers re-render everytime the function is called
		setTour({image: tour.image, location: tour.location, days: (tour.days -1)})
	}
 if (two == 2)


	console.log(days)
	return (

		<article className={'tour'}>
			<img src={tour.image} alt={location} className={'img'} />
			<div>
				<h4> {tour.location}</h4>
				<p>
					<button type={'button'} className={'btn'} onClick={handleClickDec}> decrease</button>
					<span> {tour.days} days </span>
					<button className={'btn'} onClick={handleClickInc}> increase </button>
				</p>
			</div>
		</article>
	)
}