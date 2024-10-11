'use server';

import { PayPalOrderStatusResponse } from "@/interfaces";
import prisma from "@/lib/prisma";

export const paypalCheckPayment = async( paypalTransactionId: string) => {
    console.log('paypalCheckPayment', paypalTransactionId);

    const authToken = await getPaypalBearerToken();
    
    console.log("AUTHTOKEN: " +authToken);

    if( !authToken) {
        return{
            ok: false,
            message: 'No se pudo obtener el token de autenticacion'
        }
    }

    const resp = await verifyPayPalPayment(paypalTransactionId, authToken);

    if (!resp){
        return{
            ok: false,
            message: 'Error al verificar el pago'
        }
    }

    const { status, purchase_units} = resp;
    // const { amount } = purchase_units[0]; //TOdo: invoiceID

    console.log(status, purchase_units);

    if (status !== 'COMPLETED'){
        return {
            ok: false,
            message: 'Aun no se ha pagado en paypal'
        }
    }

    //TODO: realizar actualizacion en bd

    try {

        await prisma.order.update({
            where: {id: '81ff7060-4a36-462a-9dcc-105d3db9e73e'},
            data: {
                isPaid: true,
                paidAt: new Date(),
            }
        })

        //todo: revalidar el path

        
    } catch (error) {
        console.error(error);
        return {
            ok: false,
            message: '500 - El pago no se pudo realizar'
        }
    }


}

const getPaypalBearerToken = async(): Promise<string|null> => {

    const PAYPAL_CLIENT_ID = "ASioRFky8pEHgAHC6qYMs5zb1JgrNkVjojhBvI8LqHl36zMu8sSduU9sYLkIIfX5pwihW3eKb0QfRXrY";
    const PAYPAL_SECRET = "EPGz1iW31rmLEPa3--lQv_vBW0P9TD2TlyNNrvWNTAzvbq4P2YrwcIaqHiQXYNzx52EleMaZY6_vNk2Z";
    const oauth2Url= "https://api-m.sandbox.paypal.com/v1/oauth2/token";

    const base64Token = Buffer.from(
        `${ PAYPAL_CLIENT_ID }:${ PAYPAL_SECRET }`,
        "utf-8"
    ).toString('base64');

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append("Authorization", `Basic ${ base64Token }`);
    
    const urlencoded = new URLSearchParams();
    urlencoded.append("grant_type", "client_credentials");
    
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
    };

    try {
        const result = await fetch(oauth2Url, {
            ...requestOptions,
            cache: 'no-store'
        }).then(r => r.json());
        
        return result.access_token;
        
    } catch (error) {
        console.error(error);
        return null
    }

}

const verifyPayPalPayment = async(paypalTransactionId: string, bearerToken:string): Promise<PayPalOrderStatusResponse|null> =>{

    const paypalOrderUrl = `https://api.sandbox.paypal.com/v2/checkout/orders/${paypalTransactionId}`;

    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${bearerToken}`);

    const requestOptions = {
    method: "GET",
    headers: myHeaders,
    };

    try {
        const resp = await fetch(paypalOrderUrl, {
            ...requestOptions,
            cache: 'no-store'
        }).then(r => r.json());

        return resp;
    } catch (error) {
        console.error(error);
        return null;
    }


}