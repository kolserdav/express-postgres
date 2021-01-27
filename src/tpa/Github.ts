import * as lib from '../lib';
import { OrmResult } from '../types';

type GithubUser = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean,
  name: string;
  company: string | null;
  blog: string;
  location: string;
  email: string | null,
  hireable: boolean;
  bio: string | null;
  twitter_username: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

export default class Github {
  GetUser(name: string): Promise<OrmResult<GithubUser>> {
    return lib.Request.get<GithubUser>(`https://api.github.com/users/${name}`, {
      Accept: 'application/vnd.github.v3+json'
    });
  }
}