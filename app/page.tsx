import { GetTeam } from "./teams/services/teams.services";
import Teamlist from "./teams/teams";

export default async function Home() {
  const data = await GetTeam();
  return (
    <h1>
      asd
      <Teamlist teams={data} />
    </h1>
  );
}
