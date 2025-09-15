import {FC} from "react";

type Props={
    item: string
}
const GenreSingleComponent: FC<Props> =({item})=>{

    return(
        <div>{item}</div>
    )
}
export default GenreSingleComponent