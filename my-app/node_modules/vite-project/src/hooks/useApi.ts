import * as React from 'react';
// import { z } from 'zod';

// export function useApi<S extends z.ZodTypeAny>(url: string, schema: S) {
//   const [data, setData] = React.useState<z.infer<S> | null>(null);
//   const [loading, setLoading] = React.useState(true);
//   const [error, setError] = React.useState(null);

//   const schemaRef = React.useRef(schema);
//   schemaRef.current = schema;

//   React.useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = async () => {
//     try {
//       setLoading(true);
//       const response = await fetch(url);

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const parsed = schemaRef.current.parse(response.json());

//       setData(parsed);
//       setError(null);
//     } catch (err) {
//       setError(err.message);
//       console.error('Error fetching users:', err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   console.log(1111, data);

//   return { data, loading, error };
// }


export function useApi(url: string) {
  const [data, setData] = React.useState<any | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  

const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json()


      setData(data);
      setError(null);
    } catch (err: any) {
      setError(err.message);
      console.error('Error fetching users:', err);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchUsers();
  }, []);




  return { data, loading, error };
}
