import {notFound} from 'next/navigation';

interface Props{
    params: {
        id: string;
    }
}



export default function ( {params}: Props){

    const {id} = params;

    if( id === 'food'){
        notFound();

    }

    return (
        <div>
            <h1>Category page {id}</h1>
        </div>
    )
}