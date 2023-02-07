import { GetTeam } from "./services/teams.services";
export default async function Teams() {
  const data = await GetTeam();
  return <h1>Hola teams{JSON.stringify(data)}</h1>;
}
