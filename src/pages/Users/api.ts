import { USER_MOCK, addMockUser } from "./mocks/user.mock";
import type { UserDTO } from "./types";

export async function listUsers(): Promise<UserDTO[]> {
  // simulate async
  return Promise.resolve(USER_MOCK.slice());
}

export async function createUser(user: Partial<UserDTO>): Promise<UserDTO> {
  addMockUser(user);
  const created = USER_MOCK[USER_MOCK.length - 1];
  return Promise.resolve(created);
}
