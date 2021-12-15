const category = "Base";

export const LocaleArgTypes = {
  locale: {
    table: { defaultValue: { summary: "en_US" }, category },
  },
};

export const BaseFieldArgTypes = {
  ...LocaleArgTypes,
  ...{
    readOnly: {
      table: { defaultValue: { summary: false }, category },
    },
    required: {
      description: "Mark the field as required",
      table: { defaultValue: { summary: "false" }, category },
    },
    value: {
      description: "Value of the component",
      table: { category },
    },
    onChange: {
      description: "Callback fired when the value is changed",
      table: { category },
    },
  },
};
