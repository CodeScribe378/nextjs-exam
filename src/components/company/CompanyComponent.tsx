import {IProduction_companies} from "@/models/detail-movie/IDetailMovie";
import {FC} from "react";
import {imageBaseURL} from "@/services/api.service";


type TCompany={
    company: IProduction_companies
}
const CompanyComponent: FC<TCompany> =({company})=>{

    return(
        <div>
            <p> company: {company.name} </p>
            <p>country of the company: {company.origin_country}</p>
            {company.logo_path && <img className='w-60' src={ imageBaseURL + company.logo_path} alt='poster'/>}
        </div>
    )
}
export default CompanyComponent