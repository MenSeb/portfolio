import * as React from 'react';
import { useRouteError, isRouteErrorResponse } from 'react-router-dom';

export default function Error() {
  const error = useRouteError() as Error;

  return (
    <section aria-label="error page">
      <h1>Oops! Seems like there was an unexpected error...</h1>
      {isRouteErrorResponse(error) ? (
        <>
          <p>{error.data}</p>
          <pre>
            {error.status} - {error.statusText}
          </pre>
        </>
      ) : (
        <p>{error.message}</p>
      )}
    </section>
  );
}
