// Sample data for destinations
const destinations = [
    {
        name: "Paris, France",
        image: "https://example.com/paris.jpg", // Replace with actual image URL
        description: "The city of lights, known for its art, fashion, and culture."
    },
    {
        name: "Tokyo, Japan",
        image: "https://example.com/tokyo.jpg", // Replace with actual image URL
        description: "A bustling metropolis blending tradition and innovation."
    },
    {
        name: "New York City, USA",
        image: "https://example.com/nyc.jpg", // Replace with actual image URL
        description: "The city that never sleeps, filled with iconic landmarks."
    },
    {
        name: "Sydney, Australia",
        image: "https://example.com/sydney.jpg", // Replace with actual image URL
        description: "Famous for its Sydney Opera House and stunning harbour."
    }
];

// Controller function for destinations page
exports.index = function(req, res) {
    res.render('destinations', { destinations: destinations, title: 'Destinations' });
};
