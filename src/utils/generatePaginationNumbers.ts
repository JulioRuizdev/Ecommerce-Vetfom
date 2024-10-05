

export const generatePaginationNumbers = (currentPage: number, totalPages:number ) =>{
    //si el numero total de paginas es 7 o menos
    //muestra las paginas sin 3 puntos
    if(totalPages <= 7){
        return Array.from({length: totalPages}, (_, i) => i+1);
    }

    //si la pagina actual esta entre laas primeras 3 paginas
    //muestra las primeras 3, puntos supensivos y las ultimas 2
    if(currentPage <= 3){
        return [1,2,3,'...',totalPages-1,totalPages];
    }

    //si la pagina actual esta entre las ultimas 3 paginas
    //muestra las primeras 2, puntos suspensivos y las ultimas 3
    if(currentPage >= totalPages - 2){
        return [1,2,'...',totalPages-2,totalPages-1,totalPages];
    }

    //si la pagina actual esta en otro lugar medio
    //mostrar la primera pagina, puntos suspensivos, la pagina actual y vecinos
    return [
        1,
        '...',
        currentPage - 1,
        currentPage,
        currentPage + 1,
        '...',
        totalPages
    ]



}