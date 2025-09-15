import {ISpoken_languages} from "@/models/detail-movie/IDetailMovie";
import {FC} from "react";

type TSpokenLanguage = {
    item: ISpoken_languages
}
const SpokenLanguageComponent: FC<TSpokenLanguage> =({item})=>{
    return(
        <div>
            <p> {item.name} - english name: {item.english_name} - iso_639_1: {item.iso_639_1}</p>
        </div>
    )
}
export default SpokenLanguageComponent