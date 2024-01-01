import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Timer from './components/Timer'

export default function App() {
  return (
    <>
      <Header/>
      <Main/>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
            }}>
        <Timer/>
      </div>
    </>
  );
}
