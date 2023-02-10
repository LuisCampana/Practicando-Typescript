export interface Teams {
  count: number;
  filters: Filters;
  teams: Team[];
}

export interface Filters {
  areas: number[];
  permission: string;
}

export interface Team {
  id: number;
  area: Area;
  name: string;
  shortName: string;
  tla: null | string;
  crestUrl: null | string;
  address: string;
  phone: null | string;
  website: string;
  email: null | string;
  founded: number | null;
  clubColors: null | string;
  venue: null | string;
  lastUpdated: Date;
}

export interface Area {
  id: number;
  name: Name;
}

export enum Name {
  England = "England",
}
