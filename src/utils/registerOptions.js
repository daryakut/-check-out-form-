export const registerOptions = {
  firstName: {
    required: "Please enter your first name",
    minLength: {
      value: 1,
      message: "Name must have at least 1 and maximum 19 characters",
    },
    maxLength: {
      value: 19,
      message: "Name must have at least 1 and maximum 19 characters",
    },
  },
  secondName: {
    required: "Please enter your surname name",
    minLength: {
      value: 1,
      message: "Name must have at least 1 and maximum 19 characters",
    },
    maxLength: {
      value: 19,
      message: "Name must have at least 1 and maximum 19 characters",
    },
  },
  company: {},
  streetAddress: {
    required: "Please enter your street address",
    minLength: {
      value: 3,
      message: "street address must have at least 3 and maximum 100 characters",
    },
    maxLength: {
      value: 100,
      message: "street address must have at least 3 and maximum 100 characters",
    },
  },
  city: {
    required: "Please enter your city",
    minLength: {
      value: 3,
      message: "city must have at least 3 and maximum 12 characters",
    },
    maxLength: {
      value: 100,
      message: "city must have at least 3 and maximum 100 characters",
    },
    pattern: {
      value: /^[A-Za-z\s-]+$/,
      message: "Please enter a latin symbols",
    },
  },
  zip: {
    required: "Please enter your ZIP code",
    maxLength: {
      value: 7,
      message: "ZIP code must have maximum 7 characters",
    },
  },
  phone: {
    required: "Please enter your phone number",
    pattern: {
      value:
        /^(?:\+?(\d{1,3}))?[-.\s]?(\(\d{1,5}\)|\d{1,5})[-.\s]?(\d{1,7})[-.\s]?(\d{1,7})[-.\s]?(\d{1,7})$/,
      message: "Please enter a valid phone number",
    },
  },
  email: {
    required: "Please enter your email address",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      message: "Please enter a valid email address",
    },
  },
  additionalInfo: {},
  country: {
    required: "Please select a country",
    styles: {
      control: (provided) => ({
        ...provided,
        backgroundColor: "#fff", // Цвет фона контейнера
      }),
      option: (provided, state) => ({
        ...provided,
        color: state.isSelected ? "black" : "gray", // Цвет текста
        cursor: "pointer",
        backgroundColor: state.isSelected ? "#e0e0e0" : "white", // Цвет фона
        transition: "background-color 0.3s",
        ":hover": {
          backgroundColor: "#c0c0c0", // Цвет фона при наведении
        },
      }),
    },
  },
  region: {},
};
