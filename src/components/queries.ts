<<<<<<< HEAD
// Queries.ts
=======
// queries.ts
>>>>>>> abf5ebea289774dc76d9fd8394b5b715892ae608
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
<<<<<<< HEAD
export type { Character };
=======
export type { Character };
>>>>>>> abf5ebea289774dc76d9fd8394b5b715892ae608
