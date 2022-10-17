import { requestsApi } from "../services/requestsApi";
import { usersApi } from "../services/usersApi";

export const apiMiddlewares = [usersApi.middleware, requestsApi.middleware];
