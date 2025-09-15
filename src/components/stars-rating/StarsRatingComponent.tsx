import {FC} from "react";

type Props = {
    movie: number;
    max?: number;
};

const StarsRatingComponent: FC<Props> = ({ movie, max = 5 }) => {

        const normalizedRating = (movie / 10) * max;
        const stars: string [] = [];

        for (let i = 1; i <= max; i++) {
            if (i <= Math.floor(normalizedRating)) {
                stars.push('★');
            } else if (i - normalizedRating < 1) {
                stars.push('⯨');
            } else {
                stars.push('☆');
            }
        }


    return (
        <div>
            {stars.join(' ')} <span>({movie.toFixed(1)})</span>
        </div>
    );
};
export default StarsRatingComponent

