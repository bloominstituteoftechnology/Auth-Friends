import { useState, useEffect } from "react";
import { matchAsyncState as render } from "../utils";

/**
 * React hook for conditional rendering based on Promise
 * status for simple GET operations using fetch().
 *
 * @param {String} url - The URL to run the query on
 * @param {Object} args - Set of args passed to function
 * @param {Boolean} [args.initialPersist=false] - whether initial state should be rendered while Promise is pending
 * @param {String} [args.method="json"] - response object method
 * @returns {Function}
 */
const useFetchGet = (
  url,
  { initialPersist = false, method = "json" } = {}
) => {
  const [initial, setInitial] = useState(true);
  const [pending, setPending] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setInitial(initialPersist);
    setPending(true);
    fetch(url)
      .then(response => {
        return !response.ok
          ? new Error(response.statusText)
          : response;
      })
      .then(response => response[method]())
      .then(data => {
        setInitial(false);
        setPending(false);
        setError(null);
        setData(data);
      })
      .catch(error => {
        setInitial(false);
        setPending(false);
        setError(error);
        setData(null);
      });
  }, [initialPersist, method, url]);

  return render({ initial, pending, error, data });
};

export default useFetchGet;
