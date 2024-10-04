import {initialData} from './seed';

interface Abc{
    assd: String;
}

async function main() {
   
   

   
    console.log(initialData);
}



(() => {
    if(process.env.NODE_ENV === 'production') return; 

    main();
})();