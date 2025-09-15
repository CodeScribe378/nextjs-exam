import {IProduction_countries} from "@/models/detail-movie/IDetailMovie";
import {FC} from "react";

type TProductionCountry={
    production: IProduction_countries
}

const ProductionCountryComponent: FC<TProductionCountry> =({production})=>{
    return(
        <div>
            <p>name: {production.name} iso_3166_1: {production.iso_3166_1}</p>
        </div>
    )
}
export default ProductionCountryComponent