import * as React from "react";
import { Helmet } from "react-helmet-async";
import { ErrorBoundary } from "react-error-boundary";
// useErrorHandler

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

function Danger({ username }) {
  if (username === "Danger") {
    throw new Danger("💥 DANGER 💥");
  }
  return `Hi ${username}`;
}

export default function App() {
  const [username, setUsername] = React.useState("");
  const usernameRef = React.useRef(null);

  return (
    <>
      <Helmet>
        <title>ErrorBoundary</title>
        <meta
          name="description"
          content="check my ErrorBoundary page there's alot of stuffs goes on there"
        />
        <link rel="canonical" href="/ErrorBoundary" />
      </Helmet>
      <div>
        <label>
          {`Username (don't type "Danger"): `}
          <input
            placeholder={`type "Danger"`}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            ref={usernameRef}
          />
        </label>
        <div>
          <ErrorBoundary
            FallbackComponent={ErrorFallback}
            onReset={() => {
              setUsername("");
              usernameRef.current.focus();
            }}
            resetKeys={[username]}
          >
            <Danger username={username} />
          </ErrorBoundary>
        </div>
      </div>
    </>
  );
}
