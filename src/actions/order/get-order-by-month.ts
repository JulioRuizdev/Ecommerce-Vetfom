// server side
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

    let bestMonth = { month: '', sales: 0 };
    let worstMonth = { month: '', sales: Infinity };
    let maxSale = 0;

    const formattedOrders = Object.keys(ordersByMonth).map(month => {
        const sales = ordersByMonth[month];
        
        if (sales > bestMonth.sales) {
            bestMonth = { month, sales };
        }
        if (sales < worstMonth.sales) {
            worstMonth = { month, sales };
        }
        
        return {
            name: new Date(month + '-01').toLocaleString('es-ES', { month: 'long', year: 'numeric' }),
            Ventas: sales,
        };
    });

    maxSale = Math.max(...orders.map(order => order.total));

    return {
        chartData: formattedOrders,
        bestMonth: {
            month: new Date(bestMonth.month + '-01').toLocaleString('es-ES', { month: 'long', year: 'numeric' }),
            sales: bestMonth.sales,
        },
        worstMonth: {
            month: new Date(worstMonth.month + '-01').toLocaleString('es-ES', { month: 'long', year: 'numeric' }),
            sales: worstMonth.sales,
        },
        maxSale
    };
};