import { merge } from "lodash";
import { UserResolvers } from "./resolvers/userResolver";

const resolverMap = merge(UserResolvers);
export default resolverMap;
