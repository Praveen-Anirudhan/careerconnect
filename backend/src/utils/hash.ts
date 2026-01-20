import bcrypt from 'bcrypt';

export const hashPassword = (plain: string) => {
  return bcrypt.hash(plain, 10);
};

export const comparePassword = (plain: string, hash: string) => {
  return bcrypt.compare(plain, hash);
};
