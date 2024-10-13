
import {getPaginatedProductsWithImages} from './product/product-pagination';
import {getProductBySlug} from './product/get-product-by-slug';
import {getStockBySlug} from './product/get-stock-by-slug';

import {login, authenticate} from './auth/login';
import {logout} from './auth/logout';
import {registerUser} from './auth/register';

import {setUserAddress} from './address/set-user-address';
import {deleteUserAddress} from './address/delete-user-address';
import {getUserAddress} from './address/get-user-address';

import {placeOrder} from './order/place-order';
import {getOrdersByUser} from './order/get-orders-by-user';
import {getOrderById} from './order/get-order-by-id';
import {getPaginatedOrders} from './order/get-paginated-orders';

import {setTransactionId} from './payments/set-transaction-id';
import {paypalCheckPayment} from './payments/paypal-check-payment';


import {getPaginatedUsers} from './user/get-paginated-users';
import {changeUserRole} from './user/change-user-role';


import {getCategories} from './category/get-categories';

import {createUpdateProduct} from './product/create-update-product';

import {deleteProductImage} from './product/delete-product-image';


export {
    getPaginatedProductsWithImages,
    getProductBySlug,
    getStockBySlug,
    authenticate,
    login,
    logout,
    registerUser,
    setUserAddress,
    deleteUserAddress,
    getUserAddress,
    placeOrder,
    getOrdersByUser,
    getOrderById,
    getPaginatedOrders,
    setTransactionId,
    paypalCheckPayment,
    getPaginatedUsers,
    changeUserRole,
    getCategories,
    createUpdateProduct,
    deleteProductImage

};