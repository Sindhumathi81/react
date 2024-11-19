export interface Field {
    label: string;
    type: string;
    name: string;
    placeholder?: string;
    options?: string[];
    required?: boolean;
  }
  
  export interface FormSchema {
    title: string;
    fields: Field[];
  }
  