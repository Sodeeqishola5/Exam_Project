import * as React from 'react';
import {Helmet} from 'react-helmet-async'
import { ErrorBoundary } from 'react-error-boundary';
// useErrorHandler

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: 'red' }}>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

function Bomb({ username }) {
  if (username === 'bomb') {
    throw new Error('💥 CABOOM 💥');
  }
  return `Hi ${username}`;
}

export default function App() {
  const [username, setUsername] = React.useState('');
  const usernameRef = React.useRef(null);

  return (
    <>
      <Helmet>
        <title>ErrorBoundary</title>
        <meta name="description" content="check my ErrorBoundary page there're alot of stuffs goes on there"/>
        <link rel="canonical" href="/ErrorBoundary" />
      </Helmet>
    <div>
      <label>
        {`Username (don't type "bomb"): `}
        <input
          placeholder={`type "bomb"`}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          ref={usernameRef}
        />
      </label>
      <div>
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={() => {
            setUsername('');
            usernameRef.current.focus();
          }}
          resetKeys={[username]}
        >
          <Bomb username={username} />
        </ErrorBoundary>
      </div>
    </div>
    </>
  );
}
