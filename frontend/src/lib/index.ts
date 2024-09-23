import { ReactNode } from "react";

export interface NavElements {
   displayName: string,
   linkTo: string,
   logo: ReactNode,
}

export type FacultyDashboardPageMethod =  (arg: string)=> void
