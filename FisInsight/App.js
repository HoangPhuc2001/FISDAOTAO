//import thư viện
import React from "react";
import {  Alert } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
//import file
import allReducers from './src/redux/reducers/index';
import rootSaga from './src/redux/middleware/saga/rootSaga';
import AppContainer from "./src/containers/App"
import messaging from '@react-native-firebase/messaging';

const sagaMiddleware = createSagaMiddleware();
let store = createStore(allReducers, applyMiddleware(sagaMiddleware));



export default class Root extends React.Component {

  componentDidMount() {
    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage.notification,
      );
    });

    messaging().getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit statexxx:',
          remoteMessage,
          remoteMessage.notification.body,
        );
      }
    });
    
    // messaging().onMessage(async remoteMessage => {
    //   console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
    // });
  }

  render() {
      return<Provider store = { store }>
      < AppContainer />
    </Provider >;

  }
}

sagaMiddleware.run(rootSaga);
