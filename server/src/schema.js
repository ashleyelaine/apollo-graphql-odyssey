const {gql} = require('apollo-server')

const typeDefs = gql`
    # Schema definitions go here
    type Query {
        """
        Query to get
         tracks array for homepage grid
        We want this query to return a non-null list of non-null Tracks
        """
        tracksForHome: [Track!]!
    }

    "A track is a group of Modules that teaches about a specific topic"
    type Track {
        # Fields go here
        id: ID!
        title: String!
        author: Author!
        thumbnail: String
        length: Int
        modulesCount: Int
    }

    "Author of a complete Track or a Module"
    type Author {
        id: ID!
        name: String!
        photo: String
    }

    
`;

module.exports = typeDefs;