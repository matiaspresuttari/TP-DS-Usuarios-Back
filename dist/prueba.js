const bcrypt = require('bcryptjs');
const password = 'aguanteColon';
const hashedPassword = '$2b$10$wffK1Av1qloPpwZcj0uUp.2sS6ETHuX2sI0GEljDAFa0qtuxCAbPS';
const isMatch = bcrypt.compareSync(password, hashedPassword);
console.log(isMatch);
//# sourceMappingURL=prueba.js.map