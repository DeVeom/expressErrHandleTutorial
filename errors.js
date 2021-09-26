class CharacterCountExceeded extends Error {
  constructor(post_id, content) {
    super();
    this.name = this.constructor.name;

    if (this instanceof LongTitleError) this.type = "title";
    else if (this instanceof LongBodyError) this.type = "body";

    this.message = `The character count of post (id: ${post_id}) ${this.type} is too long. (${content.length} characters)`;
    this.statusCode = 500;
  }
}

class LongTitleError extends CharacterCountExceeded {}
class LongBodyError extends CharacterCountExceeded {}

export { CharacterCountExceeded, LongTitleError, LongBodyError };
