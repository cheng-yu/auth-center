import { QueryLoginArgs, AuthResponse, MutationRegisterArgs } from './../../generated/graphql';
export const UserResolvers = {
	Query: {
		info: () => "info!!!",
		async login(_: void, args: QueryLoginArgs): Promise<AuthResponse> {
			return {
				token: 'token'
			}
		}
	},
	Mutation: {
		async register(_: void, args: MutationRegisterArgs): Promise<AuthResponse> {
			return {
				token: 'token'
			}
		}
	}
}
