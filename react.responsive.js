var ReactResponsive = {

    mediaQueryListsNameMap: {},

    getInitialState: function () {

        var mediaQueryLists = {};

        for (var name in this.mediaQueryLists) {
           var mediaQueryList = this.mediaQueryLists[name];
           mediaQueryLists[name] = mediaQueryList.matches;
           this.mediaQueryListsNameMap[mediaQueryList.media] = name;
        }

        // Set the initial matches
        return {
            mql: mediaQueryLists
        };
    },

    componentWillMount: function() {

        // Set the listeners
        // Loop through all mediaquerylists
        for (var name in this.mediaQueryLists) {

            var mediaQueryList = this.mediaQueryLists[name];
            if (mediaQueryList.addListener) {
                // Add to the list of listeners
                mediaQueryList.addListener(this.updateMatches);
            }
        }
    },

    componentWillUnmount: function() {

        // Remove listeners from all mediaquerylists
        for (var name in this.mediaQueryLists) {
            this.mediaQueryLists[name].removeListener(this.updateMatches);
        }
    },

    updateMatches: function(mql) {

        var mediaQueryLists = this.state.mql;
        mediaQueryLists[this.mediaQueryListsNameMap[mql.media]] = mql.matches;
        this.setState({ mql: mediaQueryLists });
    }

};

module.exports = ReactResponsive;
