export const DEFAULT_REPLY = 'Hi Maya, thanks for reaching out. I’ll confirm pricing and delivery timing and follow up shortly.';

export const INITIAL_MAIL_EXAMPLE = Object.freeze({
  open: false,
  owner: 'Unassigned',
  reply: DEFAULT_REPLY,
  status: '',
});

export function mailExampleReducer(state, action) {
  switch (action.type) {
    case 'open':
      return { ...state, open: true };
    case 'assign':
      return { ...state, owner: 'Daniel · Sales', status: '' };
    case 'edit':
      return { ...state, reply: action.value, status: '' };
    case 'send':
      return { ...state, status: 'Server accepted — simulated only' };
    case 'reset':
      return { ...INITIAL_MAIL_EXAMPLE };
    default:
      return state;
  }
}
