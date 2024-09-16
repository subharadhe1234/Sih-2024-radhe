import { ReactNode } from "react";

export interface NavElements {
   displayName: string,
   linkTo: string,
   logo: ReactNode,
   active: boolean
}

export type FacultyDashboardPageMethods =  [(arg: (prev: NavElements[])=> NavElements[]) => void ,(arg: string)=> void ]
