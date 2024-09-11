// Dashboard.jsx
import Sidebar from '@/components/Sidebar';
import DashboardHeader from '@/components/DashboardHeader';
import StatCard from '@/components/StatCard';

const FacultyDashboard = () => {
  const statsData = {
    journals: 126,
    events: 26,
    projects: 15,
    workingHours: {
      thisWeek: [3, 7, 4, 6, 8, 9, 5],
      lastWeek: [4, 6, 3, 7, 8, 6, 4],
    },
  };

  return (
    <div className="flex bg-muted">
      <Sidebar />
      <div className="flex-1 p-4">
        <DashboardHeader 
          username="Subhadip" 
          message="Welcome to Faculty dashboard" 
          profileImage="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        <div className="grid grid-cols-3 gap-4 mt-6">
          <StatCard title="Journals" value={statsData.journals}></StatCard>
          <StatCard title="Events" value={statsData.events}></StatCard>
          <StatCard title="Projects" value={statsData.projects}></StatCard>
        </div>
        <div className="mt-8">
        </div>
      </div>
    </div>
  );
};

export default FacultyDashboard;
