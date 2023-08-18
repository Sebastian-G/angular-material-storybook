export const formFieldArgtypes = {
  appearance: {
    description: 'The form field appearance style',
    control: 'select',
    defaultValue: 'fill',
    table: {
      defaultValue: {summary: 'fill'},
    },
    options: [
      'fill', 'outline'
    ]
  },
  color: {
    description: 'Theme color palette',
    control: 'select',
    defaultValue: 'primary',
    table: {
      defaultValue: {summary: 'primary'},
    },
    options: [
      'primary',
      'accent',
      'warn',
    ]
  },
  floatLabel: {
    description: 'Whether the label should always float, never float or float as the user types',
    control: 'select',
    defaultValue: 'auto',
    table: {
      defaultValue: {summary: 'auto'},
    },
    options: [
      'always',
      'auto',
    ]
  },
  hideRequiredMarker: {
    description: 'Whether the required marker should be hidden',
    defaultValue: false,
    table: {
      type: {summary: 'boolean'},
      defaultValue: {summary: false},
    },
    control: {
      type: 'boolean'
    }
  },
  hintLabel: {
    description: 'Text for the form field hint',
    defaultValue: '',
    table: {
      type: {summary: 'text'},
      defaultValue: {summary: ''},
    },
    control: {
      type: 'text'
    }
  },
  alignHint: {
    description: 'Whether to align the hint label at the start or end of the line',
    control: 'select',
    defaultValue: 'start',
    table: {
      defaultValue: {summary: 'start'},
    },
    options: [
      'start',
      'end',
    ]
  },
}
