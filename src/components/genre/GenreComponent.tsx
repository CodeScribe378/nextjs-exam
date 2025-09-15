import {FC} from "react";
import {emojiBadges} from "@/helpers/emojiBadges";
import GenreSingleComponent from "@/components/genre-single/GenreSingleComponent";

type Props={
    genre: number
}

const GenreComponent: FC<Props> =({genre})=>{

        const emojiResult: string[] = [];
        for (const item of emojiBadges) {
            if (item.number === genre) {
                emojiResult.push(item.emoji);
            }
        }

    return(
        <div>
            {emojiResult.map((item, index)=><GenreSingleComponent key={index} item={item}/>)}
        </div>
    )
}
export default GenreComponent
