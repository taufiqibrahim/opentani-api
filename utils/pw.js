import bcrypt from 'bcryptjs';

const pwCompare = (pw, hashedPw) => {
  return bcrypt.compareSync(pw, hashedPw);
}

export {
  pwCompare
}