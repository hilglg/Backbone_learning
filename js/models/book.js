var app = app || {};

app.Book = Backbone.Model.extend({
    defaults: {
        coverImage: 'img/cover.jpg',
        title: 'No title',
        author: 'Unknown',
        releaseDate: 'Unknown',
        keywords: 'None'
    },

    parse: function( response ) {
	    response.id = response._id;
	    return response;
	}
});

