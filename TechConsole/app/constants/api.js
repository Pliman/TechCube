const prefix = (path) => `/api/${path}`;

export const GET_USERS = prefix('user/getUsers');
export const GET_TASKS = prefix('task/getTasks');
export const GET_TECHS = prefix('tech/getTechs');

