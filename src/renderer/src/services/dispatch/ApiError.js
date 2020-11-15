export default class ApiError extends Error {
  constructor({ details, message }) {
    super(message);
    this.details = details;
  }
}
