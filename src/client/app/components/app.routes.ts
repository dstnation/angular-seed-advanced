// app
import { HomeRoutes } from './home/home.routes';
import { AboutRoutes } from './about/about.routes';
import { EmployeeRoutes } from './employee/employee.routes';



export const routes: Array<any> = [
  ...HomeRoutes,
  ...AboutRoutes,
  ...EmployeeRoutes
];
