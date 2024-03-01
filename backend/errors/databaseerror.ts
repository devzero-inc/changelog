class DatabaseError extends Error {
  code: string;
  
  constructor(message: string, code: string) {
      super(message);
      this.code = code;
  }
}

class NoSuchTable extends DatabaseError {
  constructor(message: string) {
    super(message, 'NO_SUCH_TABLE');
  }
}

class NoSuchObject extends DatabaseError {
  constructor(message: string) {
      super(message, 'NO_SUCH_OBJECT');
  }
}

class UnhandledError extends DatabaseError {
  constructor(message: string) {
      super(message, 'UNHANDLED_ERROR');
  }
}

export { NoSuchTable, NoSuchObject, UnhandledError };