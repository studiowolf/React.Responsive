/** @jsx React.DOM */

React = require('react');
ResponsiveMixin = require('./../react.responsive.js');

module.exports = {

    // Init the app
    init: function () {

        // Store app in window object
        var self = window.app = this;

        // Render the component, we're using JSX here
        var ExampleComponent = this.getExampleComponent();
        React.render(<ExampleComponent />, document.getElementById('container'));
    },


    getExampleComponent: function() {

        var ExampleComponent = React.createClass({

            // Load the responsive mixin
            mixins: [ResponsiveMixin],

            // The media querly lists you would like to use in your component
            // You could also put your mqls in the global window object
            // if you want to use them across components
            mediaQueryLists: {
                mq1: window.matchMedia("(min-width: 500px)"),
                mq2: window.matchMedia("(min-width: 1000px)"),
                retina: window.matchMedia("(-webkit-min-device-pixel-ratio: 2)")
            },

            render: function() {

                var mq1 = 'Nope';
                var mq2 = 'Nope';
                var retina = 'Nope';

                if(this.state.mql.mq1) mq1 = 'Yes!';
                if(this.state.mql.mq2) mq2 = 'Yes!';
                if(this.state.mql.retina) retina = 'Yes!';

                return (
                    <div>
                        <h3>Which media queries are active?</h3>
                        <ul>
                            <li>At least 500px: { mq1 }</li>
                            <li>At least 1000px: { mq2 }</li>
                            <li>Retina display: { retina }</li>
                        </ul>
                    </div>
                );
            }
        });

        return ExampleComponent;
    }
};

module.exports.init();
