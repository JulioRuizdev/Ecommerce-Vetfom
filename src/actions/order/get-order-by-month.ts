// Supongamos que estás trabajando en un archivo en el lado del servidor (por ejemplo, `data.ts` o dentro del mismo componente con `use client`)
'use server'
import prisma from "@/lib/prisma";

export const getOrderByMonth = async () => {
    const orders = await prisma.order.findMany({
        where: {
            paidAt: {
                not: null
            }
        },
        select: {
            paidAt: true,
            total: true
        },
        orderBy: {
            paidAt: 'asc'
        }
    });

    const ordersByMonth = orders.reduce((acc, order) => {
        const month = order.paidAt ? order.paidAt.toISOString().slice(0, 7) : '';
        if (month) {
            if (!acc[month]) {
                acc[month] = 0;
            }
            acc[month] += order.total || 0;
        }
        return acc;
    }, {} as { [key: string]: number });

    const formattedOrders = Object.keys(ordersByMonth).map(month => ({
        name: new Date(month + '-01').toLocaleString('es-ES', { month: 'long', year: 'numeric' }),
        Ventas: ordersByMonth[month],
    }));

    return formattedOrders;
};
