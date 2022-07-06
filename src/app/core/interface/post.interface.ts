import { User } from './user.interface'

export interface Post {
    type:                     string;
    id:                       number;
    body:                     string;
    created_at:               string;
    updated_at:               string;
    dynamic_link:             string;
    is_liked_by_current_user: boolean;
    emotion:                  string;
    photos:                   any[];
    hashtags:                 any[];
    num_of_reposts:           number;
    num_of_likes:             number;
    num_of_comments:          number;
    user:                     User;
}


