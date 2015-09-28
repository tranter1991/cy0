(function() {
    app.PointCollection = Backbone.Collection.extend({

        model: app.PointModel,
        findByWhere: function(where) {
            where = where || {};

            // 筛选客位状态
            if (where.pointState) {
                // TODO
                alert(1);
            }

        }
    });

})();
