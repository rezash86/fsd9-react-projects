import useGenres from "../hooks/useGenres";
import { HStack, List, ListItem, Image, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { data } = useGenres();
  return (
    <ul>
      {data.map((genre) => (
        <List>
          <ListItem key={genre.id}>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </ListItem>
        </List>
      ))}
    </ul>
  );
};

export default GenreList;
