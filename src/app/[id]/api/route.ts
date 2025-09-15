import {getMovieSingle} from "@/services/movieSingle.service";
import {NextRequest} from "next/server";



export const GET = async (request: NextRequest, context: { params: Promise<{ id: string }> }
) => {
    console.log(request)
    const {id} = await context.params;
    const movieSingle = await getMovieSingle(id);
    return Response.json(movieSingle);
};