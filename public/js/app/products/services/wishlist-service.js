/**
 * [y] hybris Platform
 *
 * Copyright (c) 2000-2015 hybris AG
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of hybris
 * ("Confidential Information"). You shall not disclose such Confidential
 * Information and shall use it only in accordance with the terms of the
 * license agreement you entered into with hybris.
 */

'use strict';

/**
 *  Encapsulates access to the CAAS product API.
 */
angular.module('ds.products')
    .factory('WishSvc', ['WishREST','GlobalData',  function(WishREST, GlobalData){
        return {
            queryWishList: function() {
	    	return WishREST.all(GlobalData.customerAccount.id+'/wishlistItems').getList();
            },
            save: function(params) {
                var wishlist = {
                                id:GlobalData.customerAccount.id,
                                owner:GlobalData.customerAccount.accounts[0].id,
                                title:GlobalData.customerAccount.accounts[0].id,
                                createdAt:new Date().toISOString(),
                                items:[params]
                                };
		//params.owner=params.title=GlobalData.customerAccount.accounts[0].id;
	    	return WishREST.one('').customPOST(wishlist);
            }
        };
}]);
