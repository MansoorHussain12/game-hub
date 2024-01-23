import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  SkeletonText,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/imageUrl";
import useGameQueryStore from "../store";

const GenreList = () => {
  const { data, isLoading } = useGenres();
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const selectGenreId = useGameQueryStore((s) => s.setGenreId);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {isLoading &&
          skeletons.map((skeleton) => (
            <SkeletonText key={skeleton} height={20} />
          ))}
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY={1.5}>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                fontSize="lg"
                fontWeight={genre.id === genreId ? "bold" : "normal"}
                onClick={() => selectGenreId(genre.id)}
                textAlign="left"
                variant="link"
                whiteSpace="normal"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
