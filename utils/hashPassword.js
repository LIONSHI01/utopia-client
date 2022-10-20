import bcrypt from 'bcryptjs';

export const hashPassword = async (password) => await bcrypt.hash(password, 12);

export const verifyPassword = async (candidatePassword, hashedPassword) => {
  const isValid = await bcrypt.compare(candidatePassword, hashedPassword);
  return isValid;
};
