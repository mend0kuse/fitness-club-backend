import { User } from '@prisma/client';
import { excludeFields } from '../shared/excludeFields';

export const excludePassword = (user: User) => {
  return excludeFields(user, ['password']);
};
