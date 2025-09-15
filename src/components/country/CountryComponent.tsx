import {FC} from "react";

type TCountry={
    country: string
}


const CountryComponent: FC<TCountry> =({country})=>{
    return(
        <div>
            {country}
        </div>
    )
}
export default CountryComponent