(function() {
    // point model
    app.PointModel = Backbone.Model.extend({

        // 客位状态 0:空闲;2:占用;3:埋单;4:预订
        default: {
            pointState: 0,
            pointName: '-',
            area: '消费区域1',
            pointType: '散台'
        }

    });
})();
