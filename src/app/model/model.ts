export class User {
  id!: number;
  username!: string;
  firstName!: string;
  lastName!: string;
  password!: string;
  phoneNumber!: string;
  email!: string;
  userRole: UserRole = new UserRole();
}

export class UserRole {
  id!: number;
  userRole!: string;
}

export class Login {
  constructor(public username: string, public password: string, public rememberMe: boolean) {
  }
}


