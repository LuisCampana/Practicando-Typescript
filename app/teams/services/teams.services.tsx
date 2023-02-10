export const GetTeam = async () => {
  const res = await fetch("http://api.football-data.org/v2/teams", {
    headers: {
      "X-Auth-token": " a09098df8d6e4a4c95fdb60aa926c505",
    },
  });
  return res.json();
};
