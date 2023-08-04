import {Tour} from "./Tour.jsx";

export const List = ({tours}) => {
	return  <section>
		{tours.map((tour) => {
			return <Tour key={tour.id} {...tour} />
		})}
	</section>
}

