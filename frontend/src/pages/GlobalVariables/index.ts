let globalEmail = "";

export function updateGlobalEmail(email: string) {
  globalEmail = email;
}

export function getGlobalEmail() {
  return globalEmail;
}
