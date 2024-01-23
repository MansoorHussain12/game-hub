import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiCient";
import { Game } from "./useGames";

const apiCient = new APIClient<Game>("/games");

const useGame = (slug: string) =>
  useQuery({
    queryKey: ["games", slug],
    queryFn: () => apiCient.get(slug),
  });

export default useGame;
