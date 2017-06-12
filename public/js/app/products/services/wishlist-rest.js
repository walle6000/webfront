'use strict';

angular.module('ds.products')
    .factory('WishREST', ['SiteConfigSvc','Restangular', function(siteConfig,Restangular){
            return Restangular.withConfig(function(RestangularConfigurer) {
                RestangularConfigurer.setBaseUrl(siteConfig.apis.wishlist.baseUrl);
            });
    }]);
