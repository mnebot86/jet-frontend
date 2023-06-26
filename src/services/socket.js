import io from 'socket.io-client';
import { REACT_APP_BASE_SOCKET_IP } from '@env';

const BASE_URL = REACT_APP_BASE_SOCKET_IP;

export const socket = io(BASE_URL);
