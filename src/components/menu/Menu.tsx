import Link from "next/link";

const Menu=()=>{
    return(
        <ul>
            <li><Link className='inline-block px-5 py-2 bg-violet-600 text-white font-bold rounded-lg shadow-md hover:bg-violet-700 hover:shadow-lg transition duration-300 ml-10' href={'/'}>All Movie</Link></li>
        </ul>
    )
}
export default Menu