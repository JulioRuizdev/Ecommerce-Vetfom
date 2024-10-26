

export interface User{
    id: string;           
    name: string;          
    email: string;         
    emailVerified?: Date | null; 
    password: string;     
    role: string;          
    image?: string | null;               
}

export interface UserImage{
    id: number;
    url: string;
    userId: string;
}
