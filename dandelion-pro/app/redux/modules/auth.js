import { INIT } from '../constants/reduxFormConstants';
import { LOGIN, LOGOUT } from '../constants/loginConstants';

const initialState = {
  credentials: {
    id: '',
    name: '',
    surName: '',
    username: '',
    email: '',
    avatar: '',
    roleId: '',
    password: ''
  },
  isAuthorised: false
};

export default function reducer(state = initialState, { type, credentials }) {
  switch (type) {
    case INIT:
      return state;
    case LOGIN:
      return {
        ...state,
        credentials,
        isAuthorised: true
      }

    case LOGOUT:
      return {
        ...initialState
      }
    default:
      return state;
  }
}
