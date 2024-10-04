module.exports.homelist = function(req, res) {
    res.render('locations-list', {
        title: 'Tourism and Travels - find a place to work with wifi',
        pageHeader: {
            title: 'Tourism and Travels',
            strapline: 'Find places to enjoy your vacation!'
        },
        sidebar: "Looking for a good and burget friendly places to enjoy ? here you are! " +
            "by setting in your home book ur favourite place desitnation by a click with ratings ...",
        locations: [{
            name: 'Web Travels ',
            address: '2-275-30,opposite to cinepollis,high street',
            rating: 5,
            facilities: ['low burget to high burget']
        }, {
            name: 'spy Travels',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 4,
            facilities: ['best hotels with primium services']
        }, {
            name: 'Queens Travels',
            address: '4-507-8,central park,cal street',
            rating: 3,
            facilities: ['right place to plan your vacation']
        }]
    });
  };
  
  module.exports.locationInfo = function(req, res) {
    res.render('locations-info1', { title: 'LocationInfo' });
  };
  
  module.exports.locationInfo1 = function(req, res) {
    res.render('locations-info2', { title: 'LocationInfo1' });
  };
  
  module.exports.locationInfo2 = function(req, res) {
    res.render('locations-info3', { title: 'LocationInfo2' });
  };
  
  module.exports.addReview = function(req, res) {
    res.render('locations-review-form', { title: 'ADD REVIEW' });
  };