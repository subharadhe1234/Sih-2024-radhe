// StatCard.jsx
const StatCard = ({ title, value, children }:any) => {
   return (
     <div className="bg-white shadow-lg p-4 rounded-md">
       <h3 className="text-xl font-semibold">{title}</h3>
       <div className="text-4xl font-bold">{value}</div>
       {children}
     </div>
   );
 };
 
 export default StatCard;
 