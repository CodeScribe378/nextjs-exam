import Menu from "@/components/menu/Menu";
import UserComponent from "@/components/user/UserComponent";
import GenreListComponent from "@/components/genre-list/GenreListComponent";

import'./HeaderComponent.css'
import FormComponent from "@/components/form/FormComponent";

const HeaderComponent =()=>{
    return(
        <div className='bg-gradient-to-r from-purple-950 to-indigo-800 h-32'>
            <div className={"box"}>
                <Menu/>
                <GenreListComponent/>
                <div className={"title"}>
                <p className='font-bold text-white drop-shadow-lg'>TMBD</p>
                <UserComponent/>
                </div>
            </div>
            <FormComponent/>
        </div>
    )
}
export default HeaderComponent