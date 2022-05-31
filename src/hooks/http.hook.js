import React, { useState, useCallback } from "react";

export const useHttp = () => {
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(null);
  const request = useCallback(
    async (url, method = "Post", body = null, headers = {}) => {
      try {
        if (body) {
          body = JSON.stringify(body);
          headers["Content-Type"] = "application/json";
        }
        //  {  'Accept':'application/json' }:
        // credentials: 'same-origin'
        const response = await fetch(url, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "true",
          },

          body,
          method
        });       


        setloading(false);

      } catch (e) {
        setloading(false);
        setError(e.message);
        console.log(e);
        throw e;
      }
    },
    []
  );
  // const query = useCallback( async (url, method = "Get",  body = null, headers = {}) => {
  //   // const response = await fetch (url, {
  //   //   credentials: 'include',
  //   //   method, body, headers: {
  //   //     'Content-Type': 'application/json',
  //   //     'Access-Control-Allow-Headers': 'true',
  //   //     'Authorization' : 'true',
  //   //     'Access-Control-Allow-Credentials' : 'true' ,
  //   //     'Access-Control-Request-Headers':'access-control-allow-credentials,access-control-allow-headers,authorization,content-type'
  //   //   }
  //   // })
  //   try {
  //     if (body) {
  //       body = JSON.stringify(body)
  //       // headers ['Content-Type']='application/json'
  //       // headers ['Access-Control-Allow-Headers'] = true
  //       // headers ['Content-Type,Authorization'] = true
  //       // headers ['Access-Control-Allow-Credentials'] = true

  //     }
  //     const response = await fetch(url, { method, body, headers });
  //     const data = await response.json();

  //     if (!response.ok) {
  //       throw new Error(data.message || "Что-то пошло не так");
  //     }

  //     setloading(false);

  //     return data;
  //   } catch (e) {
  //     setloading(false)
  //     setError(e.message)
  //     throw e
  //   }
  // },[])
  const query = useCallback(
    async (url, method = "GET", headers = {}) => {
      // const response = await fetch (url, {
      //   method, body, headers

      // })
      try {
        const response = await fetch(url, {
          headers: {
            "Content-Type": "application/json"
          },
          credentials: 'include'
        });
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Что-то пошло не так");
        }

        setloading(false);

        return data;
      } catch (e) {
        setloading(false);
        setError(e.message);
        throw e;
      }
    },
    []
  );

  return { loading, request, error, query };
};
