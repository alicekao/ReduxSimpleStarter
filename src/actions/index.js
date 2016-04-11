// All actions we create

export function selectBook(book) {
// selectBook is an ActionCreator, it needs to return an action: an obj with a type property.
// Typically have a type (purpose of the action) and a payload (piece of data that describes the action being taken) prop
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
