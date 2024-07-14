import React, { useRef, useState } from 'react';
import './app.css';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

import {useCollectionData} from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyBthyWK4QJXSqhUG90VrqPHn8TCIi61nvk",
  authDomain: "redemarrage-6a6ac.firebaseapp.com",
  projectId: "redemarrage-6a6ac",
  storageBucket: "redemarrage-6a6ac.appspot.com",
  messagingSenderId: "128546280097",
  appId: "1:128546280097:web:4933bc9658267d9c71d6e0",
  measurementId: "G-P3B52VMFYW"
})

function App() {
}

function ChatRoom() {

  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);
  const [messages] = useCollectionData(query, {idField: 'id'});

  return (
    <div>
      {messages &&
        messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
    </div>
  );
}

function ChatMessage(props) {
  const {text,uid} = props.message;

  return <p>{text}</p>
}

export default App;
