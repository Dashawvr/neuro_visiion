import * as io from 'socket.io-client';

export class SocketConnection {
  constructor() {
    this.socket = null;
  }
  checkConnection() {
    if(!this.socket) {
      this.connect();
    }
  }
  connect() {
    this.socket = io('ws://45.89.89.96:8062/');
  }
  setOnline() {
    this.checkConnection()
    this.socket.emit('socket.setOnline', {access_token: localStorage.getItem('token')})
  }

  setOffline() {
    this.checkConnection()
    this.socket.emit('socket.setOffline', {access_token: localStorage.getItem('token')})
  }

  onNotification() {
    this.checkConnection()
    this.socket.on('socket.notification', (res) => {
      alert(res)
    })
  }
  onError() {
    this.checkConnection()
    this.socket.on('socket.error', (res) => {
      alert(res)
    })
  }

  onUserStatus(fnCallback) {
    this.checkConnection();
    return this.socket.on('socket.userStatus',(res) => {
      fnCallback(res.status);
    })
  }
  checkUserStatus() {
    this.checkConnection()
    this.socket.emit('socket.checkUserStatus', {access_token: localStorage.getItem('token')})
  }
}
