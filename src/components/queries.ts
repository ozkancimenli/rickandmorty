// Queries.ts
import { gql } from "@apollo/client";

// Define the Character interface
interface Character {
  id: string;
  name: string;
  image: string;
  status: string;
  species: string;
  location: {
    name: string;
  };
  episode: {
    id: string;
  }[];
}

// GraphQL query to get all characters
const getAllCharacters = gql`
  query GetAllCharacters {
    characters {
      results {
        id
        name
        image
        status
        species
        location {
          name
        }
        episode {
          id
        }
      }
    }
  }
`;

// Export the getAllCharacters query and the Character interface
export { getAllCharacters };
export type { Character };