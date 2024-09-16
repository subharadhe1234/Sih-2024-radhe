import { ReactNode } from "react";

interface StatCardProps {
  title: string,
  value: number,
  children?: ReactNode
}

const StatCard : React.FC<StatCardProps> = ({ title, value, children }) => {
   return (
     <div className="bg-white shadow-lg p-4 rounded-md dark:bg-slate-900">
       <h3 className="text-xl font-semibold">{title}</h3>
       <div className="text-4xl font-bold">{value}</div>
       {children}
     </div>
   );
 };
 
 export default StatCard;
 