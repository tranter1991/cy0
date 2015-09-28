(function(w) {
    // point view
    app.PointView = Backbone.View.extend({
        className: 'point-list',
        tagName: 'li',
        template: _.template($('#point-item-template').html()),
        events: {
            'click li': choosePoint,
            'dbclick li': intoPoint
        },
        initialize: function() {
        
        },
        choosePoint: function() {
            alert('choosePoint');
        },
        intoPoint: function() {
            alert('intoPoint');
        }


    });
})(window);
