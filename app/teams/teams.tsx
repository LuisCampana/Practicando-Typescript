import { Teams } from "./teamlist/teamlist";
interface Props {
  teams: Teams;
}
export default function Teamlist({ teams }: Props) {
  console.log(teams);
  return (
    <div>
      {teams.teams.map((team) => (
        <div key={team.id}>
          <h3 key={team.id}>{team.name} </h3>
          <img src={team.crestUrl as any} alt={team.name} height="100"></img>
          <p>{team.email}</p>
          <p>{team.tla}</p>
          <p>{team.website}</p>
        </div>
      ))}
    </div>
  );
}
