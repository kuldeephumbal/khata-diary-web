import axios from "axios";

// POST Method
export const POSTAPI = (api, obj = {}, headers = {}) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.post(api, obj, {
        headers: {
          "Content-Type": "application/json", // Default content type
          ...headers, // Merge custom headers
        },
      });

      if (data.status === "error") {
        return reject(data.message || "API responded with an error.");
      }

      resolve(data);
    } catch (error) {
      reject(
        error.response?.data?.message ||
          error.message ||
          "Unknown error occurred."
      );
    }
  });
};

// GET Method
export const GETAPI = (api, headers = {}) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.get(api, {
        headers: {
          "Content-Type": "application/json", // Default content type
          ...headers, // Merge custom headers
        },
      });

      if (data.status === "error") {
        return reject(data.message || "API responded with an error.");
      }

      resolve(data);
    } catch (error) {
      reject(
        error.response?.data?.message ||
          error.message ||
          "Unknown error occurred."
      );
    }
  });
};

// PUT Method
export const PUTAPI = (api, obj = {}, headers = {}) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.put(api, obj, {
        headers: {
          "Content-Type": "application/json", // Default content type
          ...headers, // Merge custom headers
        },
      });

      if (data.status === "error") {
        return reject(data.message || "API responded with an error.");
      }

      resolve(data);
    } catch (error) {
      reject(
        error.response?.data?.message ||
          error.message ||
          "Unknown error occurred."
      );
    }
  });
};

// DELETE Method
export const DELETEAPI = (api, headers = {}) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.delete(api, {
        headers: {
          "Content-Type": "application/json", // Default content type
          ...headers, // Merge custom headers
        },
      });

      if (data.status === "error") {
        return reject(data.message || "API responded with an error.");
      }

      resolve(data);
    } catch (error) {
      reject(
        error.response?.data?.message ||
          error.message ||
          "Unknown error occurred."
      );
    }
  });
};
