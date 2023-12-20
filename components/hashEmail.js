function hashEmail(email) {
  // Split the email into two parts
  const [username, domain] = email.split("@");

  // Determine the length of the username
  const usernameLength = username.length;

  // Replace the username with asterisks
  const hiddenUsername = "*".repeat(usernameLength);

  // Concatenate the hidden username, '@', and domain
  const hiddenEmail = `${hiddenUsername}@${domain}`;

  "Original Email:", email;
  "Hidden Email:", hiddenEmail;
  return hiddenEmail;
}
export default hashEmail;
