import React, {FC} from "react";

type Props={
    children: React.ReactNode
}

const MovieLayout: FC<Props> =({children})=>{
    return(
        <div>
            {children}
        </div>
    )
}
export default MovieLayout