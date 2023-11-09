/**
 * Interface for the sign up form
 */
export interface ISignUpForm {
  /**
   * The username of the user
   */
  username: string;

  /**
   * The first name of the user
   */
  firstName: string;

  /**
   * The last name of the user
   */
  lastName: string;

  /**
   * The email of the user
   */
  email: string;

  /**
   * The phone number of the user
   */
  phoneNumber: string;

  /**
   * The location of the user
   */
  location: string;

  /**
   * The password of the user
   */
  password: string;
}
