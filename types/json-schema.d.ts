declare module 'json-schema' {
  // Define your custom types here based on the structure of the 'json-schema' library.
  // Example:
  export interface JSONSchema {
    // Define the properties and types of the JSON Schema.
    // Example:
    type: string;
    properties: {
      [key: string]: JSONSchema;
    };
  }
}