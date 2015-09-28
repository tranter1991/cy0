// header view
(function(w) {
    'use strict';

    // view obj
    app.HeaderView = Backbone.View.extend({
        // header el
        el: '#home-header',
        events: {
            'click a.switch-point': 'switchPoint',
            'click a.switch-bill': 'switchBill'
        },
        initialize: function() {
            console.debug('initialize');
            console.debug(this.model);
        },

        render: function() {
            console.debug('render');
        },

        switchPoint: function() {
            w.alert('切换客位');
        },

        switchBill: function() {
            w.alert('点击账单');
        }
    });
})(window);

