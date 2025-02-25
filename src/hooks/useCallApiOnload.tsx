import { useIsFocused } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { Alert } from "react-native";

const useCallApiOnLoad = (
  apiFunction: (data?: any) => Promise<any>,
  params?: any, // Parameters for the API function
  shouldCallApi: boolean = true, // Parameter to control API call
  onSuccess?: (data: any) => void // Optional onSuccess callback
) => {
  const [data, setData] = useState<any[] | any>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const isFocus = useIsFocused();

  const callApi = async () => {
    setError(null);
    try {
      const results: any = await apiFunction(params); // Pass params to the api function
      if (__DEV__) {
        console.log("results", JSON.stringify(results));
      }
      setData(results);

      // If onSuccess is provided, call it with the results
      if (results && onSuccess) {
        onSuccess(results);
      }
    } catch (err: any) {
      setError(err.message || "An error occurred");
      Alert.alert("Error", err.message);
    } finally {
      setLoading(false);
    }
  };

  // Call the API on mount or when params change if shouldCallApi is true
  useEffect(() => {
    setLoading(true);
    if (shouldCallApi && isFocus) {
      callApi();
    }
  }, [shouldCallApi, isFocus]); // Re-run when shouldCallApi or isFocus change

  return { data, loading, error, callApi, setLoading };
};

export default useCallApiOnLoad;
