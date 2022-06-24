import {createSelector} from "@reduxjs/toolkit";
import { api as taskApi } from "./api";

export const selectEmployeesResult = taskApi.endpoints.getEmployees.select();
export const selectEmployeeData = createSelector(
  selectEmployeesResult,
  employeeResult => employeeResult.data
);

export const { useGetEmployeesQuery } = taskApi;

export default taskApi;