import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../../utils/const";


export const getUserDetails = createAsyncThunk(
  "user/getUserDetails",
  async ({ name }) => {
    try {
      const responce = await axios.get(`${BASE_URL}/resume/${name}`);
      return responce?.data;
    } catch (error) {
      return undefined;
    }
  }
);
